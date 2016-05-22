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

		
	},
	(err) => {
		console.log(err)
	})
