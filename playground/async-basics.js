console.log('Starting app');

setTimeout(() => {
  console.log('inside of callback')
}, 2000);

setTimeout(() => {
  console.log('2nd callback')
}, 0);

console.log('Finishing up');
// start fini then inside shows to screen

// add in 2nd callback. get starting finishing, 2nd callbak then a bit later. in
