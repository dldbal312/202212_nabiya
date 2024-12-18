var subContUi = {};

(function (subContUi) {
    this.subContUi = subContUi;
})((function ($) {
    //detail_view
    subContUi.compInfoSlider = function (obj) {
        var mainSlider = new Swiper(obj, {
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
    
    return subContUi;
}(jQuery)));
$(document).ready(function () {
    //디테일뷰 상단 비쥬얼
    subContUi.compInfoSlider('.compinfo_slider');
    //디테일뷰 탭
    commUi.handleTabs({
        root :'.tab_link',
        target :'.tab_target', 
    });
    //주변인기마사지
    commUi.ctrloutSwiper('.around_best_area')
});