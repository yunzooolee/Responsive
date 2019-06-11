$(function(){
	// 테블릿 검색
	$(".tablet_search").click(function(){
		$(".search_area input").addClass("tablet_input_on");
		$(".search_area .tablet_search").addClass("tablet_on");
	});
	


	// family site 1depth
	$(".gnb_list li:first").mouseover(function(){
		$(".icon_arrow img").attr("src","http://seoultest.dothome.co.kr/html/images/main/icon_arrow_down.png");
		$(".family_site_list_depth1, .bg_family_site").show();
	});
	$(".gnb_list li:first").mouseleave(function(){
		$(".icon_arrow img").attr("src","http://seoultest.dothome.co.kr/html/images/main/icon_arrow_up.png");
		$(".family_site_list_depth1, .bg_family_site").hide();
	});
	// family site 2depth
	$(".family_site_list_depth1 li").mouseover(function(){
		$(this).children(".family_site_list_depth2").show();
	});
	$(".family_site_list_depth1 li").mouseleave(function(){
		$(this).children(".family_site_list_depth2").hide();
	});	
	
	// nav 2depth
	// 열기
	$(".nav ul li a").click(function(){
		if( $(this).parent("li").hasClass("nav0") ){
			$(".nav_depth2_wrap, .who_we_are").show();
		}
		if( $(this).parent("li").hasClass("nav1") ){
			$(".nav_depth2_wrap, .what_we_do").show();
		}
		if( $(this).parent("li").hasClass("nav2") ){
			$(".nav_depth2_wrap, .life_in_seoul").show();
		}
		if( $(this).parent("li").hasClass("nav3") ){
			$(".nav_depth2_wrap, .news_events").show();
		}
	});
	// 닫기
	$(".nav_depth2_wrap").click(function(){
		$(".nav_depth2_wrap, .nav_depth2_wrap > div").hide();
	});
	$("#content_wrap").click(function(){
		$(".nav_depth2_wrap, .nav_depth2_wrap > div").hide();
	});
	
	// slider
	var popRolling = $(".popup_zone_slider").bxSlider({
		controls: false,
	})
	var MpopRolling = $(".m_popup_zone_slider").bxSlider({
		controls: false,
	})
	var fbRolling = $(".fb_slider").bxSlider({
			controls: false
	})
	
	// top view , top like
	$(".content8 h3").click(function(){
		$(".content8 h3").removeClass("tab_on");
		$(this).addClass("tab_on");
		if( $(this).hasClass("btn_top_view") ){
			$(".content_tab .top_like").hide();
			$(".content_tab .top_view").show();
		}else{
			$(".content_tab .top_like").show();
			$(".content_tab .top_view").hide();
		}
	});
});