//轮播的实现
var slider = document.getElementById('sld');
var img = document.getElementById('img');
var list = img.getElementsByTagName('li');
var order = document.getElementById('order');
var orderList = order.getElementsByTagName('li');

var num = 0;
var xh = null;
function play(num) {
	for(var i = 0;i < list.length;i++){
		list[i].className = '';
		orderList[i].className = '';
	}
	list[num].className = 'on';
	orderList[num].className = 'on';
}
function autoPlay() {
	xh = setInterval(function(){
		num++;
		if(num >= list.length) {
			num = 0;
		}
		play(num);
	},2000);
}

autoPlay();