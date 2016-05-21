
var eventId = window.location.hash.substring(1)
console.log('eventId: ', eventId)

events
.find(eventId)
.fetch()
.subscribe(
	(event) => {
		console.log(event)
		var eventEl = document.getElementById('event')
		var eventList = document.createElement('ul')
		eventList.className = 'list-group'
    var eventMarkup = `
    	<li class="list-group-item"><b>Event Name:</b> ${event.name}</li>
    	<li class="list-group-item"><b>Event Location:</b> ${event.name}</li>
    	<li class="list-group-item"><b>Event Date:</b> ${event.date}</li>
    	<li class="list-group-item"><b>Event Time:</b> ${event.time}</li>
    	<li class="list-group-item"><b>Private Event?:</b> ${event.isPrivate ? 'yes' : 'no'}</li>
		`
		eventList.innerHTML = eventMarkup
		eventEl.appendChild(eventList)
	},
	(err) => {
		console.log(err)
	}
)
