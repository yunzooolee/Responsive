$(function(){
	// 현재화면 너비
	var width = $(this).width();

	// 메인 슬라이드
	var main_slide = $(".main_slide").bxSlider({
		mode: "horizontal",
		auto: true,
		controls: false,
		speed: 700,
		pause: 7000,
//		autoControls :true,
		pager: true,
		infiniteLoop: true,
		useCSS: false,
		onSliderLoad: function(){
			$(".main_slide_wrap").css("visibility", "visible").animate({opacity:1});
			$(".bx-viewport").css("height","auto");
		}
	});	

	// onepage nav 클릭 컨트롤
	var $menu = $(".nav_wrap > li > a"),
		  $contents = $(".scroll"),
		  $doc = $("html, body");
	
	$menu.on("click", function(e){
		var $target = $(this).parent(),
			  idx = $target.index(),
			  section = $contents.eq(idx),
			  offsetTop = section.offset().top;
		$doc.stop().animate({
			scrollTop :offsetTop+20
		}, 800);
		if( $(this).hasClass("home") ){
			$doc.stop().animate({
				scrollTop :offsetTop
			}, 800);
		}
		return false;
	});
	// 스크롤 on 컨트롤
	$(window).scroll(function(){
		var scltop = $(window).scrollTop(),
		      scrollHeight = $(document).height(),
		      scrollPosition = $(window).height() + $(window).scrollTop();

		$.each($contents, function(idx, item){
			var $target = $contents.eq(idx),
				  i = $target.index(),
				  targetTop = $target.offset().top;
			// 스크롤시 nav on
			if (targetTop <= scltop) {
				$("html,body").css("overflowY","auto");
				$menu.removeClass("on");
				$menu.eq(idx).addClass("on");
			}else if( (scrollHeight - scrollPosition) / scrollHeight === 0){
				// 스크롤 0일때 마지막 nav on
				$menu.last().parent().prev().children($menu).removeClass("on");
				$menu.last().addClass("on");
			}else{
				$menu.last().removeClass("on");
			}
			/*
			if (!(200 <= scltop)) {
				$menu.removeClass("on");
			}
			*/
		})
	});

	// nav 하위메뉴 노출
	$(".nav_wrap > li").mouseover(function(){
		$(this).children("a").next(".sub_depth").show();
	});
	$(".nav_wrap > li").mouseleave(function(){
		$(this).children("a").next(".sub_depth").hide();
	});
	
	// btn_go_top 노출
	$(window).scroll(function(){
		var position = $(window).scrollTop();
		if(position >= 1000) {
			$(".btn_gotop").fadeIn(500);
		} else {
			$(".btn_gotop").fadeOut(500);
		}
	});
	// btn_go_top 클릭시
	$(".btn_gotop").click(function(){
		$("html, body").animate({scrollTop : 0}, 400);
	});
	
	// 패밀리사이트
	$("#family").change(function(){
		if( $(this).val() == "global" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindoh.com/";
		}else if( $(this).val() == "brand_kr" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindoh.co.kr/";
		}else if( $(this).val() == "mall_kr" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindohmall.com/";
		}else if( $(this).val() == "" ){
		//	location.href = "http://www.kindoh.com/";
			return false;
		}
	});

	// 언어선택
	$("#language").change(function(){
		if( $(this).val() == "en" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindoh.com/";
		}else if( $(this).val() == "de" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindoh.de/";
		}else if( $(this).val() == "ko" ){
			var newOpen = window.open("about:blank");
			newOpen.location.href = "http://www.kindoh.co.kr/";
		}else{
		//	newOpen.location.href = "http://www.kindoh.com/";
			return false;
		}
	});

	// 모바일 메뉴
	$(".btn_m_menu").click(function(){
		if( $(".nav_wrap").is(":visible") ){
			$("html,body").css("overflowY","auto");
			$(this).next(".nav_wrap").slideUp();
		}else{
			$("html,body").css("overflowY","hidden");
			$(this).next(".nav_wrap").slideDown();
			$(".nav_wrap li a").click(function(){
				$(".nav_wrap").slideUp();
			});
		}
	});

	// identity 리스트
	$(".identity_list li .btn_acco").click(function(){
		$(".identity_list li .btn_acco").removeClass("on");
		$(".identity_list li .desc").slideUp();
		$(this).addClass("on");

		if( $(this).next(".desc").is(":visible") ){
			$(this).next(".desc").slideUp();
			$(this).removeClass("on");
		}else{
			$(this).next(".desc").slideDown();
		}
	});

});