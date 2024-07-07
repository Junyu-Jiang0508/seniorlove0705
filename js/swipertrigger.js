$(document).ready(function () {
    var swiper0 = new Swiper('.swiper0', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);   
            swiperAnimate(swiper); 
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper0_triggers = document.querySelectorAll('.swiper0_trigger');
    swiper0_triggers.forEach(function (swiper0_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper0_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper0.slideNext();
            })
            .on("leave", function (e) {
                swiper0.slidePrev();
            })
    })

    var swiper1 = new Swiper('.swiper1', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);   
            swiperAnimate(swiper); 
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper1_triggers = document.querySelectorAll('.swiper1_trigger');
    swiper1_triggers.forEach(function (swiper1_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper1_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper1.slideNext();
            })
            .on("leave", function (e) {
                swiper1.slidePrev();
            })
    })

    var swiper12 = new Swiper('.swiper12', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);   
            swiperAnimate(swiper); 
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper12_triggers = document.querySelectorAll('.swiper12_trigger');
    swiper1_triggers.forEach(function (swiper12_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper12_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper12.slideNext();
            })
            .on("leave", function (e) {
                swiper12.slidePrev();
            })
    })



    var swiper2 = new Swiper('.swiper2', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });


    var swiper2_triggers = document.querySelectorAll('.swiper2_trigger');
    swiper2_triggers.forEach(function (swiper2_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper2_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper2.slideNext();
            })
            .on("leave", function (e) {
                swiper2.slidePrev();
            })
    })


    var swiper3 = new Swiper('.swiper3', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) { 
            swiperAnimateCache(swiper);
            swiperAnimate(swiper);
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper);
        }
    });


    var swiper3_triggers = document.querySelectorAll('.swiper3_trigger');
    swiper3_triggers.forEach(function (swiper3_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper3_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper3.slideNext();
            })
            .on("leave", function (e) {
                swiper3.slidePrev();
            })
    })


     var swiper4 = new Swiper('.swiper4', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.xçš„åˆå§‹åŒ–æ˜¯onFirstInit
            swiperAnimateCache(swiper); //éšè—åŠ¨ç”»å…ƒç´  
            swiperAnimate(swiper); //åˆå§‹åŒ–å®Œæˆå¼€å§‹åŠ¨ç”»
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //æ¯ä¸ªslideåˆ‡æ¢ç»“æŸæ—¶ä¹Ÿè¿è¡Œå½“å‰slideåŠ¨ç”»
        }
    });


    var swiper4_triggers = document.querySelectorAll('.swiper4_trigger');
    swiper4_triggers.forEach(function (swiper4_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper4_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper4.slideNext();
            })
            .on("leave", function (e) {
                swiper4.slidePrev();
            })
    })


    // ç¬¬5ä¸ªswiperçš„å¤„ç†
    var swiper5 = new Swiper('.swiper5', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) { //Swiper2.xçš„åˆå§‹åŒ–æ˜¯onFirstInit
            swiperAnimateCache(swiper); //éšè—åŠ¨ç”»å…ƒç´  
            swiperAnimate(swiper); //åˆå§‹åŒ–å®Œæˆå¼€å§‹åŠ¨ç”»
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); //æ¯ä¸ªslideåˆ‡æ¢ç»“æŸæ—¶ä¹Ÿè¿è¡Œå½“å‰slideåŠ¨ç”»
        }
    });


    var swiper5_triggers = document.querySelectorAll('.swiper5_trigger');
    swiper5_triggers.forEach(function (swiper5_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper5_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            // .addIndicators()
            .on("enter", function (e) {
                swiper5.slideNext();
            })
            .on("leave", function (e) {
                swiper5.slidePrev();
            })
    });

    var swiper21 = new Swiper('.swiper21', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);   
            swiperAnimate(swiper); 
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper21_triggers = document.querySelectorAll('.swiper21_trigger');
    swiper21_triggers.forEach(function (swiper21_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper21_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper21.slideNext();
            })
            .on("leave", function (e) {
                swiper21.slidePrev();
            })
    });

    
    var swiper22 = new Swiper('.swiper22', {
        speed: 800,
        direction: 'vertical',
        allowTouchMove: false,
        onInit: function (swiper) {
            swiperAnimateCache(swiper);   
            swiperAnimate(swiper); 
        },
        onSlideChangeEnd: function (swiper) {
            swiperAnimate(swiper); 
        }
    });
    var controller = new ScrollMagic.Controller();

    var swiper22_triggers = document.querySelectorAll('.swiper22_trigger');
    swiper22_triggers.forEach(function (swiper22_trigger) {
        new ScrollMagic.Scene({
            triggerElement: swiper22_trigger,
            triggerHook: 0.8
        })
            .addTo(controller)
            .on("enter", function (e) {
                swiper22.slideNext();
            })
            .on("leave", function (e) {
                swiper22.slidePrev();
            })
        })
})