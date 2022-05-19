(function (exports, $, win) {
  var exports = exports;
  var memoryPro_swiper = undefined;
  var processorPro_swiper = undefined;

  $(function () {
    $html = $('html');
    $body = $('body');
    $header = $('#header');

    $(window).on('resize load', function (event) {
      new_insights_pictureIEFallback();
    });

    new_insights_accordion();
    new_insights_applications_tab();
    new_insights_colla();
    memoryPro_new_insights_tabs();
    techtabs_new_insights_tabs();
    processorPro_new_insights_tabs();
    normal_new_insights_tabs();
  });

  //swiper inner start(common) ---------------------
  function new_insights_swiper_inner(targetWrap) {
    var winW = $(window).width();
    var itemList = targetWrap.find('.new_insights_product_bottom_item').length;

    targetWrap.each(function () {
      if (winW > 1023) {
        if (itemList < 4) {
          targetWrap.addClass('maxNone');
        } else {
          targetWrap.removeClass('maxNone');
        }
      } else if (winW < 1023 && winW > 767) {
        if (itemList < 3) {
          targetWrap.addClass('maxNone');
        } else {
          targetWrap.removeClass('maxNone');
        }
      } else {
        if (itemList < 3) {
          targetWrap.addClass('maxNone');
        } else {
          targetWrap.removeClass('maxNone');
        }
      }
    });
  }
  //swiper inner finish(common) ---------------------

  //tabs position start(common) ---------------------
  function new_insights_tabs_position(currentSwiper) {
    let itemTotalWidth = 0;
    var winW = $(window).width();

    currentSwiper.find('.swiper-slide').each(function () {
      itemTotalWidth += $(this).outerWidth(true);
      $(this).find('.swiper-slide:eq(0) a').click();
    });

    winW < itemTotalWidth ? currentSwiper.addClass('left') : currentSwiper.removeClass('left');
  }
  //tabs position finish(common) ---------------------

  //memory products start ---------------------
  function memoryPro_new_insights_tabs() {
    var content = $('.memory-pro');
    var tabsWrap = $('.memory-pro .new_insights_tabs');
    var tabsBtn = $('.memory-pro .new_insights_tabs_btn');
    var conItem = $('.memory-pro .new_insights_tabs_con_item');

    tabsBtn.on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
        return;
      }

      var contLink = $(this).attr('href');
      var targetWrap = $(contLink + ' .new_insights_product_bottom');
      var swiperWrap = $(contLink + ' .new_insights_product_bottom_swiper');

      $(this).closest(content).find(conItem).removeClass('active');
      $(this).addClass('active').attr('title', '선택됨').parent().siblings().children().removeClass('active').removeAttr('title');
      $(contLink).addClass('active');
      if ($(contLink).find('.new_insights_product_bottom_swiper').length) {
        if (memoryPro_swiper != undefined) {
          memoryPro_swiper.destroy();
          memoryPro_swiper = undefined;
        }

        memoryPro_swiper = new Swiper(swiperWrap, {
          spaceBetween: 0,
          slidesPerView: 3,
          slidesPerGroup: 3,
          loop: false,
          observer: true,
          observeParents: true,
          preventClicks: true, //스와이프동안 클릭 방지
          preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지
          navigation: {
            nextEl: swiperWrap.siblings('.new_insights_arrow.arrow_next'),
            prevEl: swiperWrap.siblings('.new_insights_arrow.arrow_prev'),
          },
          pagination: {
            el: swiperWrap.siblings('.new_insights_product_bottom .new_insights_swiper_pagination'),
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            1023: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 0,
              slidesPerColumn: 1,
            },
            767: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              slidesPerColumn: 2,
            },
          },
          on: {
            init: function () {
              new_insights_swiper_inner(targetWrap);
              this.update();
            },
            resize: function () {
              new_insights_swiper_inner(targetWrap);
            },
            beforeResize: function () {
              this.update();
              let vw = window.innerWidth;
              if (vw > 767) {
                memoryPro_swiper.params.slidesPerColumn = 1;
                $('.new_insights_tabs_con_item.active .new_insights_product_bottom_swiper .new_insights_product_bottom_item').css('order', '0');
              } else {
                memoryPro_swiper.params.slidesPerColumn = 2;
              }
            },
          },
        });
      }
    });

    new_insights_tabs_swiper_num = new Swiper(tabsWrap, {
      autoHeight: false,
      spaceBetween: 0,
      loop: false,
      freeMode: true,
      slidesPerView: 'auto',
      on: {
        init: function () {
          new_insights_tabs_position(tabsWrap);
        },
        resize: function () {
          new_insights_tabs_position(tabsWrap);
        },
      },
    });
    tabsWrap.find('.swiper-slide:eq(0) a').click();
  }
  //memory productss finish ---------------------

  //processor products start ---------------------
  function processorPro_new_insights_tabs() {
    var content = $('.processor-pro');
    var tabsWrap = $('.processor-pro .new_insights_tabs');
    var tabsBtn = $('.processor-pro .new_insights_tabs_btn');
    var conItem = $('.processor-pro .new_insights_tabs_con_item');

    tabsBtn.on('click', function (e) {
      e.preventDefault();
      if ($(this).hasClass('active')) {
        return;
      }

      var contLink = $(this).attr('href');
      var targetWrap = $(contLink + ' .new_insights_product_bottom');
      var swiperWrap = $(contLink + ' .new_insights_product_bottom_swiper');

      $(this).closest(content).find(conItem).removeClass('active');
      $(this).addClass('active').attr('title', '선택됨').parent().siblings().children().removeClass('active').removeAttr('title');
      $(contLink).addClass('active');
      if ($(contLink).find('.new_insights_product_bottom_swiper').length) {
        if (processorPro_swiper != undefined) {
          processorPro_swiper.destroy();
          processorPro_swiper = undefined;
        }

        processorPro_swiper = new Swiper(swiperWrap, {
          spaceBetween: 0,
          slidesPerView: 3,
          slidesPerGroup: 3,
          loop: false,
          observer: true,
          observeParents: true,
          preventClicks: true, //스와이프동안 클릭 방지
          preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지
          navigation: {
            nextEl: swiperWrap.siblings('.new_insights_arrow.arrow_next'),
            prevEl: swiperWrap.siblings('.new_insights_arrow.arrow_prev'),
          },
          pagination: {
            el: swiperWrap.siblings('.new_insights_product_bottom .new_insights_swiper_pagination'),
            type: 'bullets',
            clickable: true,
          },
          breakpoints: {
            1023: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 0,
              slidesPerColumn: 1,
            },
            767: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              slidesPerColumn: 2,
            },
          },
          on: {
            init: function () {
              new_insights_swiper_inner(targetWrap);
              this.update();
            },
            resize: function () {
              new_insights_swiper_inner(targetWrap);
            },
            beforeResize: function () {
              this.update();
              let vw = window.innerWidth;
              if (vw > 767) {
                processorPro_swiper.params.slidesPerColumn = 1;
                $('.new_insights_tabs_con_item.active .new_insights_product_bottom_swiper .new_insights_product_bottom_item').css('order', '0');
              } else {
                processorPro_swiper.params.slidesPerColumn = 2;
              }
            },
          },
        });
      }
    });

    new_insights_tabs_swiper_num = new Swiper(tabsWrap, {
      autoHeight: false,
      spaceBetween: 0,
      loop: false,
      freeMode: true,
      slidesPerView: 'auto',
      on: {
        init: function () {
          new_insights_tabs_position(tabsWrap);
        },
        resize: function () {
          new_insights_tabs_position(tabsWrap);
        },
      },
    });
    tabsWrap.find('.swiper-slide:eq(0) a').click();
  }
  //processor productss finish ---------------------

  //normal products start ---------------------
  function normal_new_insights_tabs() {
    var targetWrap = $('.normal-pro .new_insights_product_bottom');
    var swiperWrap = $('.normal-pro .new_insights_product_bottom_swiper');

    normal_swiper = new Swiper(swiperWrap, {
      spaceBetween: 0,
      slidesPerView: 3,
      slidesPerGroup: 3,
      loop: false,
      observer: true,
      observeParents: true,
      preventClicks: true, //스와이프동안 클릭 방지
      preventClicksPropagation: false, //스와이프동안 클릭이벤트 전파 중지
      navigation: {
        nextEl: swiperWrap.siblings('.new_insights_arrow.arrow_next'),
        prevEl: swiperWrap.siblings('.new_insights_arrow.arrow_prev'),
      },
      pagination: {
        el: swiperWrap.siblings('.new_insights_product_bottom .new_insights_swiper_pagination'),
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1023: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 0,
          slidesPerColumn: 1,
        },
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          slidesPerColumn: 2,
        },
      },
      on: {
        init: function () {
          new_insights_swiper_inner(targetWrap);
          this.update();
        },
        resize: function () {
          new_insights_swiper_inner(targetWrap);
        },
        beforeResize: function () {
          this.update();
          let vw = window.innerWidth;
          if (vw > 767) {
            normal_swiper.params.slidesPerColumn = 1;
            $('.new_insights_tabs_con_item.active .new_insights_product_bottom_swiper .new_insights_product_bottom_item').css('order', '0');
          } else {
            normal_swiper.params.slidesPerColumn = 2;
          }
        },
      },
    });
  }
  //normal productss finish ---------------------

  //tech_tabs start ---------------------
  function techtabs_new_insights_tabs() {
    var tabsWrap = $('.tech_tabs.new_insights_tabs');
    var tabsBtn = $('.tech_tabs .new_insights_tabs_btn');

    tabsBtn.on('click', function (e) {
      e.preventDefault();

      if ($(this).hasClass('active')) {
        return;
      }

      var contLink = $(this).attr('href');
      var tabsCon = $('.new_insights_tabs_con');
      var conItem = $('.new_insights_tabs_con_item');

      $(this).closest(tabsWrap).siblings(tabsCon).find(conItem).removeClass('active');
      $(this).addClass('active').attr('title', '선택됨').parent().siblings().children().removeClass('active').removeAttr('title');
      $(contLink).addClass('active');
    });

    new_insights_tabs_swiper_num = new Swiper(tabsWrap, {
      autoHeight: false,
      spaceBetween: 0,
      loop: false,
      freeMode: true,
      slidesPerView: 'auto',
      on: {
        init: function () {
          new_insights_tabs_position(tabsWrap);
        },
        resize: function () {
          new_insights_tabs_position(tabsWrap);
        },
      },
    });
    tabsWrap.find('.swiper-slide:eq(0) a').click();
  }
  //tech_tabs finish ---------------------

  //accordion start ---------------------
  function new_insights_accordion() {
    var btn = $('.new_insights_accordion_btn');
    var target = $('.new_insights_accordion_wrap');
    var cont = $('.new_insights_accordion_con');
    btn.each(function () {
      $(this).on('click', function () {
        if ($(this).hasClass('active')) {
          $(this).removeClass('active');
          $(this).parent().siblings().removeClass('active').slideUp(300);
        } else {
          btn.removeClass('active');
          cont.removeClass('active').slideUp(300);
          $(this).addClass('active');
          $(this).parent().siblings().addClass('active').slideDown(300).css({ display: 'flex' });
        }
      });
    });
    target.find('li').eq('0').find(btn).click();
  }
  //accordion finish ---------------------

  //applications start ---------------------
  function new_insights_applications_tab() {
    $('.new_insights_applications_item-tab li > a').each(function () {
      $(this).on('click', function (e) {
        e.preventDefault();
        if ($('html, body').is(':animated')) {
          return false;
        }

        var contLink = $(e.currentTarget).attr('href');

        $('.new_insights_applications_item-con, .new_insights_applications_item-tab li > a').removeClass('active').removeAttr('title');

        $(e.target).attr('title', 'selected');
        $(contLink).addClass('active');
        $(e.currentTarget).addClass('active');
      });
    });
    $('.new_insights_applications_item-tab li:eq(0) a').click();
  }
  //applications finish ---------------------

  //collaboration start ---------------------
  function new_insights_colla() {
    new_insights_colla_swiper = new Swiper('.new_insights_colla_container', {
      autoHeight: false,
      spaceBetween: 0,
      slidesPerView: 3,
      allowTouchMove: false,
      pagination: {
        el: '.new_insights_colla_container .new_insights_swiper_pagination',
        type: 'bullets',
        clickable: true,
      },
      breakpoints: {
        1023: {
          freeMode: true,
          slidesPerView: 'auto',
          allowTouchMove: true,
        },
      },
    });
  }
  //collaboration finish ---------------------

  //pictureIEFallback start ---------------------
  function new_insights_pictureIEFallback() {
    let isTablet = window.innerWidth >= 768 && window.innerWidth <= 1023;
    let isMobile = window.innerWidth > 0 && window.innerWidth <= 767;
    const isIE = navigator.userAgent.indexOf('Trident') > -1 || navigator.userAgent.indexOf('MSIE') > -1;
    const target = $('picture > img');

    if (!isIE) {
      return;
    } else {
      target.each(function () {
        if (isTablet) {
          if ($(this).attr('src') !== $(this).attr('data-tablet-src')) {
            $(this).attr({
              src: $(this).attr('data-tablet-src'),
            });
          }
        } else if (isMobile) {
          if ($(this).attr('src') !== $(this).attr('data-mobile-src')) {
            $(this).attr({
              src: $(this).attr('data-mobile-src'),
            });
          }
        } else if (!isTablet && !isMobile) {
          if ($(this).attr('src') !== $(this).attr('data-pc-src')) {
            $(this).attr({
              src: $(this).attr('data-pc-src'),
            });
          }
        }
      });
    }
  }
  //pictureIEFallback finish ---------------------
})(this, this.jQuery, window);
