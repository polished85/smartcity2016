
horizon.onReady(function() {
	events.fetch().subscribe(
	  (eventItems) => {
	    eventItems.forEach((event) => {
	      // Each result from the chat collection
	      //  will pass through this function
	      console.log(event)
				var list = document.getElementById('my_events')
	      var el = document.createElement('li')
	      el.textContent = event.author
	      el.className = 'list-group-item'
	      
	      var eventMarkup = `<span>
					<label>name:</label> ${event.name},
					<label>location:</label> ${event.location}
					<label>private?</label> ${event.isPrivate ? 'true' : 'false'}
				 </span>
				`
				el.innerHTML = eventMarkup
				list.appendChild(el)
	    })
	  },
	  (err) => {
	    console.log(err)
	  }
	)
})
