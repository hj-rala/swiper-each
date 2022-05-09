 //tabs start ---------------------
  function new_insights_tabs() {
    var tabsWrap = $('.new_insights_tabs');
    var tabsBtn = $('.new_insights_tabs_btn');
    var tabsCon = $('.new_insights_tabs_con');
    var techCon = $('.new_insights_tech_con');

    tabsWrap.each(function (index, element) {
      var $this = $(this);
      $this.addClass('tabs_sw' + index);

      new_insights_tabs_swiper = new Swiper('.tabs_sw' + index, {
        autoHeight: false,
        spaceBetween: 0,
        loop: false,
        freeMode: true,
        slidesPerView: 'auto',
      });

      $(this)
        .find(tabsBtn)
        .each(function () {
          $(this).on('click', function (e) {
            e.preventDefault();

            var contLink = $(this).attr('href');
            $(this).closest(tabsWrap).siblings(tabsCon).find(techCon).removeClass('active');
            $(this).closest(tabsWrap).find('.swiper-slide').find(tabsBtn).removeClass('active').removeAttr('title');
            $(this).addClass('active').attr('title', '선택됨');
            $(contLink).addClass('active');
          });
        });
    });
    tabsWrap.find('.swiper-slide:eq(0) a').click();
  }

  function new_insights_tabs_position() {
    let itemTotalWidth = [0, 0];
    var tabs1 = $('.tabs_sw0');
    var tabs2 = $('.tabs_sw1');
    var winW = $(window).width();
    tabs1.find('.swiper-slide').each(function () {
      itemTotalWidth[0] += $(this).outerWidth(true);
      $(this).find('.swiper-slide:eq(0) a').click();
    });
    tabs2.find('.swiper-slide').each(function () {
      itemTotalWidth[1] += $(this).outerWidth(true);
      $(this).find('.swiper-slide:eq(0) a').click();
    });

    winW < itemTotalWidth[0] ? tabs1.addClass('left') : tabs1.removeClass('left');
    winW < itemTotalWidth[1] ? tabs2.addClass('left') : tabs2.removeClass('left');
  }
  //tabs finish ---------------------
