$(function () {
    $('#fullpage').fullpage({
        //触屏滚动
        touchSensitivity:10,
        //设置每屏颜色
        // sectionsColor: ['#f00', '#0f0', '#ff0', '#00f', '#f0f'],
        //设置右侧导航圆点
        navigation: true,
        //是否循环滚动，与 loopTop 及 loopBottom 不兼容
        // continuousVertical: true,
        loopBottom:true,
        //项目导航的位置，可选 left 或 right
        navigationPosition: 'left',
        // 给每屏设 置对应的锚点
        anchors: ["page1", "page2", "page3", "page4", "page5"],
        //绑定菜单，设定的相关属性与anchors 的值对应后，菜单可以控制滚动
        menu: "#menu",
        //
        easingcss3: 'cubic-bezier(0.175,0.885,0.320,1.5)',
        /* 回调函数，滚动到某一屏后的回调函数，接收 anchorLink 和 index 
        两个参数anchorLink 是锚链接的名称，index 是序号，从1开始计算 */
        afterLoad: function (link, index) {
            //第一屏
            if (index == 1) {
                $('.img_1').addClass('active1-2');
                $('.h1').addClass('active1-1');
            }
            //第二屏
            if (index == 2) {
                $('.jl').addClass('jlmove');
                $('.left').addClass('leftmove');
                $('.right').addClass('rightmove');
            }
            //第三屏
            if (index == 3){
                $('.lfjng').addClass('lfjngmove');
                $('.xmjy li:eq(0)').addClass('li1');
                $('.xmjy li:eq(1)').addClass('li2');
                $('.xmjy li:eq(2)').addClass('li3');
                $('.xmjy li:eq(3)').addClass('li4');
            }
            //第四屏
            if (index == 4){
                $('.lfjs').addClass('lfjsmove');
                $('.xmjy li').addClass('li1');
            }
            //第五屏
            if (index == 5){
                $('.lx').addClass('lxmove');
            }
        },
        //滚动前的回调函数index 是离开的“页面”的序号，从1开始计算；
        
        onLeave(index,nextIndex,direction){
            //第一屏
            if (index == 1) {
                $('.img_1').removeClass('active1-2');
                $('.h1').removeClass('active1-1');
            }
            //第二屏
            if (index == 2) {
                $('.jl').removeClass('jlmove');
                $('.left').removeClass('leftmove');
                $('.right').removeClass('rightmove');
            }
            //第三屏
            if (index == 3){
                $('.lfjng').removeClass('lfjngmove');
                $('.xmjy li:eq(0)').removeClass('li1');
                $('.xmjy li:eq(1)').removeClass('li2');
                $('.xmjy li:eq(2)').removeClass('li3');
                $('.xmjy li:eq(3)').removeClass('li4');
                $('.xmjy').removeClass('xmjymove');
            }
            //第四屏
            if (index == 4){
                $('.lfjs').removeClass('lfjsmove');
                $('.xmjy li').removeClass('li1');
            }
            //第五屏
            if (index == 5){
                $('.lx').removeClass('lxmove');
            }
        }
    });
});