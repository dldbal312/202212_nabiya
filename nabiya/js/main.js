var mainUi = {};

(function (mainUi) {
    this.mainUi = mainUi;
})((function ($) {
    mainUi.mainSwiper = function (obj) {
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
                nextEl:obj + " .arr_next_lgwh",
                prevEl:obj + " .arr_prev_lgwh"
            },
            breakpoints:{
                480 :{
                    slidesPerView:1,
                    spaceBetween:0,
                    centeredSlides:true,
                },
                820:{
                    slidesPerView:1,
                    spaceBetween:0,
                    centeredSlides:true,
                },
            }
        });
    };
    
    return mainUi;
}(jQuery)));
$(document).ready(function () {
    //메인슬라디더
    mainUi.mainSwiper('.main_slider');
    //인기마사지
    commUi.ctrloutSwiper('.best_area');
    //지역별 인기업체
    commUi.ctrloutSwiper('.loct_best_area');
    //고객들리뷰
    commUi.ctrloutSwiper('.cust_review');
});