function distance(p1, p2){
  $ajax({url: 'https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=' + p1 + '&destinations='
  p2 + '&key=AIzaSyDFZXz0ayeYU87ryhOmfHAd6oonUKcpV_U'}, success: funciton(res){
    var data = JSON.parse(res)
    console.log(data)
    return data.rows[0].elements[0].distance.text
  })
}
