var markup = `
	<form>
	  <div class="form-group">
	    <label for="eventName">Event Name</label>
	    <input type="text" class="form-control" id="eventName" placeholder="Event name">
	  </div>
	  <div class="form-group">
	    <label for="eventLocation">Location</label>
	    <input type="text" class="form-control" id="eventLocation" placeholder="Password">
	  </div>
	  <div class="checkbox">
	    <label>
	      <input id="eventPrivate" type="checkbox"> Is private?
	    </label>
	  </div>
	  <button id="create_event_btn" type="submit" class="btn btn-block btn-success">Create</button>
	</form>
`

document.getElementById('create_event_view').innerHTML = markup

document.getElementById('create_event_btn').onclick = function(){
	console.log('creating event...')
	var eventName = document.getElementById('eventName').value
	var eventLocation = document.getElementById('eventLocation').value
	var eventPrivate = document.getElementById('eventPrivate')
	var isPrivate
	eventPrivate.checked ? isPrivate = true : isPrivate = false

	let event = {
	  name: eventName,
	  location: eventLocation,
	  datetime: new Date(),
	  isPrivate: isPrivate
	}

	events.store(event)
}
