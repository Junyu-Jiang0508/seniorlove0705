$(document).ready(function () {
    var controller = new ScrollMagic.Controller();
  
    // åˆ›å»ºåŠ¨ç”»çš„å‡½æ•°
    function createScene(className, delay) {
      return new ScrollMagic.Scene({
        triggerElement: ".intro-text", // è§¦å‘å…ƒç´ çš„é€‰æ‹©å™¨
        triggerHook: 0.5 // è§¦å‘ä½ç½®ï¼Œ0.5 è¡¨ç¤ºå…ƒç´ ä¸­é—´ä½ç½®
      })
        .on("enter", function (event) { // å½“è¿›å…¥åœºæ™¯æ—¶æ‰§è¡Œçš„æ“ä½œ
          // å»¶è¿Ÿæ’­æ”¾åŠ¨ç”»
          setTimeout(function () {
            // æ’­æ”¾åŠ¨ç”»
            $('.' + className).addClass('play');
          }, delay);
        })
        .addTo(controller); // å°†åœºæ™¯æ·»åŠ åˆ°æŽ§åˆ¶å™¨ä¸­
    }
  
    // ä½¿ç”¨å¾ªçŽ¯åˆ›å»ºå¤šä¸ªåŠ¨ç”»åœºæ™¯
    createScene('welcome1', 0); // line1åŠ¨ç”»ç«‹å³æ’­æ”¾
    createScene('welcome2', 0); // line2åŠ¨ç”»ç«‹å³æ’­æ”¾
    createScene('welcome3', 3000); // line3åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome4', 3000); // line4åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome5', 3000); // line5åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome6', 3000); // line6åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome7', 3000); // line7åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome8', 3000); // line8åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
    createScene('welcome9', 3000); // line9åŠ¨ç”»å»¶è¿Ÿ4ç§’æ’­æ”¾
  });
  
  
  
  //tiktokè§†é¢‘
  $(document).ready(function () {
    var videoboxHeight = $(".video-background").height();
    var tiktoktextHeight = $("#tiktok-text").height();
    var tiktokfixedHeight = tiktoktextHeight + videoboxHeight;
  
    var controller = new ScrollMagic.Controller();
    new ScrollMagic.Scene({
      triggerElement: ".video-background",
      triggerHook: 0,
      duration: tiktokfixedHeight
    })
      .setPin(".video-background")
      .addTo(controller);
  })
  
  // $(document).ready(function () {
  //   var videoboxHeight = $("#video-box").height();
  //   var tiktoktextHeight = $("#tiktok-text").height();
  //   var tiktokfixedHeight = tiktoktextHeight + videoboxHeight;
  
  //   var controller = new ScrollMagic.Controller();
  //   new ScrollMagic.Scene({
  //     triggerElement: "#video-box",
  //     triggerHook: 0,
  //     duration: tiktokfixedHeight
  //   })
  //     .setPin("#video-box")
  //     .addTo(controller);
  // })
  
  // ä»¥ä¸‹ä»£ç ä¸ºAIè¾…åŠ©ç”Ÿæˆ
  $(document).ready(function () {
    var fixedElementHeights = [
      $(".emoji-text").height() * 1.2,
      $(".word-text").height() * 1.2,
      $(".go-text").height() * 1.4
    ];
    var switchPoints = [
      fixedElementHeights[0],
      fixedElementHeights[1],
      fixedElementHeights[2]
    ];
  
    // var currentChartIndex = 0;
  
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      for (var i = 0; i < switchPoints.length; i++) {
        if (scrollTop >= switchPoints[i]) {
          currentChartIndex = i + 1;
        }
      }
  
      $(".fixed-element").removeClass('active');
      $("#fixed-element-" + currentChartIndex).addClass('active');
      if (currentChartIndex === switchPoints.length) {
        $(".fixed-element").removeClass('active');
      }
    });
  
    for (var i = 0; i < fixedElementHeights.length; i++) {
      var controller = new ScrollMagic.Controller();
      new ScrollMagic.Scene({
        triggerElement: "#fixed-element-" + i,
        triggerHook: 0.1,
        duration: fixedElementHeights[i]
      })
        .setPin("#fixed-element-" + i)
        .addTo(controller);
    }
  });
  