$(function(){
    $(window).resize(function(){
        if($(window).width()<745){
            $(".header1").css("display","none");
            $(".header2").css("display","block");
            $(".show").addClass("click");
            $(".show>ul").css("display","none");
        }else{
            $(".header1").css("display","block");
            $(".header2").css("display","none");
            $(".show").removeClass("click");
            $(".show>ul").css("display","block");
        }
    })

    $(".show").click(function(){
        var index = $(this).index(".show");
        $($(".hide")[index]).slideToggle();
    })

    var index = 0,timerId;
    var lunbo = function(){
        index++;
        $(".chang").finish();
        if(index == $(".banner").length-1){
            $(".chang").animate({"marginLeft":-100*index+"%"},1000,function(){
                $(this).css("marginLeft",0)
            });
            index = 0;
        }else{
            $(".chang").animate({"marginLeft":-100*index+"%"},1000);
        }
        $(".circle").removeClass("circle_change");
        $(".circle").eq(index).addClass("circle_change");

    }

    timerId = setInterval(lunbo,2000);
    var count;
    $(".circle").hover(function(){
        clearInterval(timerId);
        count = $(this).index(".circle");
        index = count;
        $(".circle").removeClass("circle_change");
        $(this).addClass("circle_change");
        $(".chang").finish();
        $(".chang").animate({"marginLeft":-100*index+"%"},1000);
    },function(){
        clearInterval(timerId);
        timerId = setInterval(lunbo,2000);
    })
    $(".chang").hover(function(){
        clearInterval(timerId);
    },function(){
        clearInterval(timerId);
        timerId = setInterval(lunbo,2000);
    })
    $(".item").click(function(){
        $(".item ul").finish();
        var index = $(this).index(".item");
        $(".item ul").eq(index).slideToggle();
    })







    //--------------拖拽事件-----------------------
    $(".background").click(function(){
        return false;
    })
    /* touch.on(document,"tap",function(){
     console.log(1);
     })*/


    /*var margin;
     touch.on(".chang","dragstart",function(e){
     margin = $(".chang")[0].offsetLeft;
     })
     touch.on(".chang","drag",function(e){
     $(".chang").css("marginLeft",e.x+margin);
     })
     touch.on(".chang","dragend",function(e){
     if(Math.abs(e.x)>300 || e.factor<5 ){
     if(e.direction == "left"){
     index++;
     if(index == $(".banner").length-1){
     $(".chang").animate({"marginLeft":-100*index+"%"},1000,function(){
     $(this).css("marginLeft",0)
     });
     index = 0;
     }else{
     $(".chang").animate({"marginLeft":-100*index+"%"},1000);
     }
     $(".circle").removeClass("circle_change");
     $(".circle").eq(index).addClass("circle_change");
     }else if(e.direction == "right"){
     index--;
     if(index == -1){
     index = 0;
     $(".chang").animate({"marginLeft":-100*index+"%"},1000);
     return;
     }else{
     $(".chang").animate({"marginLeft":-100*index+"%"},1000);
     }
     $(".circle").removeClass("circle_change");
     $(".circle").eq(index).addClass("circle_change");
     }
     }else{
     $(".chang").animate({"marginLeft":-100*index+"%"},1000);
     }
     })*/
    var marginLeft;
    touch.on(".chang","dragstart",function(){
        marginLeft = $(".chang")[0].offsetLeft;
    })
    touch.on(".chang","drag",function(e){
        $(".chang").css("marginLeft",marginLeft+e.x);
    })
    touch.on(".chang","dragend",function(e){
        if(Math.abs(e.x)>300 || e.factor<5){
            if(e.direction == "left"){
                index++;
                if(index == $(".banner").length-1){
                    $(".chang").animate({"marginLeft":-100*index+"%"},1000,function(){
                        $(this).css("marginLeft",0)
                    });
                    index = 0;
                }else{
                    $(".chang").animate({"marginLeft":-100*index+"%"},1000);
                }
                $(".circle").removeClass("circle_change");
                $(".circle").eq(index).addClass("circle_change");
            }else if(e.direction == "right"){
                index--;
                if(index == -1){
                    index = 0;
                    $(".chang").animate({"marginLeft":-100*index+"%"},1000);
                    return;
                }else{
                    $(".chang").animate({"marginLeft":-100*index+"%"},1000);
                }
                $(".circle").removeClass("circle_change");
                $(".circle").eq(index).addClass("circle_change");
            }
        }else{
            $(".chang").animate({marginLeft:-100*index+"%"},1000);
        }
    })
    $(".chang").mousedown(function(e){
        e.preventDefault();
    })


    //---------------旋转事件----------------------
    /* touch.on(".red","touchstart",function(e){
     e.startRotate();
     e.preventDefault();
     })
     touch.on(".red","rotate",function(e){
     console.log(e.rotation);
     $(this).css("transform","rotate("+ e.rotation+"deg)");
     });

     touch.on(document,"hold",function(){
     alert("长按");
     })
     touch.on(document,"doubletap",function(){
     alert("双击");
     })
     touch.on(document,"doubletap",function(){
     alert(2);
     })
     touch.on(document,"tap",function(e){
     console.log(e.type);
     })*/

    /*  touch.on(target, 'swiperight', function(ev){
     this.style.webkitTransform = "translate3d(" + rt + "px,0,0)";
     log("向右滑动.");
     });*/

    /* touch.on(document, 'swipeleft', function(ev){
     //log("向左滑动.");
     this.style.webkitTransform = "translate3d(-" + this.offsetLeft + "px,0,0)";
     });*/





})