# 不素盒尚
## 此项目为外卖系统，包含用户端、商户端
#### 实现功能 :

#### 适用于移动端各分辨率下达到适配效果
***
#### 设置`<meta>`标签的`viewport`属性
`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,user-scalable=no">`        
该meta标签的作用是让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。
***
### 运用**Koala**编译器实时编译**Less** 
>Less 是一门 CSS 预处理语言，它扩展了 CSS 语言，增加了变量、Mixin、函数等特性，使 CSS 更易维护和扩展。      

例子：
```less
@r:100rem;
@color:#333;
.background(@col,@col,@col,@opacity) {
   background:rgba(@col,@col,@col,@opacity);
}
.borderRadius(@radius:50%) {
   -webkit-border-radius:@radius;
      -moz-border-radius:@radius;
        -o-border-radius:@radius;
           border-radius:@radius;
}
.menuDetails{
  width:200/@r;height:300/@r;.background(94,94,94,.8);color:@color;
  .box{.borderRadius();}
}  
```
输出：
```css
.menuDetails{
   width:2rem;
   height:3rem;
   background:rgba(94,94,94,.8);
   color:#333;
}
.menuDetails .box{
   -webkit-border-radius:50%;
      -moz-border-radius:50%;
        -o-border-radius:50%;
           border-radius:50%;
}
```
### js部分
JS监听当然窗口的变化，一旦有变化就需要重新设置根字体的值

```javascript
   //当设备的方向变化（设备横向持或纵向持）此事件被触发。绑定此事件时，注意现在当浏览器不支持orientationChange事件的时候我们绑定了resize 事件。       
(function (doc, win) {
       var docEl = doc.documentElement,
           resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
           recalc = function () {
               var clientWidth = docEl.clientWidth;
               if (!clientWidth) return;
               if(clientWidth>=640){
                   docEl.style.fontSize = '100px';
               }else{
                   docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';//此时100px =1rem
               }
           };

       if (!doc.addEventListener) return;
       win.addEventListener(resizeEvt, recalc, false);
       doc.addEventListener('DOMContentLoaded', recalc, false);
   })(document, window);
   ```
