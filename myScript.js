$(document).ready(function(){
	var x = 0;
	$("#hide").click(function(){
		$("p").hide();
	});
	$("img").click(function(){
		$("p").show();
	});
	$("#thanos").click(function(){
		x=x+1
		$(".first").toggle();
		$(".stl").css({"color":"red", "background-color":"white"})
		$("body").css({"background-color":"black"})
	});
});