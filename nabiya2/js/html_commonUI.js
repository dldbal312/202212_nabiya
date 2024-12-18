var commUi = {};

(function(commUi) {
    this.commUi = commUi;
})((function($) {

    //한줄 슬라이더 컨트롤러 inner 밖에 있는경우
    commUi.ctrloutSwiper = function (obj) {
        var maincontSlider = new Swiper(obj + " .gallerys", {
            slidesPerView:5,
            spaceBetween:24,
            centeredSlides:true,
            loop:true,
            navigation:{
                nextEl:obj + " .arr_next_mdgr",
                prevEl:obj + " .arr_prev_mdgr"
            },
            breakpoints:{
                480:{
                    slidesPerView:'auto',
                    spaceBetween:16,
                    centeredSlides:false,
                },
                820:{
                    slidesPerView:2,
                    spaceBetween:16,
                    centeredSlides:false,
                },
            }
        });
    };

    //탭 구현 / 클릭효과 구현
    commUi.handleTabs = function(options) {
        var option = {
            root :'.listbox',
            tabList :' > li',
            tab :'a',
            target :'.tabs_target', 
            className :'on',
            targetIdIs :true, //탭연결방법 선택 (자동 true, 아이디값매칭 false)
            defaultNum :0, // 탭에 on처리 (number OR null)
            eventDefault :true // 링크로 넘어가지 않게 하기 (true, false)
        };
        $.extend(option, options);

        $(option.root).each(function(index){
            var $tabroot = $(this)
            var $tabList = $tabroot.find(option.tabList);
            var $tab = $tabList.find(option.tab);
            var $target = $tabroot.next().find(option.target);
            var idx = 0;

            $tab.on('click', function (e) {
                var tabHash = this.hash;
                var idx = $(this).parent().index();

                //링크막기
                if(option.eventDefault == true){
                    e.preventDefault();
                }
                //링크
                $tabList.removeClass(option.className);
                $(this).parent().addClass(option.className);

                //탭컨텐츠
                $target.removeClass(option.className)
                if(option.targetIdIs == true){ //자동탭 연결
                    $target.eq(idx).addClass(option.className);
                }else{ //아이디값 매칭으로 탭 연결
                    $(tabHash).addClass(option.className);
                };
            });
            if(option.defaultNum != null){
                $tab.eq(option.defaultNum).trigger('click');
            }
        });
    };

    //토글박스
    commUi.toggleBox = function(options) {
        var option = {
            root :'.tgbox',
            tgclick :'.btn_tg',
            tgicon :'.arr_up_mdgr',
            target :'.tg_cont', 
            className :'on',
            altText1 : '열기',
            altText2: '닫기',
        };
        $.extend(option, options);

        $(option.root).each(function(index){
            var _this = $(this);
            var _tgicon = $(this).find(option.tgicon);
            var _target = $(this).find(option.target);

            //컨텐츠 영역이 있는 경우
            if(_target.css('display') == 'block'){
               _tgicon.removeClass(option.className);
               _tgicon.find('img').attr('alt', option.altText2);
            }else{
               _tgicon.addClass(option.className);
               _tgicon.find('img').attr('alt', option.altText1);
            }

            //아이콘이 있는 링크 클릭시 처리
            _this.find(option.tgclick).on('click', function (e) {
                _target.slideToggle(option.className)
                commUi.iconTg(_this.find(option.tgclick))
                
                e.preventDefault();
            });

        });
    };

    //아이콘 토글 처리
    commUi.iconTg = function(options) {
        var option = {
            tglink : options, 
            tgicon :'.arr_up_mdgr', 
            className :'on',
            altText1 : '열기',
            altText2: '닫기',
            defaultIconArr: null, //0:on , 1:on삭제, null:html소스
        };
        $.extend(option, options);
        
        var _tgicon = option.tglink.find(option.tgicon);
        //img 토글, alt값 수정
        _tgicon.toggleClass(option.className);
        if(_tgicon.hasClass(option.className)){
            _tgicon.find('img').attr('alt', option.altText1); 
        }else{
            _tgicon.find('img').attr('alt', option.altText2)
        };     
    };

    //사이즈별 class처리
    /*commUi.screenResize = function(){
        var $body = $('body');
        var scrSize = $(window).innerWidth();
        var rmvClass = 'rsz_mobile rsz_tablet rsz_pc';

        if(scrSize <= 480){
            $body.addClass('rsz_device');
            $body.removeClass(rmvClass).addClass('rsz_mobile');

        }else if(scrSize <= 820){
            $body.addClass('rsz_device');
            $body.addClass('rsz_device');
            $body.removeClass(rmvClass).addClass('rsz_tablet');

        }else{
            $body.removeClass('rsz_device');
            $body.removeClass(rmvClass).addClass('rsz_pc');

        };
    };*/

    //제어를 위한 화면 리사이징
    commUi.allMenuBtn = function(){
        $('.header .btn_allmenu').on('click', function(){
            $('.header').addClass('active');
            $('body').addClass('scollno');
        });
        $('.header .menu_close').on('click', function(){
            $('.header').removeClass('active');
            $('body').removeClass('scollno');
        });
    };
    commUi.allMenuTop = function(){
        var t = $('.sidehead').outerHeight() + $('.login_wrap').outerHeight();
        if($(window).width() <= 820){
            $('.nav_wrap').css('top', t);
            console.log(t)
        }else{
            $('.nav_wrap').css('top', 'auto');
        }
    };
    return commUi;
}(jQuery)));

$(document).ready(function(){
    //디바이스 전체메뉴
    commUi.allMenuBtn();    

    //메뉴 top값 
    $(window).resize(commUi.allMenuTop)
    commUi.allMenuTop()






















    //제어를 위한 화면 리사이징
    //$(window).on('resize load', commUi.screenResize);
    $('.wrapper').prepend('<div class="temp_header"></div>');
    $('.wrapper').append('<div class="temp_footer"></div>');
    $('.contents').append('<div class="temp_aside"></div>');
    $('.temp_footer').load('../html/include/footer.html')
    $('.temp_aside').load('../html/include/aside.html')
    $('.temp_header').load('../html/include/header.html', function(){
        $('header, footer, aside').unwrap();
        
        //디바이스 전체메뉴
        commUi.allMenuBtn();
        $(window).resize(commUi.allMenuTop)
    });

    
    
});

