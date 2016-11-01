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

/* Notes that the game is on. 1 means on, 0 means game over*/
var game = 1
/* Tree + Resources timer */


var treeqty = 0;
function buytrees()
{
  treeqty = treeqty + 1;
  document.getElementById("treeqtydisplay").innerHTML = treeqty;
  return treeqty
}

function selltrees()
{
  if (treeqty > 0) {
  treeqty = treeqty - 1;
  document.getElementById("treeqtydisplay").innerHTML = treeqty;
  return treeqty
 }
}



var resourcecounter=setInterval(resources, 1000);
var resourcecount = 0

function resources() {
    resourcecount=resourcecount+treeqty;
    if (resourcecount > 10000)
    {
        clearInterval(resourcecounter);
        return;
    }
  
    document.getElementById("resources").innerHTML=resourcecount + " Resources";
  
}

/* Waves */
/*variables*/
var wavecounter = setInterval(waves, 10000) /* Sets the waves to happen every 30 seconds */
var wavecount = 0;


function waves() {
  wavecount = wavecount + 1;
  var treeloss = Math.pow(wavecount, 2); /* Squares the wavecount (e.g 10 x 10 = 100 trees lost) */
  var resourceloss = Math.pow(wavecount, 3); /*Sets the resource loss to be the wave level^2 */
  if (resourcecount - resourceloss >=0) {
  resourcecount = resourcecount - resourceloss;
  }
  else {
    resourcecount = 0
  }
  if (treeqty - treeloss >= 0){
  treeqty = treeqty - treeloss;
  }
  else {
    treeqty = 0
  }
  document.getElementById("waves").innerHTML= " Wavecount: " + wavecount + " Resource Loss: " + resourceloss + " Tree loss: " + treeloss;
  document.getElementById("treeqtydisplay").innerHTML = treeqty;
  return;
}

// var barcounter = setInterval(increase, 1000);
// // /*Progress bar*/
// var percent= 0; 
// var progress = document.getElementById("progress"); 
// function increase(){ 
//   console.log(resourcecount);
//   percent = (resourcecount/10000)*100;
//   if(percent>=100) {
//     percent = 100;
//     progress.style.width = percent + "%";
//   }
//   else {
//     progress.style.width = percent + "%";
//   };     
// } 




