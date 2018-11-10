const request = require('request'),
      yargs   = require('yargs');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      descirbe: 'Address to fetch weather for',
      string: true
    }
  })
.help()
.alias('help', 'h')
.argv;

console.log(argv);

let   myAddy  = '&location=1301%20lombard%20street%20philadelphia',
      myURL   = 'http://mapquestapi.com/geocoding/v1/address?',
      myKey   = process.env.WEATHER_APP_KEY;


request({
  //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500
    url: myURL + `key=` +`${myKey}` + myAddy,
    json: true 
}, (error, response, body) => {
  console.log(body.results[0]);
  console.log(`body: ${body.results[0].locations[0][latLng].lat}`);
  console.log(`Lat: ${body.results[0].locations.latLng[0].lat}`);
  // console.log(`Lon: ${body.results[0].locations[0].latLng[1]}`);
});
