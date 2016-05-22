
var eventId = window.location.hash.substring(1)
console.log('eventId: ', eventId)

events
.find(eventId)
.fetch()
.subscribe(
	(event) => {
		console.log(event)
		var eventEl = document.getElementById('event')
		var eventName = document.getElementById('event_name').textContent = event.name
		var eventList = document.createElement('ul')
		eventList.className = 'list-group'
    var eventMarkup = `
    	<li class="list-group-item"><b>Location:</b> ${event.location}</li>
    	<li class="list-group-item"><b>Date:</b> ${event.date}</li>
    	<li class="list-group-item"><b>Time:</b> ${event.time}</li>
    	<li class="list-group-item"><b>Private?</b> ${event.isPrivate ? 'yes' : 'no'}</li>
		`
		eventList.innerHTML = eventMarkup
		eventEl.appendChild(eventList)

		//get user address
		var uadd = user.find(localStorage.getItem("userid")).fetch().subscribe(
			(user) => {
				return user.data.address
			},
			(err) => {
				console.log(err)
			}
		)

		var driverList = document.getElementById('driver-list')
		var listContent = '<ul>'
		event.attendees.forEach(function(attendee){
			if(attendee.type == "driver"){
				user.find(attendee.userid).fetch().subscribe(
					(user)=>{
						console.log(user)
						var distance = distance(user.data.address, uadd)
						listContent += '<li class="list-group-item"> Driver: ' + user.data.name + 'is ' + distance + ' away from you. </li>'
					},
					(err) => {
						console.log(err)
				})
			}
		})
		listContent += "</ul>"
		driverList.innerHTML = listContent
	},
	(err) => {
		console.log(err)
	})
