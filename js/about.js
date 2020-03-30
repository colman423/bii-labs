$(function () {
  var pointRadius = 3
  var color = '#3186e3'

  var canvas = this.__canvas = new fabric.Canvas('banner-canvas', {
    width: window.innerWidth * 0.95,
    height: window.innerWidth * 0.95 * 586 / 1565,
    hoverCursor: 'pointer',
  });

  fabric.Image.fromURL("../images/about-banner.png", function (img) {
    // add background image
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX: canvas.width / img.width,
      scaleY: canvas.height / img.height
    });
  });

  canvas.on('object:selected', function (e) {
    var link = e.target.link
    window.open(link, '_blank')
  });

  function makePoint(x, y) {
    var point = new fabric.Circle({
      left: x,
      top: y,
      strokeWidth: 0,
      radius: pointRadius,
      fill: color,
      selectable: false,
      evented: false
    });
    return point
  }

  function addLine(p1, p2) {
    var line = new fabric.Line([
      p1.left + pointRadius / 2,
      p1.top + pointRadius / 2,
      p2.left + pointRadius / 2,
      p2.top + pointRadius / 2
    ], {
        stroke: color,
        strokeWidth: 2,
        selectable: false,
        evented: false
      }
    )
    canvas.add(line)
  }

  function addLinkIcon(position, iconPath, linkHref) {
    fabric.Image.fromURL(iconPath, function (img) {
      img.set({
        left: position[0],
        top: position[1],
        hasControls: false,
        lockMovementX: true,
        lockMovementY: true,
        // borderColor: 'transparent',   // 可看是否要這行效果
        link: linkHref
      });
      canvas.add(img)
    });
  }

  var graph = [
    { pos: [0, 233], relation: [] },    // 0
    { pos: [47, 238], relation: [0] },    // 1
    { pos: [92, 240], relation: [1] },    // 2
    { pos: [0, 290], relation: [1] },    // 3
    { pos: [28, 389], relation: [1, 2] },    // 4
    { pos: [0, 388], relation: [4] },    // 5
    { pos: [180, 312], relation: [2, 4] },    // 6
    { pos: [245, 165], relation: [2, 6] },    // 7
    { pos: [232, 308], relation: [6, 7] },    // 8
    { pos: [347, 162], relation: [7, 8] },    // 9
    { pos: [364, 337], relation: [9, 8] },    // 10
    { pos: [392, 166], relation: [9, 10] },    // 11
    // { pos: [347, 162], relation: [7, 8] },    // 10

  ]
  for (var i = 0; i < graph.length; i++) {
    graph[i].point = makePoint(graph[i].pos[0], graph[i].pos[1])
    canvas.add(graph[i].point)
    for (var j = 0; j < graph[i].relation.length; j++) {
      var relatedPoint = graph[i].relation[j]
      addLine(graph[i].point, graph[relatedPoint].point)
    }
  }

  addLinkIcon([400, 10], '../images/test.png', "https://www.google.com")

})
