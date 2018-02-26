/**
 * Created by Administrator on 2018/2/8.
 */
setTimeout(function(){
//    var data = {};
//    data.total = $('.content').length;
//    data.activeIndex = 0;
//    data.nextIndex = data.activeIndex+1;
//    data.next2Index = data.activeIndex+2;
//    var index =  data.activeIndex+1;
//    $('.content').addClass('normal');
//    $('.content').eq(data.activeIndex).removeClass('normal').addClass('active');
//    $('.content').eq(data.nextIndex).removeClass('normal').addClass('next');
//    $('.content').eq(data.next2Index).removeClass('normal').addClass('next2');
//    var pageX,pageY,moveX,moveY;
//    $('.contentBox')[0].addEventListener('touchstart',function(e){
//        var touch = e.touches[0];
//        pageX = touch.pageX;
//        pageY = touch.pageY;
//    },false);
//    $(".contentBox")[0].addEventListener('touchmove', function (e) {
//        e.preventDefault();
//        var touch = e.touches[0];
//        moveX = touch.pageX-pageX;
//        moveY = touch.pageY-pageY;
//        if (moveX<0){
//            if(data.activeIndex<data.total-1){
//                $('.content').eq(data.activeIndex).css({'transform': 'translate('+moveX+'px,'+moveY+'px)'});
//                $('.content').eq(data.nextIndex).removeClass('normal').addClass('trans-next');
//                $('.content').eq(data.next2Index).removeClass('normal').addClass('trans-next2');
//            }
//        }else if(moveX>0){
//            if(data.activeIndex>0){
//                $('.content').eq(data.activeIndex).css({'transform': 'translate('+moveX+'px,'+moveY+'px)'});
//                $('.content').eq(data.nextIndex).removeClass('normal').addClass('trans-next');
//                $('.content').eq(data.next2Index).removeClass('normal').addClass('trans-next2');
//            }
//        }
//
//    }, false);
//    $(".contentBox")[0].addEventListener('touchend', function (e) {
//        if(moveX<0){
//            if(moveX<(-100)){
//                console.log(moveX);
//                console.log('向左滑动了！');
//                if(data.activeIndex<data.total-1){
//                    $('.content').removeClass('prev active next').addClass('normal');
//                    data.activeIndex++;
//                    data.prevIndex = data.activeIndex-1;
//                    data.nextIndex = data.activeIndex+1;
//                    data.next2Index = data.activeIndex+2;
//                   index =  data.activeIndex+1;
//                    $('.content').eq(data.prevIndex).removeClass('normal next2 trans-next trans-next2').addClass('prev');
//                    $('.content').eq(data.activeIndex).removeClass('normal next2 trans-next trans-next2').addClass('active').css({'transform':'translate(0px,0px)'});;
//                    $('.content').eq(data.nextIndex).removeClass('normal next2 trans-next trans-next2').addClass('next');
//                    $('.content').eq(data.next2Index).removeClass('normal  next2 trans-next trans-next2').addClass('next2');
//                }
//
//            }else{
//                $('.content').eq(data.activeIndex).css({'transform': 'translate(0px,0px)'});
//                $('.content').eq(data.nextIndex).removeClass('trans-next');
//                $('.content').eq(data.next2Index).removeClass('trans-next2');
//            }
//        }else{
//            if(moveX>(100)){
////            console.log('向右滑动了！');
//                if(data.activeIndex!=0){
//                    $('.content').removeClass('prev active next').addClass('normal');
//                    data.activeIndex--;
//                    data.prevIndex = data.activeIndex+1;
//                    data.nextIndex = data.activeIndex-1;
//                    data.next2Index = data.activeIndex-2;
//                    index =  data.activeIndex+1;
//                    $('.content').eq(data.prevIndex).removeClass('normal next2 trans-next trans-next2').addClass('prev');
//                    $('.content').eq(data.activeIndex).removeClass('normal next2 trans-next trans-next2').addClass('active').css({'transform':'translate(0px,0px)'});
//                    $('.content').eq(data.nextIndex).removeClass('normal next2 trans-next trans-next2').addClass('next');
//                    $('.content').eq(data.next2Index).removeClass('normal  next2 trans-next trans-next2').addClass('next2');
//                }
//
//            }else{
//                $('.content').eq(data.activeIndex).css({'transform': 'translate(0px,0px)'});
//                $('.content').eq(data.nextIndex).removeClass('trans-next');
//                $('.content').eq(data.next2Index).removeClass('trans-next2');
//            }
//        }
//
//    }, false);
},10);

(function(root,factory,plug){
    root[plug] = factory(root.jQuery,plug);
})(window,function($,plug){
    var _def_ = {
        name:'淋智',
        age:18
    };
    var data = {
        total:$('.content').length,
        activeIndex:0,
        nextIndex:1,
        next2Index:2,
    }
    var _prop_ = {
        _init:function(){
            var _this = this;
            console.log(this);
            var index =  this.activeIndex+1;
            $('.content').addClass('normal');
            $('.content').eq(this.activeIndex).removeClass('normal').addClass('active');
            $('.content').eq(this.nextIndex).removeClass('normal').addClass('next');
            $('.content').eq(this.next2Index).removeClass('normal').addClass('next2');

            var pageX,pageY,moveX,moveY;
            $(this)[0].addEventListener('touchstart',function(e){
                var touch = e.touches[0];
                pageX = touch.pageX;
                pageY = touch.pageY;
            },false);
            $(this)[0].addEventListener('touchmove', function (e) {
                e.preventDefault();
                var touch = e.touches[0];
                moveX = touch.pageX-pageX;
                moveY = touch.pageY-pageY;
                if (moveX<0){
                    if(_this.activeIndex<_this.total-1){
                        $('.content').eq(_this.activeIndex).css({'transform': 'translate('+moveX+'px,'+moveY+'px)'});
                        $('.content').eq(_this.nextIndex).removeClass('normal').addClass('trans-next');
                        $('.content').eq(_this.next2Index).removeClass('normal').addClass('trans-next2');
                    }
                }else if(moveX>0){
                    if(_this.activeIndex>0){
                        $('.content').eq(_this.activeIndex).css({'transform': 'translate('+moveX+'px,'+moveY+'px)'});
                        $('.content').eq(_this.nextIndex).removeClass('normal').addClass('trans-next');
                        $('.content').eq(_this.next2Index).removeClass('normal').addClass('trans-next2');
                    }
                }

            }, false);
            $(this)[0].addEventListener('touchend', function (e) {
                if(moveX<0){
                    if(moveX<(-100)){
                        console.log(moveX);
                        console.log('向左滑动了！');
                        if(_this.activeIndex<_this.total-1){
                            $('.content').removeClass('prev active next').addClass('normal');
                            _this.activeIndex++;
                            _this.prevIndex = _this.activeIndex-1;
                            _this.nextIndex = _this.activeIndex+1;
                            _this.next2Index = _this.activeIndex+2;
                            index =  _this.activeIndex+1;
                            $('.content').eq(_this.prevIndex).removeClass('normal next2 trans-next trans-next2').addClass('prev');
                            $('.content').eq(_this.activeIndex).removeClass('normal next2 trans-next trans-next2').addClass('active').css({'transform':'translate(0px,0px)'});
                            $('.content').eq(_this.nextIndex).removeClass('normal next2 trans-next trans-next2').addClass('next');
                            $('.content').eq(_this.next2Index).removeClass('normal  next2 trans-next trans-next2').addClass('next2');
                        }

                    }else{
                        $('.content').eq(_this.activeIndex).css({'transform': 'translate(0px,0px)'});
                        $('.content').eq(_this.nextIndex).removeClass('trans-next');
                        $('.content').eq(_this.next2Index).removeClass('trans-next2');
                    }
                }else{
                    if(moveX>(100)){
//            console.log('向右滑动了！');
                        if(_this.activeIndex!=0){
                            $('.content').removeClass('prev active next').addClass('normal');
                            _this.activeIndex--;
                            _this.prevIndex = _this.activeIndex+1;
                            _this.nextIndex = _this.activeIndex-1;
                            _this.next2Index = _this.activeIndex-2;
                            index =  _this.activeIndex+1;
                            $('.content').eq(_this.prevIndex).removeClass('normal next2 trans-next trans-next2').addClass('prev');
                            $('.content').eq(_this.activeIndex).removeClass('normal next2 trans-next trans-next2').addClass('active').css({'transform':'translate(0px,0px)'});
                            $('.content').eq(_this.nextIndex).removeClass('normal next2 trans-next trans-next2').addClass('next');
                            $('.content').eq(_this.next2Index).removeClass('normal  next2 trans-next trans-next2').addClass('next2');
                        }

                    }else{
                        $('.content').eq(_this.activeIndex).css({'transform': 'translate(0px,0px)'});
                        $('.content').eq(_this.nextIndex).removeClass('trans-next');
                        $('.content').eq(_this.next2Index).removeClass('trans-next2');
                    }
                }

            }, false);
        }
    };
    $.fn[plug] = function(options){
        $.extend(this,data,options,_prop_);
        this._init();
    };
    return function (options){
        var dom = options.dom;
        $(dom)[plug].call($(dom),options);
    }
},'wipe');