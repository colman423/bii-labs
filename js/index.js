$(function () {
  var $constellationelCanvas = $('canvas#banner-constellationel')

  // Init plugin
  $constellationelCanvas.constellation({
    star: {
      color: 'rgb(38, 105, 178)',
      width: 3.5,
      randomWidth: false
    },
    line: {
      color: 'rgb(58, 125, 198)',
    },
    velocity: 0.5,
    width: $constellationelCanvas.width(),
    height: $constellationelCanvas.height(),
    length: $constellationelCanvas.width() / ($constellationelCanvas.width() * 20 / 960 + 0),
    // length: 40,
    radius: $constellationelCanvas.width(),
    distance: $constellationelCanvas.width() / 6.5,
    initStars: [
      { "x": 0.03359375, "y": 0.03515625 },
      { "x": 1.14375, "y": 0.31875 },
      { "x": 0.0265625, "y": 0.11015625 },
      { "x": 1.14140625, "y": 0.2359375 },
      { "x": 0.0109375, "y": 0.21171875 },
      { "x": 1.1390625, "y": 0.12265625 },
      { "x": 0.16640625, "y": 0.03828125 },
      { "x": 1.125, "y": 0.171875 },
      { "x": 0.159375, "y": 0.1125 },
      { "x": 1.02734375, "y": 0.31796875 },
      { "x": 0.0640625, "y": 0.18125 },
      { "x": 1.0671875, "y": 0.18671875 },
      { "x": 0.1265625, "y": 0.16328125 },
      { "x": 1.01015625, "y": 0.23828125 },
      { "x": 0.1765625, "y": 0.23046875 },
      { "x": 1.0171875, "y": 0.12109375 },
      { "x": 0.1828125, "y": 0.2421875 },
      { "x": 0.96015625, "y": 0.2359375 },
      { "x": 0.353125, "y": 0.08828125 },
      { "x": 0.98515625, "y": 0.1140625 },
      { "x": 0.35703125, "y": 0.09375 },
      { "x": 0.8328125, "y": 0.26171875 },
      { "x": 0.378125, "y": 0.15859375 },
      { "x": 0.81875, "y": 0.26171875 },
      { "x": 0.35234375, "y": 0.19296875 },
      { "x": 0.796875, "y": 0.19140625 },
      { "x": 0.4484375, "y": 0.2109375 },
      { "x": 0.834375, "y": 0.16171875 },
      { "x": 0.409375, "y": 0.28046875 },
      { "x": 0.77421875, "y": 0.0703125 },
      { "x": 0.5234375, "y": 0.02421875 },
      { "x": 0.728125, "y": 0.1453125 },
      { "x": 0.53359375, "y": 0.103125 },
      { "x": 0.659375, "y": 0.3328125 },
      { "x": 0.4890625, "y": 0.3140625 },
      { "x": 0.64296875, "y": 0.24765625 },
      { "x": 0.59296875, "y": 0.17734375 },
      { "x": 0.6875, "y": 0.0421875 },
      { "x": 0.56875, "y": 0.2703125 },
      { "x": 0.61015625, "y": 0.08046875 }
    ]
  });

})
