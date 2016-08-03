//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var main = this;
        main.find('.tabs-content__item').hide();
        main.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(main).find('.tabs-content__item').hide().removeClass('active');
            $(main).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }

    $.fn.qToggle = function(){
        var main = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    $.fn.placeholder = function(){
        var main = this;
    }
  }(jQuery));

  $(document).ready(function(){

    $('#mainCarousel').owlCarousel({
        infinite:true,
        loop:true,
        autoplay: true,
        autoplayTimeout: 5000,
        aoutplayHoverPause: true,
        items: 1,
        dots: true,
    });
    $('.main-carousel .owl-controls').css({
        'margin-left': - ($('.main-carousel .owl-controls').width() / 2) + 'px'
    })

    //выпадающее меню
    $('.dropdown').hover(function () {
         clearTimeout($.data(this,'timer'));
         $('ul',this).stop(true,true).fadeIn(200);
      }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
          $('ul',this).stop(true,true).fadeOut(200);
        }, this), 100));
      });

    //fancybox init
    $('.fancybox').fancybox({
        padding: 0,
        wrapCSS: 'fancy-callback'
    });

    //filter select
    $('.catalog-filter select').selectmenu();
    //initiate the plugin and pass the id of the div containing gallery images
    $("#img_01").elevateZoom({
        scrollZoom : true,
        gallery:'gal1',
        cursor: 'pointer', 
        galleryActiveClass: 'active', 
        imageCrossfade: true, 
        loadingIcon: 'img/giphy.gif'
    }); 

    //pass the images to Fancybox
    $("#img_01").bind("click", function(e) {  
      var ez =   $('#img_01').data('elevateZoom'); 
        $.fancybox(ez.getGalleryList());
      return false;
    });
  })

 