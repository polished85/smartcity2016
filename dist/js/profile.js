var userid
if(window.location.hash){
	// user check other people profile
	userid= window.location.hash.substring(1)
}else{
	userid = localStorage.getItem('userid')
}

users
.find(userid)
.fetch()
.subscribe(
	(user) => {
		console.log(user)
		var userContainer = $('.container')
		var fieldsList = $('#profile-fields')
    var fieldsMarkup = `
      <label for="user-name">Name: </label>
      <div type="text" id="user-name">${user.data.name}</div>
      <label for="user-email">Email: </label>
      <div type="text" id="user-email">${user.email}</div>
      <label for="user-address">Address: </label>
      <div type="text" id="user-address">${user.data.address}</div>
      <label for="user-phone">Phone: </label>
      <div type="text" id="user-phone">${user.data.phone}</div>
      <label for="user-about">About: </label>
      <div type="text" id="user-about">${user.data.about}</div>
		`
		fieldsList.html(fieldsMarkup)
	},
	(err) => {
		console.log(err)
	}
)
