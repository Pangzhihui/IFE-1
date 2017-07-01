//导航栏下拉菜单的实现
var content = document.getElementById('list');
var lists = content.getElementsByTagName('li');
for(var i = 0;i < lists.length;i++) {
	(function(i) {
	    lists[i].addEventListener('mouseover', function() {
	        lists[i].style.background = 'url(https://github.com/Pangzhihui/test/blob/master/%E7%BF%BB%E8%AF%91/test/arrow.png?raw=true) 99% 50% no-repeat,#303030';
	        lists[i].children[0].style.display = 'block';
	    });
	    lists[i].addEventListener('mouseout', function() {
	        lists[i].style.background = 'url(https://github.com/Pangzhihui/test/blob/master/%E7%BF%BB%E8%AF%91/test/arrow.png?raw=true) 99% 50% no-repeat';
	        lists[i].children[0].style.display = 'none';
	    });
	 })(i)
}
//给表格填背景颜色
var tbody = document.getElementsByTagName('tbody');
for(var i = 0;i<tbody[0].children.length;i++) {
	if(!(i % 2)) {
		tbody[0].children[i].style.background = '#DEDEDE';
	}
}

//左部导航内部滚动
var nav = document.getElementById('nav-v');
var thd = document.getElementById('thd');
var table = document.getElementsByClassName('tb');
var tby = document.getElementsByTagName('tbody');
var navtop=nav.getBoundingClientRect().top;
var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
console.log(screenHeight);
var Height =  screenHeight-navtop -40 ;
var width1 = thd.children[0].offsetWidth;
var width2 = thd.children[1].offsetWidth;
var width3 = thd.children[2].offsetWidth;
var width4 = thd.children[3].offsetWidth;
var width = table[0].offsetWidth;
nav.style.height = Height + 'px';
nav.onmousewheel = function(event) { 
	if (!event) event = window.event; 
	this.scrollTop = this.scrollTop - (event.wheelDelta ? event.wheelDelta : -event.detail * 10); 
	return false;
}
function getScrollTop() {  
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
    return scrollTop;  
}  
window.onscroll = function(){
	var top = getScrollTop();
	var height = top + Height;
	var allHeight = 35 * nav.children.length;
	console.log(height);
	
	if(height < allHeight && height < screenHeight-40) {
		nav.style.height = height + 'px';
//		console.log(document.getElementById('nav-v').style.height);
	}
//  else if(height >= screenHeight - 40){
//		nav.style.height = screenHeight - 40 + 'px';
//	}
	else{
		nav.style.height = allHeight  + 'px';
		nav.style.overflowY = "auto";
//		console.log(document.getElementById('nav-v').style.height);
	}
	if(top>=340){
		nav.className = 'fixnav' + ' ' + 'nav-v';
		thd.className = 'fixnav';
		tby[0].style.width = width + 'px';
		thd.style.width = width + 'px';
		thd.children[0].style.width = width1 + 'px';
		thd.children[1].style.width = width2 +'px';
		thd.children[2].style.width = width3 + 'px';
		thd.children[3].style.width = width4 +'px';
		console.log(width2);
		for(var i = 1;i < tby[0].children.length;i++){
			tby[0].children[i].children[0].style.width = width1  + 'px';
			tby[0].children[i].children[1].style.width = width2  + 'px';
			tby[0].children[i].children[2].style.width = width3  + 'px';
			tby[0].children[i].children[3].style.width = width4  + 'px';
		}
		
	}else{
		nav.className = 'nav-v';
		thd.className = 'thd';
		
	}
	
}
