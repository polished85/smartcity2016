
horizon.onReady(function() {
  $('body > div.top-content > div > div > div:nth-child(2) > div:nth-child(4) > div > button').click(function(event){
    event.preventDefault();
    try{
      users.store({
      "email": $('#form-email').val(),
      "data": {
        "name": $('#form-name').val(),
        "phone": $('#form-phone').val(),
        "password": $('#form-password').val(),
        "about": $('#form-about-yourself').val()
        }
      })
      $('body > div.top-content > div > div > div:nth-child(2) > div:nth-child(4) > div > div.form-bottom > form')[0].reset()
    }catch(err){
      console.log(err)
    }
    console.log("signed up")
  })
})

// debug function
function see(items){
  items.fetch().subscribe(
  (eventItems) => {
    eventItems.forEach((event) => {
      // Each result from the chat collection
      //  will pass through this function
      console.log(event)
    })
  },
  (err) => {
    console.log(err)
  }
)
}
/*{
    "id": "D6B8E9D0-CD96-4C01-BFD6-2AF43141F2A7",
    "groups": [ "default", "authenticated" ],
    "providers": {
        "google": { /* third-party user profile /* }
    },
    "data": {
        "key1": "value1",
        "key2": "value2",
        ...
    }
}*/
