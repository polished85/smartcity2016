var eventId = window.location.hash.substring(1)
console.log('eventId: ', eventId)
console.log('userId', localStorage.getItem('userid'))
var attendees
events
.find(eventId)
.fetch()
.subscribe(
	(event) => {
		console.log(event)
		var markup = `
			<h1 class="text-center">Set Up A Carpool!</h1>
			<hr/>
			<h3 class="text-center">I am going to ${event.name} as a:</h3>
			<div class="row">
				<div class="col-xs-12 col-sm-6">
					<button id="join_as_driver" class="btn btn-block btn-primary">Driver</button>
				</div>
				<div class="col-xs-12 col-sm-6">
					<button id="join_as_passenger" class="btn btn-block btn-primary">Passenger</button>
				</div>
			</div>
		`
		attendees = event.attendees || []
		var eventEl = document.getElementById('join_event')
		var eventContent = document.createElement('div')
		eventContent.className = 'container'
		eventContent.innerHTML = markup
		eventEl.appendChild(eventContent)

		document.getElementById('join_as_driver').onclick = function(e){
			console.log('joining as driver&hellip;')
			var userId = localStorage.getItem('userid')
			var attendee = {
				user: userId,
				type: 'driver',
				users: []
			}
			attendees.push(attendee)
			events
			.replace({
		    id: event.id,
		    name: event.name,
		    location: event.location,
		    date: event.date,
		    time: event.time,
		    private: event.private,
		    attendees: attendees
			})
			.subscribe(
				(event) => {
					console.log(event)
					window.location.pathname = 'event-driver.html'
					window.location.hash = event.id
				},
				(err) => {
					console.log(err)
				}
			)
		}




	},
	(err) => {
		console.log(err)
	}
)
