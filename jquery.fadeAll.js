;(function () {
  $.fn.fadeAll = function (ops) {
    var
    o = $.extend({
      delay: 500,
      speed: 500,
      ease: 'swing' // Other requires easing plugin
    }, ops),
    $els = this
    for (var i=0, d=0, l=$els.length; i<l; i++, d+=o.delay)
      $els.eq(i).delay(d).fadeIn(o.speed, o.ease);
    return $els
  }
}())
