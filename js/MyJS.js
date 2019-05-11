"use strict"

// 实现点 header 返回主页
let header = document.getElementById('welcome');
header.onclick = function() {
    window.location.href="index.html"; 
}

// 实现座右铭点击切换。
let moto = document.getElementById('moto-words');
let index = 0;
const motos = [
    'Later equals never.',
    'Stay hungry. Stay foolish.',
    'Action speak louder than words.',
    'Never say never',
    'Keep calm and carry on'
];
moto.onclick = function() {
    index = (index + 1) % 5;
    moto.firstElementChild.innerHTML = motos[index];
}

// 实现 tag 点击展开
let tags = document.getElementsByClassName("tag");
for (let i = 0; i < tags.length; i++) {
    tags[i].onclick = function(){

        // 隐藏其他 panel
        for (let j = 0; j < tags.length; j++) {
            if (j == i) continue;
            tags[j].classList.remove("active");
            tags[j].nextElementSibling.style.display = "none";
        }

        // toggle 改变 "active" 属性：
        // 如果存在就删掉，不存在就添加并且设置为true
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    }
}