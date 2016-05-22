
var eventId = window.location.hash.substring(1)
console.log('eventId: ', eventId)
console.log('userId', localStorage.getItem('userid'))
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
					<button id="join_as_passanger" class="btn btn-block btn-primary">Passanger</button>
				</div>
		`
		var eventEl = document.getElementById('join_event')
		var eventContent = document.createElement('div')
		eventContent.className = 'container'
		eventContent.innerHTML = markup
		eventEl.appendChild(eventContent)
	},
	(err) => {
		console.log(err)
	}
)

document.getElementById('join_as_driver').onclick = function(){

}

document.getElementById('join_as_passanger').onclick = function(){
	
}
