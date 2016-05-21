
var horizon = Horizon()
horizon.onReady(function() {
  console.log('db connected. ready to go.')
})
horizon.connect()

var events = horizon('events')
