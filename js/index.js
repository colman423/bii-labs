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
    length: $constellationelCanvas.width() / 30,
    radius: $constellationelCanvas.width(),
    distance: $constellationelCanvas.width() / 6.5,
    initStars: [
      { x: 43, y: 45 },
      { x: 34, y: 141 },
      { x: 14, y: 271 },
      { x: 213, y: 49 },
      { x: 204, y: 144 },
      { x: 82, y: 232 },
      { x: 162, y: 209 },
      { x: 226, y: 295 },
      { x: 234, y: 310 },
      { x: 452, y: 113 },
      { x: 457, y: 120 },
      { x: 484, y: 203 },
      { x: 451, y: 247 },
      { x: 574, y: 270 },
      { x: 524, y: 359 },
      { x: 670, y: 31 },
      { x: 683, y: 132 },
      { x: 626, y: 402 },
      { x: 759, y: 227 },
      { x: 728, y: 346 },
      { x: 781, y: 103 },
      { x: 880, y: 54 },
      { x: 823, y: 317 },
      { x: 844, y: 426 },
      { x: 932, y: 186 },
      { x: 991, y: 90 },
      { x: 1068, y: 207 },
      { x: 1020, y: 245 },
      { x: 1048, y: 335 },
      { x: 1066, y: 335 },
      { x: 1261, y: 146 },
      { x: 1229, y: 302 },
      { x: 1302, y: 155 },
      { x: 1293, y: 305 },
      { x: 1366, y: 239 },
      { x: 1315, y: 407 },
      { x: 1440, y: 220 },
      { x: 1458, y: 157 },
      { x: 1461, y: 302 },
      { x: 1464, y: 408 },
    ]
    // rad
  });

})
