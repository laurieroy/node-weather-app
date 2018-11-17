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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`showing ${results.address}`);
    weather.getWeather(results.latitude, results.longitude, (errorMessage, weatherResults) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(`In ${results.address}, the current temperature \(F\) is ${weatherResults.temperature}, but
        it feels like ${weatherResults.apparentTemperature}!`);
      }
    });
  }
});
