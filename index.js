function fixTiling() {
    var closestTW = $( window ).width()  / 7 - 2;
    $(".tile").css({width: closestTW, height: closestTW}); 
    $(".dw").css({width: 2 * closestTW + 2}); 
    $(".dh").css({height: 2 * closestTW + 2}); 
    $(".tw").css({width: 3 * closestTW + 4}); 
    $(".th").css({height: 3 * closestTW + 4}); 
}

fixTiling();

$(window).resize(function() {
  fixTiling();
});

$("#container").packery({
  itemSelector: '.tile',
  gutter: 2
});