$(function(){

    //ハンバーガーボタン
    $("#ham_nav").hide();
    $("#open").click(function(){
    $("#ham_nav").fadeIn(200);
    $("#open").hide();
    });
    
    $("#close").click(function(){
    $("#ham_nav").fadeOut(200);
    $("#open").show();
    });


    //フェードイン
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();
    
        $('.element').each(function () {
          const targetPosition = $(this).offset().top;
          if (scroll > targetPosition - windowHeight + 100) {
            $(this).addClass("is-fadein");
          }
        });
      });

    
    });