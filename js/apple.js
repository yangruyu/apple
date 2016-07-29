$(function(){
    $('.header .header-inner .nav .shousuo').on('click',function(e){
          e.preventDefault();
          $('.header .header-inner .nav li').not('.logo , .shu').addClass('xiaoshi');
          $('.header .header-inner .nav .shu').addClass('quxiao');
          $('.header .header-inner .ssk').addClass('huilai');
          $('.text').addClass('hui');
          $('body').addClass('dady');
          $('.changlian').toggleClass('show');
    })
    $('.header .header-inner .nav .quxiao').on('click',function(e){
        e.preventDefault();
        $('.header .header-inner .nav li').not('.logo , .shu').removeClass('xiaoshi');
        $('.header .header-inner .nav .shu').removeClass('quxiao');
        $('.header .header-inner .ssk').css('opacity',0);
        $('.text').css('opacity',0);
    })

    $('.xian').on('click',function(e){
        e.preventDefault();
        $('.xian .shang').toggleClass('xiang');
        $('.xian .xia').toggleClass('jiao');
        $('.shu').toggleClass('gong');
        $('.chedao').toggleClass('diaoxia');
        $('.header').toggleClass('hei');
        $('body').toggleClass('dady');
    })

    //banner
    var as=$('.banner-inner li');
    var lis=$('.btn li');
    var width=3000;
    var t=setInterval(moveL,5000);
    var num=0;
    var next=0;
    var kaiguan=true;
    for(var i=0;i<as.length;i++){
        if(i==0){
            continue;
        }
        as.eq(i).offset({left:width});
        lis.eq(i).removeClass('btn-border');

    }

    function moveL(){
        next++;
        if(next>=4){
            next=0;
        }
        as.eq(next).offset({left:width});
        as.eq(num).animate({left:-width},function(){
            kaiguan=true;
        });
        as.eq(next).animate({left:0});
        num=next;
        for(var j=0;j<lis.length;j++){
            lis.eq(j).removeClass('btn-border');
        }
        lis.eq(num).addClass('btn-border')
    }
    function moveR(){
        next--;
        if(next<0){
            next=3;
        }
        as.eq(next).offset({left:-width});
        as.eq(num).animate({left:width},function(){
            kaiguan=true;
        });
        as.eq(next).animate({left:0});
        num=next;
        for(var j=0;j<lis.length;j++){
            lis.eq(j).removeClass('btn-border');
        }
        lis.eq(num).addClass('btn-border')

    }
    $('.center-right').on('click',function(){
        if(kaiguan){
            moveL();
            kaiguan=false;
        }else {
            return;
        }

    })
    $('.center-left').on('click',function(){
        if(kaiguan){
            moveR();
            kaiguan=false
        }else {
            return
        }

    })
    $('.banner').on("mouseover",function(){
        clearInterval(t);
        $('.center-left').css('display','block');
        $('.center-right').css('display','block')
    })
    $('.banner').on("mouseout",function(){
        t=setInterval(moveL,5000);
        $('.center-left').css('display','none');
        $('.center-right').css('display','none')
    })
    lis.on('click',function(){
        if(kaiguan){
            var nn=$(this).index();

            for(i=0;i<lis.length;i++){
                lis.eq(i).removeClass('btn-border');
                as.eq(i).css({left:width});
            }
            $(this).addClass('btn-border');
            as.eq(nn).animate({left:0},function(){
                kaiguan=true;
            });
            kaiguan=false;
            num=nn;
        }else {
            return;
        }
    })

$('.cedao ul').on('click',function(){
        $(this).find('li').slideToggle();
       $(this).find('.shi').toggleClass('cha');
    })

})