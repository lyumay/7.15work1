var banner = document.getElementsByClassName("banner")[0];
var slideShow = document.getElementsByClassName("slideShow")[0];
var images = document.querySelectorAll(".banner img");
var bannerBar = document.getElementsByClassName("bannerBar")[0];
var imageWidth = (banner.clientWidth)*images.length;

//创建轮播图小按钮
for(var i = 0 ; i < images.length ; i++){
    images[i].style.width = banner.clientWidth+"px";
    var span = document.createElement("span");
    bannerBar.appendChild(span);
}

slideShow.style.width = imageWidth+"px";
slideShow.style.transition = "all 1s";

var spans = document.querySelectorAll(".bannerBar span");
let index = 0;
spans[index].style.background = "#2691fd";

for(let j = 0 ; j < images.length ; j++){
    spans[j].addEventListener("click",function () {
        index = j;
        for(let i = 0 ; i < images.length ; i++){
            spans[i].style.background = "rgba(0,0,0,.2)";
        }
        slideShow.style.left = (-index*banner.clientWidth)+"px";
        spans[index].style.background = "#2691fd";
    })
}

setInterval(function () {
    if (index == images.length){
        index=0;
    }
    for(let i = 0 ; i < images.length ; i++){
        spans[i].style.background = "rgba(0,0,0,.2)";
    }
    slideShow.style.left = (-index*banner.clientWidth)+"px";
    spans[index].style.background = "#2691fd";
    index++;
},3000)