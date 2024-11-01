$(function () {
    $(window).scroll(function () {
        console.log(this.pageYOffset);
        
        if (this.pageYOffset >= 145) {
            
        }
        if(this.pageYOffset >= 400){
            $(".row .time2 h1").addClass('h1move');
        }
        if(this.pageYOffset >= 1000){
            $(".time3 li:eq(0)").addClass('l1');
            $(".time3 li:eq(1)").addClass('l1');
            $(".time3 li:eq(2)").addClass('l1');
            
            
        }
        if(this.pageYOffset >= 1700){
            $(".time4 li:eq(0)").addClass('l1');
            $(".time4 li:eq(1)").addClass('l1');
            $(".time4 li:eq(2)").addClass('l1');
        }
        if(this.pageYOffset >= 2500){
            $(".time5 li:eq(0)").addClass('l1');
            $(".time5 li:eq(1)").addClass('l1');
            $(".time5 li:eq(2)").addClass('l1');

        }
        if(this.pageYOffset >= 3200){
            $(".zj").addClass('animated bounceIn');
        }
    });
})