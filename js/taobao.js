window.onload= function(){
	toNav();
    toMarket(); 
    toBanner('big');
    toBanner('small');
    totab('public');
    totab2();
    wordsRoun();  
}

toNav =function(){
	var oTop=document.getElementById('top');
	var oUl=oTop.getElementsByTagName('ul')[0];
	var aLi=getByClass(oUl,'list');
	var aBox=getByClass(oTop,'box');
	var i=0;
	var timer=null;
    var iNow=0;
	for(i=0;i<aLi.length;i++){
		
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			iNow=this.index;
            checked();
		}
		aLi[i].onmouseout=function(){
			
			this.className='';
			aBox[iNow].style.display='none';
		}
		aBox[i].onmouseover=function(){
						
			aBox[iNow].style.display='block';
		}
		aBox[i].onmouseout=function(){
			aBox[iNow].style.display='none';
		}
	}  
	function checked(){
	   for(i=0;i<aLi.length;i++){
				aLi[i].className="";
			    aBox[i].style.display='none';			    
			}
			aLi[iNow].className="active";
			aBox[iNow].style.display='block';
    }
}
//主题市场导航
toMarket=function(){
	var oLeft=document.getElementById('left');
	var aLi=oLeft.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oP= document.getElementById('product_explain');
	var aBox=getByClass(oP,'box');
	var i=0;
	var timer=null;
	for(i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			 iNow=this.index;
			 for(i=0;i<aLi.length;i++){
				aLi[i].className='';
			    aBox[i].style.display='none';	    
			}
			aLi[iNow].className='active';
			aBox[iNow].style.display='block';
			clearInterval(timer);
		}
		aLi[i].onmouseout=function(){		
				var This = this;
				this.className='';
				timer = setTimeout(function(){
					
					aBox[This.index].style.display = 'none';
					
				},30);				
			};
		aBox[i].onmouseover = function(){			
			clearInterval(timer);	
			aLi[iNow].className='active';
		};		
		aBox[i].onmouseout = function(){			
			var This = this;
			aLi[iNow].className='';         
			timer = setTimeout(function(){				
				This.style.display = 'none';				
			},30);			
		};
	}

}
//补充
$(function(){
	$('#product_explain .box').each(function( index ){
		iNow=index;
		$('#product_explain .box').hover(function(){
			$('#left ul li').eq(iNow).find('s').css('background-image','url(img/y.png)');
		},function(){
			$('#left ul li').eq(iNow).find('s').css('background-image','url(img/main1.png)');
		})		
	})
})
//banner图片
toBanner =function(parent){
	var oDd = document.getElementById(parent);
	var oUl= oDd.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	
    var oBtn = getByClass(oDd,'btn')[0];
	var aA =oBtn.getElementsByTagName('a');
	var aSpan = getByClass(oDd,'roun')[0].getElementsByTagName('li');
	
	var oNum=document.getElementById('num');
	var iNow=0;
    var timer=setInterval(auto,4000);

//      oUl.style.width = aLi.length*aLi.offsetWidth;	
		oDd.onmouseover = function(){
		   oBtn.style.display = 'block';	
		}
		oDd.onmouseout = function(){			
			oBtn.style.display = 'none';		
	    }
				    
		for(var i=0;i<aSpan.length;i++){
		    aSpan[i].index=i;
		    aSpan[i].onclick=function(){
		    		
			    iNow=this.index;
			    roun();		    		
		    }		    		    	
		}
		aA[0].onclick = function(){	
			
			iNow--;
			if(iNow<0){
				iNow=aSpan.length-1;
			}
			roun();
		};
		aA[1].onclick = function(){	
			
			iNow++;
			if(iNow>aSpan.length-1){
				iNow=0;
			}
			roun();
		};
        function roun(){
        	for(i=0;i<aSpan.length;i++){
				aSpan[i].className = 'grey';
			}
			aSpan[iNow].className = 'red';
			starMove(oUl,{left:-520*iNow});       	
        }
//      timer=setInterval(function(){},30) 
            

        function auto(){
			iNow++;
			if(iNow>aSpan.length-1){
				iNow=0;
			}
			roun();	
			num();
		} 
		function num(){
			oNum.innerHTML=(iNow+1)+'/6';
		}
		num();  /*网页一刷新就显示*/
}
//选项卡 
totab = function(parent){ 
    var oTab=document.getElementById(parent);
    var aLi=getByClass(oTab, 'title')[0].getElementsByTagName('li');
    var aUl=getByClass(oTab, 'public_list')[0].getElementsByTagName('ul');
    var i=0;
    var This=null;
  
    aUl[0].style.display='block';
    for(i=0; i<aLi.length; i++)
    {
        aLi[i].index=i;
        aLi[i].onmouseover=function()
        {
            This=this.index;
            for(i=0; i<aLi.length; i++)
            {
                aLi[i].className='';
                aUl[i].style.display='none';
            }
            aLi[This].className='active';
            aUl[This].style.display='block';
        };
    }
}
totab2 = function(){ 
    var oTab=document.getElementById('service');
    var aLi=getByClass(oTab, 'li');
    var oBox=document.getElementById('box-group');
    var aBox=getByClass(oBox, 'group');
//  var =getByClass(aUl, 'tab_a');alert('A')
    var timer=null;
    var i=0;
    var This=null;
//alert(aBox.length)
	
	for(i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onmouseover=function(){
			oBox.style.display="block";
			 iNow=this.index;
			 for(i=0; i<aLi.length; i++)
            {
                aLi[i].className='';
//              aBox[i].style.display='none';
            }
            aLi[iNow].className='active';
            aBox[iNow].style.display='block';
            clearInterval(timer);
		}
		aLi[i].onmouseout=function(){
            aLi[iNow].className='';
			timer = setTimeout(function(){				
				oBox.style.display = 'none';				
			},30);
		}
		oBox.onmouseover=function(){
			clearInterval(timer);
			 aLi[iNow].className='active';
		}
		oBox.onmouseout = function(){
			 aLi[iNow].className='';
			timer = setTimeout(function(){				
				oBox.style.display = 'none';				
			},30);			
		};
	}
}


//文字滚动
wordsRoun=function(){
	var oW=document.getElementById('words_list');
	var oUl=oW.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	var i=0;
	var iNow=0;
	var timer=setInterval(next,3000);
	  function next()
		{
			iNow++;//iNow从零自增
			if(iNow==aLi.length){iNow=0;}
			 starMove(oUl,{top:-60*iNow});
		}
	oW.onmouseover=function(){
		clearInterval(timer);
	}
	oW.onmouseout=function(){
		timer=setInterval(next,3000);
	}
}

getStyle = function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
};
getByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var arr = [];
	
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == sClass){
			arr.push(aEle[i]);
		}
	}	
	return arr;
};
// 运动框架
function starMove(obj,json,fn)                         
			{
				clearInterval(obj.timer);				
				obj.timer=setInterval(function (){					
					var bStop = true; //布尔类型，检测运动有没有到达指定条件					
					for(var attr in json)//json循环在定时器里面
					{
						var iCur = 0					
						if(attr=='opacity')//是否是透明设置
						{
							iCur = parseFloat(getStyle(obj,attr))*100
						}
						else
						{
							iCur = parseInt(getStyle(obj,attr));
						}						
						var iSpeed=(json[attr]-iCur)/8;//缓动条件						
						iSpeed=iSpeed>0?Math.ceil(iSpeed):Math.floor(iSpeed);						
						if(iCur!=json[attr])
						{
							bStop=false;
						}						
//						//未到达指定条件，去执行以下语句
						if(attr=='opacity')
							{
								obj.style.filter = "alpha(opacity:"+(iCur+iSpeed)+")";
								obj.style.opacity = (iCur+iSpeed)/100;
							}
							else
							{
								obj.style[attr]=iCur+iSpeed+'px';
							}													
					}
					//到达指定条件，清空定时器,在循环外面
					if(bStop)
						{
							clearInterval(obj.timer);
							
							if(fn)
							{
								fn();
							}
						}						
				}, 10)
			}


