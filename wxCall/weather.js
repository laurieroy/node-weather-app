const request = require('request');

let getWeather = (lat, lon, callback) => {
  // if(lat === ' ')  lat = '45.5767'; //these aren't working
  // if (lon === ' ') lon = '-122.6387';
  let myLoc =   '/' + lat + ','+ lon;
      myWxKey = process.env.WX_WEATHER_APP_KEY,
      myUrl = 'https://api.darksky.net/forecast/';

  // console.log(myLoc);
  // console.log(myWxKey);
  // console.log(myUrl);
  // console.log(myUrl + myWxKey + myLoc);

  request({
    url: myUrl + myWxKey + myLoc,
    json: true
  }, (error, response, body) => {
    if(!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback ('Unable to fetch weather data.');
    }

  });
};
module.exports.getWeather = getWeather;
// do up like geocode.. do the actual and feels like temp so It is .. degrees F but it feels like xx
// console.log(`The current temperature (F) is ${body.currently.temperature}, but` );
// console.log(`it feels like ${body.currently.apparentTemperature}!`);
// if(error) {
//   console.log('Unable to connect to server.');
// } else if (response.statuscode === 404) {
//   console.log('Unable to fetch weather data.')
// } else if (response.statuscode === 200) {
//   console.log(body.currently.temperature);
// } else {
//   console.log('Something else went wrong');
// }
// Powered by Dark Sky
