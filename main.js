// 添加延迟，观察loading动画效果
setTimeout(function(){
    siteWelcome.classList.remove("active")
},1000)
//添加滚动导航栏效果
window.onscroll=function(){
    if(window.scrollY>0){
        topNavBarInner.classList.add("sticky")
    }
    else{
        topNavBarInner.classList.remove("sticky")
    }
}
//添加次级菜单效果
let ul=document.getElementsByClassName("menuTrigger")[0]
let liTags=ul.getElementsByTagName("li")
// let liTags=document.querySelectorAll("");
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(event){
        let li=event.currentTarget
        li.classList.add("active")
    }
    liTags[i].onmouseleave=function(event){
        let li=event.currentTarget
        li.classList.remove("active")
    }
}
//添加跳转效果
let aTags=document.querySelectorAll("ul.menuTrigger>li>a")

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
  }
requestAnimationFrame(animate);

for(let i=0;i<aTags.length;i++){
    aTags[i].onclick=function(event){
        event.preventDefault()
        let a=event.currentTarget
        let href=a.getAttribute("href")//#site
        let element=document.querySelector(href)  
        let top = element.offsetTop

        //添加缓动效果
        let currentTop = window.scrollY
        let targetTop = top - 80
        let s = targetTop - currentTop // 路程
        var coords = { y: currentTop}; // 起始位置
        var t=t>300?300:Math.abs(s) // 时间
        var tween = new TWEEN.Tween(coords) // 起始位置
          .to({ y: targetTop}, t) // 结束位置 和 时间
          .easing(TWEEN.Easing.Cubic.InOut) // 缓动类型
          .onUpdate(function() {
            window.scrollTo(0,coords.y) // 如何更新界面
          })
          .start(); // 开始缓动
    }
}

