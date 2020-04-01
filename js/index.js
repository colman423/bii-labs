$(function () {
  var $constellationelCanvas = $('canvas#banner-constellationel')

  // Init plugin
  $constellationelCanvas.constellation({
    star: {
      color: 'rgb(38, 105, 178)',
      width: 2,
      randomWidth: false
    },
    line: {
      color: 'rgb(38, 105, 178)',
    },
    velocity: 0.2,
    width: $constellationelCanvas.width(),
    height: $constellationelCanvas.height() / 2,
    length: $constellationelCanvas.width() / 40,
    radius: $constellationelCanvas.width(),
    distance: 200,
    // rad
  });

})
