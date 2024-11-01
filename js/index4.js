var Swiper1 = new Swiper('#swiper1', {
    loop: true,
    effect : 'coverflow',
    slidesPerView: 1,
    // centeredSlides: true,
    /* speed: 300,
    autoplay: {
        delay: 3000
    }, */
    // slidesPerView :'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
var Swiper2 = new Swiper('#swiper2', {
    loop: true,
    controller: {
        control: Swiper1, //控制Swiper1
    },
})

Swiper1.controller.control = Swiper2; //Swiper1控制Swiper2，需要在Swiper2初始化后
Swiper2.controller.control = Swiper1; //Swiper2控制Swiper1，需要在Swiper1初始化后

//控制多个
var Swiper3 = new Swiper('#swiper3', {

    controller: {
        control: [Swiper1, Swiper2], //控制Swiper1和Swiper2
    },
})

Swiper3.controller.control = [Swiper1, Swiper2] //控制Swiper1和Swiper2，和上面效果一样