//点击关闭广告
var top_advertisement = document.querySelector('.top-advertisement'),
    close_i =  document.querySelector('.top-advertisement i');
close_i.onclick = function() {
	top_advertisement.style.display = 'none';
}
//控制轮播图(通过控制下标)
var banner_pic = document.querySelectorAll('.middle-banner .banner a'),
	point_li = document.querySelectorAll('.middle-banner .banner-nav li'),
	//小轮播图
	sbanner_pic = document.querySelectorAll('.middle-smallbanner a'),
	spoint_li = document.querySelectorAll('.middle-smallbanner li'),
	index = 0,//下标
	lastindex = 0;//上一个下标
	autoPlay();
	left_click = document.querySelector('.middle-banner .banner-nav .banner-leftbutton');
	right_click = document.querySelector('.middle-banner .banner-nav .banner-rightbutton');
function changPic() {
	index %= banner_pic.length;
	//主轮播图
	banner_pic[index].className = 'opacity-pic';
	point_li[index].className = 'bg-write';
	//小轮播图
	sbanner_pic[index].className = 'opacity-pic';
	spoint_li[index].className = 'bg-write';
	
	banner_pic[lastindex].className = '';
	point_li[lastindex].className = '';//清除上一次样式
	sbanner_pic[lastindex].className = '';
	spoint_li[lastindex].className = '';//清除上一次样式
	lastindex = index;
}
//自动轮播
function autoPlay() {
	setInterval(function(){
		index ++;
		changPic();
	},4000);
}
//左右点击控制图片
right_click.onclick = function() {
	index ++;
	changPic();
}
left_click.onclick = function() {
	index--;
	if (index < 0){
		index = index%banner_pic.length+banner_pic.length;
	}
	changPic();
}

//公告部分  自动向上位移
var notice_content = document.querySelector('.middle-login-right .notice-content'),
	notice_div = document.querySelectorAll('.middle-login-right .notice-content div'),
	i = 0,
	notice_div_height = notice_div[i].clientHeight;
	autoTranstop();
function autoTranstop() {
	setInterval(function(){
		i++;
		transTop();
	},3000);
}
function transTop() {
	i %= notice_div.length;
	trans_height = -i*notice_div_height + 'px';
	notice_content.style.cssText = 'transform: translateY('+trans_height+')';
}

//精品推荐
var boutique_li = document.querySelectorAll('.compe-products-list li'),
	boutique_ul = document.querySelector('.compe-products-list ul'),
	left_arrow = document.querySelector('.compe-products-leftarrow'),
	right_arrow = document.querySelector('.compe-products-rightarrow'),
	move_width = boutique_ul.clientWidth/2;

right_arrow.onclick = function() {
	right_move_width = -move_width + 'px';
	boutique_ul.style.cssText = 'transform: translateX('+right_move_width+')';
	left_arrow.style.display = 'block';
	right_arrow.style.display = 'none';
}
left_arrow.onclick = function() {
	boutique_ul.style.cssText = 'transform: translateX(0)';
	left_arrow.style.display = 'none';
	right_arrow.style.display = 'block';
}

//右侧固定导航隐藏部分
var event_float = document.querySelector('.event-float'),
	back = document.querySelector('.right-fexd .back');
back.onclick = function() {
	scrollTo(0,0);
}
window.onscroll = function () { 
	if (document.documentElement.scrollTop < 1000){
		back.style.display = 'none';	
	}else {
		back.style.display = 'block';
	}
	if (document.documentElement.scrollTop < 2100){
		event_float.style.transform = "translate(0)";	
	}else {
		event_float.style.transform = "translate(-100px)";
	}
}

