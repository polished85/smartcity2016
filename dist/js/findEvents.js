
horizon.onReady(function() {
	console.log('horizon ready')
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
	      	<td><a href="join-event.html#${event.id}">${event.name}</a></td>
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

	document.getElementById('search').onkeyup = function(e){
		var query = this.value
		console.log(query)

		horizon.onReady(function() {
			events
			.fetch()
			.subscribe(
			  (eventItems) => {
			  	function containsQuery(event) {
			  		console.log('event: ', event)
			  		var name = event.name.toLowerCase()
			  		query = query.toLowerCase()
			  		return name.includes(query)
					}
			  	var filteredItems = eventItems.filter(containsQuery)
			    console.log('filtered items', filteredItems)

					var table = document.getElementById('find_events')
					table.innerHTML = ''

					filteredItems.forEach((event) => {
			      var tableRow = document.createElement('tr')
			      var rowMarkup = `
			      	<td><a href="join-event.html#${event.id}">${event.name}</a></td>
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
		})
	}
})
