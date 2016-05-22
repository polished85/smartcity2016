
var horizon = Horizon({authType: 'anonymous'})
horizon.onReady(function() {
  console.log('db connected. ready to go.')
})
horizon.connect()

const events = horizon('events')
const users = horizon('users')


// template mark up

var markup = `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="index.html">Carpool <i class="glyphicon glyphicon-leaf"></i></a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="create-event.html">Create Event <span class="sr-only">(current)</span></a></li>
        <li><a href="find-events.html">Find Event</a></li>
        <li><a href="find-events.html">My Events</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Profile<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="settings.html">Settings</a></li>
            <li><a href="signup.html">Sign out</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
`
var nav = document.createElement('nav')
nav.innerHTML = markup

// check user authentication
if(localStorage.getItem('userid') === null){
  if(window.location.pathname != "/signup.html"){
    window.location.pathname = "signup.html"
  }
}
