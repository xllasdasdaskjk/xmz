$(function () {
    $(window).scroll(function () {
      console.log(this.pageYOffset);
      
      if (this.pageYOffset >= 145) {
          
      }
      if(this.pageYOffset >= 650){
          $(".box .fgx:eq(0) ").addClass('animated bounceIn');
          
        }
        if(this.pageYOffset >= 1000){
          $(".box .jj:eq(0) ").addClass('animated bounceIn');
          
          
        }
        if(this.pageYOffset >= 1400){
          $(".box .fgx:eq(1) ").addClass('animated bounceIn');
      }
      if(this.pageYOffset >= 1800){
        $(".box .jj:eq(1) ").addClass('animated bounceIn');
      }
      if(this.pageYOffset >= 3200){
          
      }
  });
    $("button").click(function () {
      $(".gdxs").toggle();
      $(".btn").toggle();
    });
  });