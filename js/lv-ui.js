function lv_init(){
	var bottomNav = $(".lv-tab-nav");
	var width = bottomNav.width()/bottomNav.children(".lv-nav-item").length;
	
	bottomNav.children(".lv-nav-item").css("width", width+"px");
	$(".lv-slider-item").css("width", (bottomNav.width()/5) + "px");
	$(".lv-slider-content").css("width", ((bottomNav.width()/5)*($(".lv-slider-item").length)) + "px");
	$(".lv-nav-item").click(function(){
		if(!$(this).hasClass("selected")){
			$(".lv-nav-item").removeClass("selected");
			$(this).addClass("selected");
			var index = $(this).index();
			$(".lv-tab-item").removeClass("selected");
			$(".lv-tab-item:nth-child(" + (index+1) + ")").addClass("selected");
		}
	});
}
lv_init();

