$(function () {
    $(window).scroll(function () {
        console.log(this.pageYOffset);
        
        if (this.pageYOffset >= 145) {
            
        }
        if(this.pageYOffset >= 700){
            $(".box .top_1 h1").addClass('animated fadeInDown');
            $(".box .top_1 .fgx").addClass('animated fadeIn');
            $(".box .top_1 .b").addClass('animated fadeInUp');
            $(".box .top_1 .b ul").addClass('move');
        }
        if(this.pageYOffset >= 1200){
            $(".rwsj").addClass('animated bounceIn');
            $(".lie_3 .t1").addClass('animated fadeIn');
            $(".lie_3 .t2").addClass('animated fadeIn');
            
        }
        if(this.pageYOffset >= 2100){
            $(".lie_3 .t3").addClass('animated fadeIn');
            $(".lie_3 .t4").addClass('animated fadeIn');
        }
        if(this.pageYOffset >= 2700){
            $(".lie_3 .t5").addClass('animated fadeIn');
            $(".lie_3 .t6").addClass('animated fadeIn');
            $(".lie_3 .t6").addClass('animated fadeIn');
            $(".ckdg").addClass('animated fadeIn');

        }
        if(this.pageYOffset >= 3200){
            $(".box .top_3").addClass('animated bounceIn');
        }
    });
})