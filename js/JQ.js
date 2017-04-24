
//搜索切换
$(function(){	
	var aA=$('#btn a');	
	var oText=$('.search').find('.text')
	var arr=['美美哒项链','包治百病 新款上市',' '];
	var oA=$('.text_tip');
	var arrA=['<a href="#">新款连衣裙</a><a href="#">四件套</a><a href="#" class="color">潮流T恤</a><a href="#">时尚女鞋</a><a href="#">短裤</a><a href="#">半身裙</a><a href="#">男士外套</a><a href="#">墙纸</a><a href="#">行车记录仪</a><a href="#">新款男鞋</a><a href="#">耳机</a><a href="#" class="more">更多></a>',
	          '<a href="#">针织衫女</a><a href="#" class="color1">外套</a><a href="#">四件套</a><a href="#" class="color1">吸顶灯</a><a href="#">剃须刀</a><a href="#">半身裙</a><a href="#">小白鞋</a><a href="#" class="color1">沙发</a><a href="#">打底裤</a><a href="#" class="color1">双肩包</a><a href="#">休闲裤</a><a href="#" class="color1">洗发水</a><a href="#">面膜</a>',
	          '<a href="#">新款连衣裙</a><a href="#">四件套</a><a href="#" class="color">潮流T恤</a><a href="#">时尚女鞋</a><a href="#">短裤</a><a href="#">半身裙</a><a href="#">男士外套</a><a href="#">墙纸</a><a href="#">行车记录仪</a><a href="#">新款男鞋</a><a href="#">耳机</a><a href="#" class="more">更多></a>',	
	];
	var iNow=0;
	
	oText.val(arr[iNow]);//让数组里的第零个显示
	oA.html(arrA[iNow]);//把数组里的内容写入DIV;
		aA.each(function ( index ){
		     
			$(this).click(function (){//当前点击的按钮变色
				aA.attr('class', '');
				
				if($(this).index()==1){//当前的是第二个的颜色变化
                    $(this).attr('class', 'or');  
					oText.css('borderColor','#C60000');
					$('.search').find('a').css('backgroundColor','#C60000')
				}else{
					$(this).attr('class', 'active'); //不是第二个时，清空上面css样式  
					oText.css('borderColor','');
					$('.search').find('a').css('backgroundColor','')
				}
				
				iNow=index;//当前的索引赋值，对应数组，
				oText.val(arr[iNow]);
				oA.html(arrA[iNow]);
			});
				
		});		
		oText.focus(function(){//获取光标，如果当前的内容是数组的任意一个，就清空
			if($(this).val()==arr[iNow]){
			   $(this).val('');
			}else if($(this).val()==''){
			    oText.val(arr[iNow]);	
			}
		})
		oText.blur(function(){//失去光标，如果输入内容为空，则还原
			if($(this).val()==''){
			   oText.val(arr[iNow]);
			}
		})		
});

//隐藏二维码
$(function(){	
	$('#code #close').click(function(){$('#code').hide()})	
});
//APP二维码
$(function(){	
	$('.app li').hover(function(){
		$(this).find('div').show();
	},function(){
		$(this).find('div').hide();		
	})
})
//标题二维码
$(function(){
//	因为距离，加上stop方法的用途
	$('.list_title').find('em').hover(function(){
		$(this).find('span').stop().animate({opacity:1},300);
	},function(){
		$(this).find('span').stop().animate({opacity:0},300)
	})
})

//body所有class为image的图片鼠标移入透明度变化
$(function(){
   opacity('body .image');
})



//点击切换
//鼠标点击事件:内容切换,首先让所有的内容都隐藏第一个显示
//申明一个变量,每点击一次加1,循环,将变量赋值给内容索引,实现点击时内容变化
//当点击到最后一个内容的时候不再切换,判断iNow的最大值,即使length-1;
$(function(){
	var iNow=0;
	var aGood=$('.good_list');
	aGood.hide().eq(0).show();
	$('.look_other').click(function(){
	
		if(iNow==aGood.length-1){
			iNow=aGood.length-1
		}else{iNow++;}	
		aGood.each(function(index){			
			index=iNow;
			aGood.hide().eq(index).show();
		})			
	})	
})
//鼠标提示遮罩
$(function(){
	$(".fashion .pic_l").hover(function(){
	$(this).find("p").stop().animate({height:"96px"},400);
	},function(){
		$(this).find("p").stop().animate({height:"24px"},400);
	})
})

$(function(){
	borderchange('.hot_product .explain','.mask','select');	
})
//猜你喜欢部分
$(function(){   
    borderchange('.love li','.select','active');  
    opacity('.love li .image');
})
$(function(){borderColor('.cheap .l','active');})
$(function(){borderColor('.b .tip','active');borderColor('.hot_product .other li','active');})
//边框颜色
function borderColor(parent,sClass){
	$(parent).hover(function(){
		$(parent).removeClass(sClass);
		$(this).addClass(sClass)	
	},function(){
		$(this).removeClass(sClass);
	})	
}
//鼠标提示遮罩
function borderchange(parent,aEle,sClass){
	$(parent).hover(function(){
		$(parent).removeClass(sClass);
		$(this).addClass(sClass).find(aEle).show();		
	},function(){
		$(this).removeClass(sClass).find(aEle).hide();
	})	
}
//图片背景变透明
function opacity(parent){
	$(parent).hover(function(){
		$(this).css('opacity',0.8);	
	},function(){
		$(this).css('opacity',1);
	})	
}
//	$(function () {              
//          //绑定滚动条事件  
//            //绑定滚动条事件  
//          $(window).bind("scroll", function () {  
//              var sTop = $(window).scrollTop();  
//              var sTop = parseInt(sTop);  
//              var top=150;
//              //顶部固定---------------------------------
//           
//              if (sTop >= 100)
//              {
//              	 $("#header").slideDown();  
//              }  
//              else 
//              {
//              	 $("#header").slideUp();  
//              } 
////             右侧导航
//
//				  for (i=1; i<6; i++){             //加循环
//				  if(($("#a"+i).offset().top)<=sTop){ //判断滚动条位置
//						 $('.right_menu a').removeClass("c"); //清除c类
//						 $(".link"+i).addClass("c");	//给当前导航加c类
//						 }
////				  console.log($("#a1").offset().top)
//				 }
//          });  
//	              $('.right_menu a').click(function(){
//						$('.right_menu a').removeClass("c");
//						$(this).addClass("c");
//						});
//	})
	
	
	
	$(function(){
		$(window).scroll(function(){
		var sTop = $(document).scrollTop();
//		alert(sTop);
//顶部导航
         if (sTop >= 100)
                {
                	 $("#header").slideDown();  
                }  
                else 
                {
                	 $("#header").slideUp();  
                } 
//右侧导航
		if(sTop>500)
		{
			$(".cdan").fadeIn();
		}else{
			$(".cdan").fadeOut();
		}
		if(sTop>500&&sTop<1300)
		{
			$(".cai1").css("background-image","url(img/TB1.png)");
			$(".cai1 a").css("color","#fff");
		}else{
			$(".cai1").css("background-image","");
			$(".cai1 a").css("color","#ff8800");
		}
		$(".cai1").off("click");
		$(".cai1").on("click",function(){
			$("html body").animate({scrollTop:770},300);
		});
		if(sTop>1300&&sTop<1700)
		{
			$(".cai2").css("background-image","url(img/TB1Q3ZoLVXXXXamXpXXqxFJVFXX-100-100.png_50x50.jpg)");
			$(".cai2 a").css("color","#fff");
		}else{
			$(".cai2").css("background-image","");
			$(".cai2 a").css("color","#FF002A");
		}
		$(".cai2").off("click");
		$(".cai2").on("click",function(){
			$("html body").animate({scrollTop:1650},300);
		});
		if(sTop>1700&&sTop<2200)
		{
			$(".cai3").css("background-image","url(img/TB1.6IwLVXXXXXkXXXXqxFJVFXX-100-100.png_50x50.jpg)");
			$(".cai3 a").css("color","#fff");
		}else{
			$(".cai3").css("background-image","");
			$(".cai3 a").css("color","#957BFF");
		}
		$(".cai3").off("click");
		$(".cai3").on("click",function(){
			$("html body").animate({scrollTop:1970},300);
		});
		if(sTop>2200&&sTop<3000)
		{
			$(".cai4").css("background-image","url(img/TB13XEcLVXXXXXSXVXXqxFJVFXX-100-100.png_50x50.jpg)");
			$(".cai4 a").css("color","#fff");
		}else{
			$(".cai4").css("background-image","");
			$(".cai4 a").css("color","#A8C001");
		}
		$(".cai4").off("click");
		$(".cai4").on("click",function(){
			$("html body").animate({scrollTop:2550},300);
		});
		if(sTop>2800&&sTop<3300)
		{
			$(".cai5").css("background-image","url(img/TB1IOQiLVXXXXXTXVXXXXXXXXXX-100-100.png_50x50.jpg)");
			$(".cai5 a").css("color","#fff");
		}else{
			$(".cai5").css("background-image","");
			$(".cai5 a").css("color","#A2745B");
		}
		$(".cai5").off("click");
		$(".cai5").on("click",function(){
			$("html body").animate({scrollTop:3140},300);
		});
		if(sTop>3300)
		{
			$(".cai6").css("background-image","url(img/TB1u6wkLVXXXXXlXFXXqxFJVFXX-100-100.png_50x50.jpg)");
			$(".cai6 a").css("color","#fff");
		}else{
			$(".cai6").css("background-image","");
			$(".cai6 a").css("color","#FF4200");
		}
		$(".cai6").off("click");
		$(".cai6").on("click",function(){
			$("html body").animate({scrollTop:3550},300);
		});
		if(sTop>1000)
		{
			$(".cai7").css("display","block");
		}else{
			$(".cai7").css("display","none");
		}
		$(".cai7").off("click");
		$(".cai7").on("click",function(){
			$("html body").animate({scrollTop:0},300);
		});
		
		});
	})



