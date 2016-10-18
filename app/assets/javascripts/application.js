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
/* Tree + Resources timer */


var treeqty = 0;
function buytrees()
{
  treeqty = treeqty + 1;
  document.getElementById("treeqtydisplay").innerHTML = treeqty
  return treeqty
}

function selltrees()
{
  treeqty = treeqty - 1;
  document.getElementById("treeqtydisplay").innerHTML = treeqty
  return treeqty
}



var counter=setInterval(resources, 5);
var count = 0
function resources()
{
  count=count+treeqty;
  if (count > 100000)
  {
      clearInterval(counter);
      return;
  }
  
  document.getElementById("resources").innerHTML=count + " Resources";
}

