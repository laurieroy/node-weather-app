const request = require('request');

let geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    let encodedAddress =  encodeURIComponent(address);

    let   myAddy  = `&location=${encodedAddress}`,
          myURL   = 'http://mapquestapi.com/geocoding/v1/address?',
          myMapKey = process.env.MAP_WEATHER_APP_KEY;

    request({
      url: myURL + `key=` + myMapKey + myAddy,
      json: true 
    }, (error, response, body) => {
      if (error) {
        reject('Unable to connect to Mapquest servers');
      } else if (body.results[0].locations[0].geocodeQualityCode === "Z1XAA") {
        reject ('Unable to find that address.');
      } else if (body.info.statuscode === 0) {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        });
      }
    });
  });
};

geocodeAddress('Portland, OR').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
});

// example of how to wrap a function that doesn't take promises
