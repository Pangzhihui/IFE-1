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

//轮播的实现
var slider = document.getElementById('sld');
var img = document.getElementById('img');
var list = img.getElementsByTagName('li');
var order = document.getElementById('order');
var orderList = order.getElementsByTagName('li');

var num = 0;
var xh = null;
function play() {
	if(num == list.length) {
		num = 1;
		img.style.left = 0;	
	}
	var left = num * 965;
	img.style.left = -left+'px';
	for(var i = 0;i < list.length-1;i++){
		orderList[i].className = '';
	}
	if(num == list.length-1) {
		orderList[0].className = 'on';
	}else{
		orderList[num].className = 'on';
	}
	
}
function autoPlay() {
	xh = setInterval(function(){
		num++;
		play();
	},2000);
}

autoPlay();

//Tab的实现
var tab = document.getElementsByClassName('tab-lst');
var content = document.getElementsByClassName('tb');
for(var i = 0;i < tab.length;i++){
		tab[i].index = i;
		tab[i].addEventListener('click',function(){
			for(var i = 0;i < tab.length;i++){
				tab[i].className = 'tab-lst';
			}
			this.className += ' '+'active';
			for(var j = 0;j < content.length;j++){
				content[j].className = 'tb';
			}
			content[this.index].className +=' '+'show';
		})
	
}

//下拉框联动
var myselect = document.getElementById("country");
var mypart = document.getElementById("city");
var city = [['无'],['北京','上海','广州'],['洛杉矶','纽约','旧金山'],['伦敦','利物浦','曼彻斯特']];
myselect.onchange = function(){
	mypart.length = 0;
	for(var i = 0;i < city[this.selectedIndex-1].length;i++){
		mypart.options[i] = new Option(city[this.selectedIndex-1][i]);
	}
	
}
