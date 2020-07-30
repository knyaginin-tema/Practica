$(function() {
	
	let lightBox = $("#lightBox");
	let scrollPosition = $(window).scrollTop();
	let darkBg = $("#darkBg");
	
	$(".btn").on("click", function(event) {
		event.preventDefault();
		
		darkBg.toggleClass("show");
		lightBox.toggleClass("show");
	});
	
	$("#darkBg").on("click", function(event) {
		event.preventDefault();
		
		darkBg.toggleClass("show");
		lightBox.toggleClass("show");
	});
	
	$(window).on("scroll load resize", function(){
		scrollPosition = $(this).scrollTop();
		
		lightBox.addClass("fixed");
		darkBg.addClass("fixed");
	});
	
	
	
	let nav = $("#nav");
	$("#navToggle").on("click", function(event) {
		event.preventDefault();
		
		nav.toggleClass("show");
	});
	
});