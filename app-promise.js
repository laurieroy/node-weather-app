const yargs   = require('yargs'),
      axios   = require('axios');


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      descirbe: 'Address for where we fetch the weather',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;
  let encodedAddress =  encodeURIComponent(argv.address);
  let   myAddy  = `&location=${encodedAddress}`,
        myURL   = 'http://mapquestapi.com/geocoding/v1/address?',
        myMapKey = process.env.MAP_WEATHER_APP_KEY;
  let geocodeURL = myURL + `key=` + myMapKey + myAddy;

  axios.get(geocodeURL).then((response) => {
    if (response.data.results[0].locations[0].geocodeQualityCode === "Z1XAA") {
      throw new Error ('Unable to find address');
    }
    let lat = response.data.results[0].locations[0].latLng.lat,
        lon = response.data.results[0].locations[0].latLng.lng;
    let myLoc =   '/' + lat + ','+ lon;
        myWxKey = process.env.WX_WEATHER_APP_KEY,
        myUrl = 'https://api.darksky.net/forecast/';
    let weatherUrl = myUrl + myWxKey + myLoc;
    console.log(`At ${response.data.results[0].providedLocation.location}: `);
    return axios.get(weatherUrl);
}).then((response) => {
  let temperature = response.data.currently.temperature,
      apparentTemperature = response.data.currently.apparentTemperature;
      console.log(`It's currently ${temperature} and it feels like
      ${apparentTemperature}.`);
  }).catch((e) => {
    if (e.code === 'ENOTFOUND') {
      console.log('Unable to connect to API servers');
    } else {
      console.log(e.message);
    }
  });
