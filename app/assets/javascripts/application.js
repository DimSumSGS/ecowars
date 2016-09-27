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