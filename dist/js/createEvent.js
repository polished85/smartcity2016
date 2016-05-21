var markup = `
	<form>
	  <div class="form-group">
	    <label for="eventName">Event Name</label>
	    <input type="text" class="form-control" id="eventName" placeholder="Event Name" required>
	  </div>
	  <div class="form-group">
	    <label for="eventLocation">Location</label>
	    <input type="text" class="form-control" id="eventLocation" placeholder="Event Location" required>
	  </div>
	  <div class="form-group">
	    <label for="eventDate">Date</label>
	    <input type="date" class="form-control" id="eventDate" placeholder="Event Date" required>
	  </div>
	  <div class="form-group">
	    <label for="eventTime">Time</label>
	    <input type="time" class="form-control" id="eventTime" placeholder="Event Time" required>
	  </div>
	  <div class="checkbox">
	    <label>
	      <input id="eventPrivate" type="checkbox"> Is private?
	    </label>
	  </div>
	  <button id="create_event_btn" type="button" class="btn btn-block btn-success">Create</button>
	</form>
`

document.getElementById('create_event').innerHTML = markup

document.getElementById('create_event_btn').onclick = function(e){
	e.preventDefault()
	console.log('creating event...')
	var eventName = document.getElementById('eventName').value
	var eventDate = document.getElementById('eventDate').value
	var eventTime = document.getElementById('eventTime').value
	var eventLocation = document.getElementById('eventLocation').value
	var eventPrivate = document.getElementById('eventPrivate')
	var isPrivate
	eventPrivate.checked ? isPrivate = true : isPrivate = false

	let event = {
	  name: eventName,
	  location: eventLocation,
	  date: eventDate,
	  time: eventTime,
	  isPrivate: isPrivate
	}

	events
	.store(event)
	.subscribe(
		(event) => {
			console.log(event)
			window.location.pathname = 'find-events.html'
		}, 
		(err) => {
			console.log(err)
		}
	)
}
