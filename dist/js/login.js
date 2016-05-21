horizon.onReady(function() {
  $('body > div.top-content > div > div > div:nth-child(2) > div:nth-child(1) > div.form-box > div.form-bottom > form > button').click(function(event){
    event.preventDefault();
    var email = $('#form-username').val()
    var password = $('#form-password-login').val()
    try{
      users.find({email: email}).fetch().subscribe(
          (id) => {
            if(id.data.password == password){
              console.log("signed in")
              window.location.pathname = "my-events.html"
            }else{
              alert("wrong password!")
            }
          },
          (err) => {
            console.error(err)
          }
      )
    }catch(err){
      console.log(err)
    }
    $('body > div.top-content > div > div > div:nth-child(2) > div:nth-child(1) > div.form-box > div.form-bottom > form')[0].reset()

  })
})
