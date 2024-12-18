var contentUi = {};

(function (contentUi) {
    this.contentUi = contentUi;
})((function ($) {
    contentUi.mainSwiper = function (obj) {
        var slider = new Swiper(obj, {
            pagination:{
                el:obj + " .swiper-pagination",
                clickable:true
            },
        });
    };

    //detail_view
    contentUi.compInfoSlider = function (obj) {
        var slider = new Swiper(obj, {
            slidesPerView:'auto',
            spaceBetween:24,
            centeredSlides:true,
            loop:true,
            autoplay:{
               delay:3000,
            },
            pagination:{
                el:obj + " .swiper-pagination",
                clickable:true
            },
            navigation:{
                    nextEl:obj + " .swiper-button-next",
                    prevEl:obj + " .swiper-button-prev",
            },
            breakpoints:{
                480 :{
                    slidesPerView:1,
                    spaceBetween:0,
                    centeredSlides:false
                },
                768:{
                    slidesPerView:1,
                    spaceBetween:0,
                    centeredSlides:false,
                }
            }
        });
    };

    //detail_view2
    contentUi.ctrllineSwiper = function (obj) {
        var slider = new Swiper(obj + " .gallerys", {
            slidesPerView:3,
            spaceBetween:24,
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: false,
            },
            breakpoints:{
                480:{
                    slidesPerView:'auto',
                    centeredSlides:false,
                },
                820:{
                    slidesPerView:2,
                    centeredSlides:false,
                },
            }
        });
    }
    
    return contentUi;
}(jQuery)));
$(document).ready(function () {
    //메인슬라디더
    contentUi.mainSwiper('.main_slider');

    //디테일뷰 상단 비쥬얼
    contentUi.compInfoSlider('.compinfo_slider');
    
    //ctrllineSwiper
    contentUi.ctrllineSwiper('.best_msg_area')
  
    //디테일뷰 탭
    commUi.handleTabs({
        root :'.tab_link',
        target :'.tab_target', 
    });
    
});