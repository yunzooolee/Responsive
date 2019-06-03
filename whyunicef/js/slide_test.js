$(function(){
/*
	// 메인 슬라이드
	var emergency_slide = $('.video_slides').bxSlider({
		mode: 'horizontal',
		auto: false,
		controls: false,
		pagerCustom: "#video_pager",
		// 활성화
		onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {
			$('.active-slide').removeClass('active-slide');
			$('.video_slides>li').eq(currentSlideHtmlObject + 1).addClass('active-slide');
		},
		onSliderLoad: function () {
			$('.video_slides>li').eq(1).addClass('active-slide');
		}
	});

	// 슬라이더 동영상 컨트롤
	$(".active-slide").children("video").trigger("play");
	$("#video_pager a").click(function(){
	$(".video_slides>li video").trigger("pause");
		setTimeout(function(){
			$(".active-slide").children("video").trigger("play");
		}, 1000);
	});
*/
	// 동영상 tab
	$(".tab_person > .btn_video").click(function(){
		if( $(this).hasClass("video01") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab01").addClass("on").show();
		}
		if( $(this).hasClass("video02") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab02").addClass("on").show();
		}
		if( $(this).hasClass("video03") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab03").addClass("on").show();
		}
		if( $(this).hasClass("video04") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab04").addClass("on").show();
		}
		if( $(this).hasClass("video05") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab05").addClass("on").show();
		}
		if( $(this).hasClass("video06") ){
			$(".video_tap_wrap .tab").removeClass("on").hide();
			$(".video_tap_wrap .tab06").addClass("on").show();
		}
	});

});