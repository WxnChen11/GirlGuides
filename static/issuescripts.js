/**
 * Created by winston on 18/03/16.
 */


//(function(){var s=document.createElement("script");s.onload=function()
//{bootlint.showLintReportForCurrentDocument([]);};s.src="https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();



//set height of containers to 90% window height
var h = $(window).height();
var w = $(window).width();

$("#mainwin").css("height",h *.65);
$("#main_container").css("height", h * 0.9);

//get width of jumbotron, set displaytable to 90%
var wJumbo = $("#main_container").width();
//$("#displayTable").css("width", wJumbo);

$(".badges").hover(function(){($(this).attr("src", "/badgeSampleHover.png"))},function(){($(this).attr("src", "/badgeSample.png"))});

$(".badges").click(function(){$("#dummybutton").trigger('click'); console.log("click")});

if(window.innerWidth <= 800 && window.innerHeight <= 600) {

       $("body").css("padding-top", 0);
       $("body").css("padding-bottom", 0);


       $("#logo").css("display","block");
       $("#logo").css("margin-left","auto");
       $("#logo").css("margin-right","auto");

       $('#nav').removeClass('pull-right').addClass('nav-justified');

       $("#nav").css("display","block");
       $("#nav").css("margin-left","auto");
       $("#nav").css("margin-right","auto");

       $("#main_container").css("height", h*1.15);
   }
$('body').show();
