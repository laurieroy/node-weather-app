const request = require('request'),
      yargs   = require('yargs');

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

console.log(argv);

let encodedAddress =  encodeURIComponent(argv.address);
console.log(`Addy: ${encodedAddress}`);
if(argv.address ==='') {
  encodedAddress='1301%20lombard%20street%20philadelphia';
  console.log('in if statement');
}

 let  myAddy  = '&location=${encodedAddress}',
      myURL   = 'http://mapquestapi.com/geocoding/v1/address?',
      myKey   = process.env.WEATHER_APP_KEY;


request({
  //http://www.mapquestapi.com/geocoding/v1/address?key=KEY&location=1600+Pennsylvania+Ave+NW,Washington,DC,20500
    url: myURL + `key=` +`${myKey}` + myAddy,
    json: true 
}, (error, response, body) => {
  console.log(body.results[0]);
  console.log(`Address: ${body.results[0].providedLocation.location}`);
  console.log(`Lat: ${body.results[0].locations[0].latLng.lat}`);
  console.log(`Lon: ${body.results[0].locations[0].latLng.lng}`);
});
