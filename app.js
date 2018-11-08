const request = require('request');

let   myAddy = '&location=1301%20lombard%20street%20philadelphia',
      myURL = 'http://mapquestapi.com/geocoding/v1/address?',
      myKey =   process.env.WEATHER_APP_KEY;


request({
  //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500


    url: myURL + `key=` +`${process.env.WEATHER_APP_KEY}` + myAddy,
    json: true 
}, (error, response, body) => {
  console.log(body);
});
