/**
 * Created by winston on 18/03/16.
 */



(function(){var s=document.createElement("script");s.onload=function(){bootlint.showLintReportForCurrentDocument([]);};s.src="https://maxcdn.bootstrapcdn.com/bootlint/latest/bootlint.min.js";document.body.appendChild(s)})();


//set height of containers to 90% window height
var h = $(window).height();
var w = $(window).width();

$("#mainwin").css("height",h *.65);
$("#main_container").css("height", h * 0.9);

//get width of jumbotron, set displaytable to 90%
var wJumbo = $("#main_container").width();
//$("#displayTable").css("width", wJumbo);