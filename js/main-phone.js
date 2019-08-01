(function (doc, win) {
    	var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if (clientWidth >= 640) {
                        docEl.style.fontSize = '100px';
                    } else {
                        docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                    }
             };

            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//控制轮播图(通过控制下标)
var banner_pic = document.querySelectorAll('.banner a'),
	point_li = document.querySelectorAll('.banner li'),
	index = 0,//下标
	lastindex = 0;//上一个下标
	autoPlay();
function changPic() {
	index %= banner_pic.length;
	//主轮播图
	banner_pic[index].className = 'opacity-pic';
	point_li[index].className = 'bg-write';

	
	banner_pic[lastindex].className = '';
	point_li[lastindex].className = '';//清除上一次样式
	lastindex = index;
}
//自动轮播
function autoPlay() {
	setInterval(function(){
		index ++;
		changPic();
	},3000);
}
//返回顶部
var back = document.querySelector('.back'),
	body = document.querySelector(body);
back.onclick = function() {
	scrollTo(0,0);
}
window.onscroll = function () { 
	if (document.documentElement.scrollTop< 300){
		back.style.display = 'none';	
	}else {
		back.style.display = 'block';
	}
}
