$(function () {

  // Init plugin
  $('canvas').constellation({
    star: {
      color: 'rgb(38, 105, 178)',
      width: 3,
      randomWidth: false
    },
    line: {
      color: 'rgb(38, 105, 178)',
    },
    velocity: 0,
    height: window.innerHeight / 2,
    length: (window.innerWidth / 10),
    radius: (window.innerWidth),
    // distance: 50,
    // rad
  });

})
