$(function () {
  var canvas = this.__canvas = new fabric.Canvas('banner-canvas');
  canvas.setDimensions({ width: 1000, height: 500 });
  console.log("RRR", canvas)
  fabric.Object.prototype.transparentCorners = false;


  fabric.Image.fromURL("../images/about-banner.png", function (img) {
    // add background image
    console.log("img", img)
    canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas), {
      scaleX: canvas.width / img.width,
      scaleY: canvas.height / img.height
    });
  });

  fabric.Image.fromURL('../images/test.png', function (img) {
    img.set({
      left: 400,
      top: 100
    });
    img.link = "www.google.com"
    canvas.add(img);
  });

  // canvas.on('mouse:over', function (e) {
  //   console.log("over")
  //   e.target.set('fill', 'red');
  //   canvas.renderAll();
  // });

  // canvas.on('mouse:out', function (e) {
  //   console.log("out")
  //   e.target.set('fill', 'green');
  //   canvas.renderAll();
  // });

  canvas.on('object:selected', function(e) {
    console.log("selected", e, e.target.link)
  });


  function makePoint(x, y) {
    var point = new fabric.Circle({
      left: x,
      top: y,
      strokeWidth: 0,
      radius: 3,
      fill: '#3186e3',
      selectable: false,
      evented: false

    });
    point.on('mouse:over', console.log)

    return point
    // return new fabric.Point(x, y)
  }
  function makeLine(p1, p2) {
    return new fabric.Line([p1.left, p1.top, p2.left, p2.top], {
      stroke: '#3186e3',
      strokeWidth: 2,
      selectable: false,
      evented: false
    })
  }
  var p1 = makePoint(10, 20)
  var p2 = makePoint(100, 120)
  var line = makeLine(p1, p2)
  canvas.add(p1, p2, line)


  // // add random objects
  // for (var i = 15; i--;) {
  //   var dim = fabric.util.getRandomInt(30, 60);
  //   var klass = ['Rect', 'Triangle', 'Circle'][fabric.util.getRandomInt(0, 2)];
  //   var options = {
  //     top: fabric.util.getRandomInt(0, 600),
  //     left: fabric.util.getRandomInt(0, 600),
  //     fill: 'green',
  //   };
  //   if (klass === 'Circle') {
  //     options.radius = dim;
  //   }
  //   else {
  //     options.width = dim;
  //     options.height = dim;
  //   }
  //   canvas.add(new fabric[klass](options));
  // }
})
