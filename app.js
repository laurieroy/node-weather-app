const yargs   = require('yargs');

const geocode = require('./geocode/geocode');

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
    console.log(JSON.stringify(results, undefined, 2));
  }
});

// weatherCall https://api.darksky.net/forecast/19ee72e311de33072ce97fc8aca590d6/45.5767,-122.6387
// console.log(`Current Temperature \(F\): ${body.currently.temperature}`);
// 19ee72e311de33072ce97fc8aca590d6
// https://api.darksky.net/forecast/19ee72e311de33072ce97fc8aca590d6/37.8267,-122.4233
