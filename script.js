$(document).ready(function(){
    $('#modal, #modal2, #modal3').show();
    $('#modal, #modal2, #modal3').draggable({
      drag: function(event, ui){
        var p = Math.round((ui.position.left) * .1);
        $(this).css({
          '-webkit-box-shadow' : (ui.position.left * .01) + 'px ' + (ui.position.top * .01) + 'px ' + '20px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
          'transition' : '0.0s',
          'padding' : '2px',
        });
      },
      stop: function(event, ui){
        var p = Math.round((ui.position.left) * .08);
        $(this).css({
          '-webkit-box-shadow' : 'none',  //(ui.position.left * .006) + 'px ' + (ui.position.top * .006) + 'px ' + '10px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
          'transition' : '0.5s',
          'padding' : '0px',
        });
      }
    });
  $('#modal, #modal2, #modal3').mousedown(function(){
    var ui = $(this).position();
    var p = Math.round((ui.left) * .1);
    $(this).css({
      '-webkit-box-shadow' : (ui.left * .01) + 'px ' + (ui.top * .01) + 'px ' + '20px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
      'transition' : '0.5s',
      'padding' : '2px',
    });
    $(this).addClass('top').removeClass('bottom');
    $(this).siblings().removeClass('top').addClass('bottom');
  });
  $('#modal, #modal2, #modal3').mouseup(function(){
    var ui = $(this).position();
    var p = Math.round((ui.left) * .08);
    $(this).css({
      '-webkit-box-shadow' : 'none',  //(ui.left * .006) + 'px ' + (ui.top * .006) + 'px ' + '10px rgb' + '(' + p + ' ,' + p + ',' + p + ')',
      'transition' : '0.5s',
      'padding' : '0px',
    });
  });
});
