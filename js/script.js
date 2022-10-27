
$(document).ready(function () {
    $(".top-bar-wrap .top-bar > .menu-wrap > ul > li > a").click(function () {
      let indexNum = $(this).index();
  
      if ($(this).hasClass("active")) {
        //  메뉴야 꺼져
        $(this).removeClass("active");
        $(".nav-2-depth-wrap").removeClass("active");
        $(".nav-2-depth-wrap .left > .nav").eq(indexNum).removeClass("active");
      } else {
        // 기본기능
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
  
        $(".nav-2-depth-wrap").addClass("active");
  
        $(".nav-2-depth-wrap .left > .nav").eq(indexNum).addClass("active");
        $(".nav-2-depth-wrap .left > .nav")
          .eq(indexNum)
          .siblings()
          .removeClass("active");
      }
    });
  
    /*mo-version nav-2-depth effect  */
  
    $(".mo-top-bar-wrap > .mo-top-bar > .hamburger").click(function () {
      let indexNum = $(this).index();
  
      if ($(this).hasClass("active")) {
        //  메뉴야 꺼져
        $(this).removeClass("active");
        $(".mo-nav-2-depth-wrap").removeClass("active");
        $(".mo-nav-2-depth-wrap .left > .nav").eq(indexNum).removeClass("active");
      } else {
        // 기본기능
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
  
        $(".mo-nav-2-depth-wrap").addClass("active");
  
        $(".mo-nav-2-depth-wrap .left > .nav").eq(indexNum).addClass("active");
        $(".mo-nav-2-depth-wrap .left > .nav")
          .eq(indexNum)
          .siblings()
          .removeClass("active");
      }
    });
  
    /*mo-version nav-2-depth effect  */
  
    $(".nav-2-depth-wrap .right").click(function () {
      $(".top-bar-wrap .nav-box > li.active").removeClass("active");
      $(".nav-2-depth-wrap").removeClass("active");
      $(".nav-2-depth-wrap .left > .nav.active").removeClass("active");
    });
  
    console.clear();
  
    $(".section__list-box > ul > li").hover(function () {
      let $this = $(this);
      let indexNum = $this.index();
  
      $(".youtube-box > .youtube").removeClass("active");
      $(".youtube-box > .youtube").eq(indexNum).addClass("active");
    });
  
    $(".slider").slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dotsClass: "slick-dots",
      dots: true,
      arrows: true,
        prevArrow:
        "<div class='before-btn'><img src='https://www.samsung.com/sec/static/_images/common/icon-slick-prev-compo-wht.svg' alt=''></div>",
      nextArrow:
        "<div class='next-btn'><img src='https://www.samsung.com/sec/static/_images/common/icon-slick-next-compo-wht.svg' alt=''></div>",
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear"
    });
  
    $(".slider-wrap2").slick({
      autoplay: true,
      autoplaySpeed: 3000
    });
  
    /*mo-version slide*/
  
    $(".slider-wrap3").slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
  
    $(".mo-slider").slick({
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000
    });
  
    /*mo-version slide*/
  });
  