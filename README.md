# node-weather-app
This is a console-based app where the user inputs an address, either street or
city, state and its coordinates are retrieved using the mapquest API. Weather is
then retrieved for this location using the darksky API.

It was originally built using the request library:

In the console, type "node app.js --address '1301 lombard street Philadephia'"
or "node app.js -a 'Portland OR'". The app will fetch the current temperature
for this location.

Later, the app was refactored to use axios:
"node app-promise.js -a 'Portland, OR'"

Address is parsed using yargs, along with basic help functionality.

Note: Currently, it will not fetch for a zipcode. If you just put in the city, or
the alias without quotes, you will get various results, i.e., Portland returns
Portland OR not Portland ME
