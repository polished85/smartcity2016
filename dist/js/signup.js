
$('body > div.top-content > div > div > div:nth-child(2) > div:nth-child(4) > div > button').click(function(event){
  event.preventDefault();
  users.store({
    'id': 1,
    "groups": [ "default", "authenticated" ],
    "data": {
      "email": $('#form-name').val()
    }
  })
  console.log("signed up")
})



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
