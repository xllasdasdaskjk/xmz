$(function () {
  $(window).scroll(function () {
    console.log(this.pageYOffset);
    
    if (this.pageYOffset >= 145) {
        
    }
    if(this.pageYOffset >= 600){
        $(".box ul:eq(1) ").addClass('animated rotateInDownRight');
      }
      if(this.pageYOffset >= 1400){
        $(".box ul:eq(2) ").addClass('animated rotateInDownLeft');
        
        
      }
      if(this.pageYOffset >= 1900){
      $(".box ul:eq(3) ").addClass('animated rotateInDownRight');
    }
    if(this.pageYOffset >= 2500){
        
    }
    if(this.pageYOffset >= 3200){
        
    }
});
  $("button").click(function () {
    $(".gdxs").toggle();
    $(".btn").toggle();
  });
});