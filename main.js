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