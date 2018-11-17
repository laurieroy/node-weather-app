const yargs   = require('yargs');

const geocode = require('./geocode/geocode'),
      weather = require('./wxCall/weather');

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

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });

weather.getWeather(45.5767,-122.6387, (errorMessage, weatherResults) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(JSON.stringify(weatherResults, undefined, 2));
  }
});
