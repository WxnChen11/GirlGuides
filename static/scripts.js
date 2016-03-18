/**
 * Created by winston on 18/03/16.
 */



<<<<<<< HEAD
//(function(){var s=document.createElement("script");s.onload=function()
//{bootlint.showLintReportForCurrentDocument([]);};s.src="https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();
=======
(function(){var s=document.createElement("script");s.onload=function(){bootlint.showLintReportForCurrentDocument([]);};s.src="https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();
>>>>>>> f565f9865e47c8a54a1e9afe75b64ccbdd7fecbe


//set height of containers to 90% window height
var h = $(window).height();
var w = $(window).width();

$("#mainwin").css("height",h *.65);
$("#main_container").css("height", h * 0.9);

//get width of jumbotron, set displaytable to 90%
var wJumbo = $("#main_container").width();
//$("#displayTable").css("width", wJumbo);

$(".badges").hover(function(){($(this).attr("src", "/badgeSampleHover.png"))},function(){($(this).attr("src", "/badgeSample.png"))});

<<<<<<< HEAD
$(".badges").click(function(){$("#dummybutton").trigger('click'); console.log("click")});
=======
$(".badges").click(function(){$("#dummybutton").trigger('click'); console.log("click")});
>>>>>>> f565f9865e47c8a54a1e9afe75b64ccbdd7fecbe
