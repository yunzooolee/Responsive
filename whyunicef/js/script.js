$(function(){
	var width = $(this).width();
	// 모바일
	if(width < 1025){
		// 메인 슬라이드
		var emergencySlide = $('.video_slides').bxSlider({
			mode: 'horizontal',
			auto: false,
			controls: false,
			pause: 10000,
	//		startSlide: 1,
			pagerCustom: ".video_pager",
			// 활성화
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				$('.active-slide').removeClass('active-slide');
				$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			//	$(".active-slide").children("video").trigger("play");
			},
			onSliderLoad: function () {
				$('.video_slides>li').eq(1).addClass('active-slide');
			//	$(".video_slides").find("video").trigger("play");
			}
		});

		// 레이어 팝업 비디오 열기
		$(".btn_more").click(function(){
			$(".video_pop_wrap").show();
			
			// 통합본
			if( $(this).hasClass("btn_video1") ){
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/Ui78Our9BQA");
			}else if( $(this).hasClass("btn_video2") ){
				//  공유
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/yuswTv2_CHY");
			}else if( $(this).hasClass("btn_video3") ){
				// 김혜수
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/28LNIlXng_Y");
			}
			else if( $(this).hasClass("btn_video4") ){
				// 국장
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/sGL4dItPJhY");
			}
			else if( $(this).hasClass("btn_video5") ){
				// 아시아나
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/WubzSM2es9o");
			}else if( $(this).hasClass("btn_video6") ){
				// 자원봉사자
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/Om6FNsAQZMY");
			}
		});

		// 닫기
		$(".btn_pop_video_close").click(function(){
			$(this).parent().hide();
			$(".video_area iframe").attr("src","");

			window.location.reload();
		});

		$("video").remove();
	}

	// web
	if(width > 1024){
		// 메인 슬라이드
		var emergencySlide = $('.video_slides').bxSlider({
			mode: 'horizontal',
			auto: false,
			controls: false,
			pause: 10000,
	//		startSlide: 1,
			pagerCustom: ".video_pager",
			// 활성화
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				$('.active-slide').removeClass('active-slide');
				$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
				$(".active-slide").children("video").trigger("play");
			},
			onSliderLoad: function () {
				$('.video_slides>li').eq(1).addClass('active-slide');
				$(".video_slides").find("video").trigger("play");
			}
		});

		// 슬라이더 동영상 컨트롤
		$(".active-slide").children("video").trigger("play");
		$(".video_pager a").click(function(){
			$(this).hasClass("active")
			$(".video_slides>li video").trigger("pause");
			setTimeout(function(){
				$(".active-slide").children("video").trigger("play");
			}, 1000);
		});

		// 레이어 팝업 비디오 열기
		$(".btn_more").click(function(){
			$(".video_pop_wrap").show();
			
			// 통합본
			if( $(this).hasClass("btn_video1") ){
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/Ui78Our9BQA");
			}else if( $(this).hasClass("btn_video2") ){
				//  공유
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/yuswTv2_CHY");
			}else if( $(this).hasClass("btn_video3") ){
				// 김혜수
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/28LNIlXng_Y");
			}
			else if( $(this).hasClass("btn_video4") ){
				// 국장
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/sGL4dItPJhY");
			}
			else if( $(this).hasClass("btn_video5") ){
				// 아시아나
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/WubzSM2es9o");
			}else if( $(this).hasClass("btn_video6") ){
				// 자원봉사자
				$(".video_area iframe").attr("src","https://www.youtube.com/embed/Om6FNsAQZMY");
			}
			
			var emergencySlide0 = $('.video_slides').bxSlider({
				mode: 'horizontal',
				auto: false,
				controls: false,
				pause: 10000,
				pagerCustom: ".video_pager",
				// 활성화
				onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
					$('.active-slide').removeClass('active-slide');
					$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
				},
				onSliderLoad: function () {
					$('.video_slides>li').eq(1).addClass('active-slide');
					$(".video_slides").find("video").trigger("pause");
				}
			});

		});
		// 닫기
		$(".btn_pop_video_close").click(function(){
			$(this).parent().hide();
			$(".video_area iframe").attr("src","");

			var emergencySlide1 = $('.video_slides').bxSlider({
				mode: 'horizontal',
				auto: true,
				controls: false,
				pause: 10000,
				pagerCustom: ".video_pager",
				// 활성화
				onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
					$('.active-slide').removeClass('active-slide');
					$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
				},
				onSliderLoad: function () {
					$('.video_slides>li').eq(1).addClass('active-slide');
					$(".video_slides").find("video").trigger("play");
				}
			});
			window.location.reload();
		});
	}

	// 레이어 팝업 비디오 열기
	$(".btn_more").click(function(){
		$(".video_pop_wrap").show();
		
		// 통합본
		if( $(this).hasClass("btn_video1") ){
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/Ui78Our9BQA");
		}else if( $(this).hasClass("btn_video2") ){
			//  공유
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/yuswTv2_CHY");
		}else if( $(this).hasClass("btn_video3") ){
			// 김혜수
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/28LNIlXng_Y");
		}
		else if( $(this).hasClass("btn_video4") ){
			// 국장
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/sGL4dItPJhY");
		}
		else if( $(this).hasClass("btn_video5") ){
			// 아시아나
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/WubzSM2es9o");
		}else if( $(this).hasClass("btn_video6") ){
			// 자원봉사자
			$(".video_area iframe").attr("src","https://www.youtube.com/embed/Om6FNsAQZMY");
		}
		
		var emergencySlide0 = $('.video_slides').bxSlider({
			mode: 'horizontal',
			auto: false,
			controls: false,
			pause: 10000,
			pagerCustom: ".video_pager",
			// 활성화
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				$('.active-slide').removeClass('active-slide');
				$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			},
			onSliderLoad: function () {
				$('.video_slides>li').eq(1).addClass('active-slide');
				$(".video_slides").find("video").trigger("pause");
			}
		});

	});
	// 닫기
	$(".btn_pop_video_close").click(function(){
		$(this).parent().hide();
		$(".video_area iframe").attr("src","");

		var emergencySlide1 = $('.video_slides').bxSlider({
			mode: 'horizontal',
			auto: true,
			controls: false,
			pause: 10000,
			pagerCustom: ".video_pager",
			// 활성화
			onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
				$('.active-slide').removeClass('active-slide');
				$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
			},
			onSliderLoad: function () {
				$('.video_slides>li').eq(1).addClass('active-slide');
				$(".video_slides").find("video").trigger("play");
			}
		});
		window.location.reload();
	});

	/*모바일*/

	// 헤더 컨트롤
	$(".menu_area .btn_menu").click(function(){
		$(".slide_list").slideDown(500);
		$(this).hide();
		$(".menu_area .btn_close").show();
	});

	$(".menu_area .btn_close").click(function(){
		$(".slide_list").slideUp(500);
		$(this).hide();
		$(".menu_area .btn_menu").show();
	});


	// 하단 이미지 pager 클릭시 스크롤 이동 (모바일 공용)
	$(".top_click").bind("tap", function(event){
		var position = $("#wrap").offset();
	    $('html, body').animate({scrollTop : position.top}, 1000);
	});
	$(".btn_top").click(function(){
		var position = $("#wrap").offset();
	    $('html, body').animate({scrollTop : position.top}, 1000);
	});

});