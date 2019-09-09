$(document).ready(function(){
	var x = 0;
	$("#thanosActivated").hide();
	$("#hide").click(function(){
		$("p").hide();
	});
	$("img").click(function(){
		$("p").show();
	});
	$("#thanos, #thanosActivated").click(function(){
		x=x+1
		$(".first").toggle();
		$(".stl").css({"color":"red", "background-color":"white"})
		$("body").css({"background-color":"black"})
		$("#thanos").hide();
		$("#thanosActivated").show();
	});
});