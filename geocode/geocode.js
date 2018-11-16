const request = require('request');

let geocodeAddress = (address, callback) => {
  let encodedAddress =  encodeURIComponent(address);
  console.log(`Addy: ${encodedAddress}`);
  // if(address ==='') {
    // encodedAddress='1301%20lombard%20street%20philadelphia';
    // console.log('in if statement');


  let   myAddy  = `&location=${encodedAddress}`,
        myURL   = 'http://mapquestapi.com/geocoding/v1/address?',
        myWxKey = process.env.MAP_WEATHER_APP_KEY;

// console.log(myWxKey);
// console.log(myURL);
// console.log(body);
console.log(myURL + `key=` +`${myWxKey}` + myAddy);

  request({
    //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500
      url: myURL + `key=` + myWxKey + myAddy,
      json: true 
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Mapquest servers');
    } else if (body.results[0].locations[0].geocodeQualityCode === "Z1XAA") {
      callback('Unable to find that address.');
      console.log('in first else if');
    } else if (body.results[0].locations[0].geocodeQualityCode === "P1AAA") {
      // callback(undefined, {
      console.log(body.results[0].providedLocation.location);
      console.log(body.results[0].locations[0].latLng.lat);
      console.log(body.results[0].locations[0].latLng.lng);
        // address: body.results[0].providedLocation.location,
        // latitude: body.results[0].locations[0].latLng.lat,
        // longitude: body.results[0].locations[0].latLng.lng
      // });
      //next line addedin for testing
    }
    // }
  });
};

module.exports.geocodeAddress = geocodeAddress;
