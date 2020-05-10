
var Parallex = {
    elements: [],
    add: function ($selectors) {
        $selectors.each(function (idx, ele) {
            Parallex.elements.push($(ele))
        })
    },
    init: function () {
        console.log("ParallexInit this.ele", Parallex.elements)
        var elements = Parallex.elements;

        for (var i = 0; i < elements.length; i++) {
            $ele = elements[i]
            $ele.css('background-size', ($ele.width()) + 'px ');
            $ele.css('background-attachment', 'scroll');
            $ele.css('background-position-x', 'left');
        }

        $(window).scroll(function () {
            var windowScrollTop = $(window).scrollTop();
            // console.log("elements.length", elements.length)
            for (var i = 0; i < elements.length; i++) {
                // console.log(elements[i].attr('id'), i)
                parallex(elements[i], windowScrollTop)
            }
        });

        function parallex($ele, windowScrollTop) {
            var elePosY = $ele.offset().top;
            var eleHeight = $ele.height();
            var imgHeight = $ele.width()*942/990;
            console.log("imgHeight", imgHeight)

            if (windowScrollTop < elePosY) {
                console.log("not into yet")
                $ele.css('background-attachment', 'scroll');
                $ele.css('background-position-x', 'left');
                $ele.css('background-position-y', 'top');
            }
            else if (windowScrollTop > elePosY + eleHeight - imgHeight) {
                console.log("scroll complete")
                $ele.css('background-attachment', 'scroll');
                $ele.css('background-position-x', 'left');
                $ele.css('background-position-y', 'bottom');

            }
            else {
                console.log("change to fixed")
                $ele.css('background-attachment', 'fixed');
                $ele.css('background-position-x', ($ele.offset().left) + 'px ');
                $ele.css('background-position-y', 'top');
            }

        }
    }

}

// Parallex.prototype.elements = []

// Parallex.prototype.init = function () {

// }

// function instantiate(element, options) {
//     var c = new Constellation(element, options);
//     c.init();
// }

// $.fn.parallex = function (options) {
//     return this.each(function () {

//         instantiate(this, options);
//     });
// };
