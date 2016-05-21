var horizon = Horizon()
horizon.onReady(function() {
  document.querySelector('h1').textContent = 'SmartCity 2016!'
})
horizon.connect()




var chat = horizon('messages')

let message = {
  text: "Reactive programming is awesome!",
  datetime: new Date(),
  author: "@test"
}

chat.store(message)

document.getElementById('fetch').onclick = function(){

	chat.fetch().subscribe(
  (items) => {
    items.forEach((item) => {
      // Each result from the chat collection
      //  will pass through this function
      console.log(item)
      var el = document.createElement('li')
      el.textContent = item.author
      el.className = 'list-group-item'
      var list = document.getElementById('list')
      list.appendChild(el)
      var x = `<li class="todo" id="${todo.id}">
				 <input type="checkbox" ${todo.done ? 'checked' : ''}>
				 ${item.text} -- ${todo.datetime}
			 </li>
			`;

    })
  },
  // If an error occurs, this function
  //  will execute with the `err` message
  (err) => {
    console.log(err)
  })
}
