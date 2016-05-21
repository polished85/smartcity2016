
var horizon = Horizon({authType: 'anonymous'})
horizon.onReady(function() {
  console.log('db connected. ready to go.')
})
horizon.connect()

const events = horizon('events')
const users = horizon('users')
