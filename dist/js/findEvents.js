
horizon.onReady(function() {
	events
	.fetch()
	.subscribe(
	  (eventItems) => {
	    eventItems.forEach((event) => {
	      // Each result from the chat collection
	      //  will pass through this function
	      console.log(event)
				var table = document.getElementById('find_events')
	      var tableRow = document.createElement('tr')
	      var rowMarkup = `
	      	<td><a href="event.html#${event.id}">${event.name}</a></td>
	      	<td>${event.date}</td>
	      	<td>${event.time}</td>
				`
				tableRow.innerHTML = rowMarkup
				table.appendChild(tableRow)
	    })
	  },
	  (err) => {
	    console.log(err)
	  }
	)

	document.querySelector('#find_events td > a').onclick = function(){

	}
})
