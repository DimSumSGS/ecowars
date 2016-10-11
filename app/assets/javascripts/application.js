// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

/* Home screen */
$(document).ready(function(){
  $('.popup').fadeIn('slow');
 

  $('.xclose').hover(
    function(){
    $(this).addClass('xclosehover')
    },
    function(){
    $(this).removeClass('xclosehover')	
    });
  
  $('.xclose').click(function(){
  	$('.popup').fadeOut('slow');
  	});

  $('.region').hover(
    function(){
    $(this).addClass('active')
    },
    function(){
    $(this).removeClass('active')
        
    });




  /* Game page */

  $('#about').click(function(){
    $(".gsidenav").toggleClass("");
    $('#sub-menu-about').toggleClass("sub-menu-on");
  });


  $(".myButton").click(function () {
      $("#container").append('<div class="pic_holder"><img src="http://cliparts.co/cliparts/yck/Agr/yckAgrr5i.svg" id="pic"></div></div>');
  });

  $( ".clicker" )
    .mouseup(function() {
      $( this ).removeClass( "pressed" );
    })
    .mousedown(function() {
      $( this ).addClass( "pressed" );
    });
});


function modify_qty(val) {
    var qty = document.getElementById('qty').value;
    var new_qty = parseInt(qty,10) + val;
    
    if (new_qty < 0) {
        new_qty = 0;
    }
    
    document.getElementById('qty').value = new_qty;
    return new_qty;
}

/*vvvvvv Not Finished Yet vvvvvvv*/

function modify_points(p) {
  var points = document.getElementById('points').value
  var new_points = parseInt(points,10) + val;

  if (new_points < 0) {
      new_points = 0;
  }

  document.getElementById('points').value = new_points;
  return new_points;
}

function modify_points(pts) {
  var points = this.points
  var new_points = parseInt(points,10) + pts;
  
  if (points > 0) {
      points * 2
  }

  document.getElementById('points').value = new_points;
  return new_points;
}


/*^^^^^^^ Not Finished Yet ^^^^^^^*/

