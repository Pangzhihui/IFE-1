//导航栏下拉菜单的实现,事件代理机制
var content = document.getElementById('list');

content.addEventListener('mouseover', function(e) {
	if(e.target&&e.target.nodeName.toUpperCase()=='LI'){
    	e.target.style.background = 'url(https://github.com/Pangzhihui/test/blob/master/%E7%BF%BB%E8%AF%91/test/arrow.png?raw=true) 99% 50% no-repeat,#303030';
    	e.target.children[0].style.display = 'block';
    }
});
content.addEventListener('mouseout', function(e) {
	if(e.target&&e.target.nodeName.toUpperCase()=='LI'){
    	e.target.style.background = 'url(https://github.com/Pangzhihui/test/blob/master/%E7%BF%BB%E8%AF%91/test/arrow.png?raw=true) 99% 50% no-repeat';
    	e.target.children[0].style.display = 'none';
    }
});
	 

//生成表格
var table = document.getElementsByClassName('tb');
var width = table[0].offsetWidth;
function createTable(){
	var txt = ''
		+ '<tr id="thd" class="thd">'
		+     '<th>Name</th>'
		+     '<th>Content</th>'
		+     '<th>Value</th>'
		+     '<th>Operate</th>'
		+ '</tr>';
	for(var i = 0;i < datat.length;i++) {
		txt += ''
			+ '<tr>'
			+     '<td>'+datat[i].name+'</td>'
			+     '<td>'+datat[i].content+'</td>'
			+     '<td>'+datat[i].value+'</td>'
			+     '<td>'
			+         '<button class="btn-edit" onclick="edit('+datat[i].id+')">编辑</button>'
			+         '<button class="btn-del" onclick="del('+datat[i].id+')">删除</button>'
			+     '</td>'
			+ '</tr>';
	}
	table[0].innerHTML = txt;
}
createTable();

//左部导航内部滚动以及随着浏览器滚动条的滚动高度自适应
var nav = document.getElementById('nav-v');
var thd = document.getElementById('thd');
var tby = document.getElementsByTagName('tbody');

var width1 = thd.children[0].offsetWidth;
var width2 = thd.children[1].offsetWidth;
var width3 = thd.children[2].offsetWidth;
var width4 = thd.children[3].offsetWidth;
nav.style.height = (window.innerHeight - nav.getBoundingClientRect().top) + 'px';

//左部导航二级菜单

function insertAfter(new_item,item) {
	item.parentNode.insertBefore(new_item,item.nextElementSibling);
}

for(var i = 0;i < 13;i++) {
	var div = document.createElement('div');
	div.className = 'subnav';
	var length = datav[i].length;
	var txt = '';
	for (var j = 0;j < length;j++){
		txt += '<span>'+datav[i][j]+'</span>';
	}
	div.innerHTML = txt;
	insertAfter(div,nav.children[i*2]);
}

nav.addEventListener('click',function(e){
	if(e.target&&e.target.nodeName.toUpperCase()=='P'){
		var show = e.target.nextElementSibling.style.display;
		if(show != null && show != 'block')	{
			e.target.nextElementSibling.style.display = 'block';
		}
		else{
			e.target.nextElementSibling.style.display = 'none';
		}
	}
})

nav.onmousewheel = function(event) { 
	if (!event) event = window.event; 
	this.scrollTop = this.scrollTop - (event.wheelDelta ? event.wheelDelta : -event.detail * 10); 
	return false;
}

function getScrollTop() {  
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;  
    return scrollTop;  
} 
function scroll(){
	var navtop=nav.getBoundingClientRect().top;
	var screenHeight = document.documentElement.clientHeight || document.body.clientHeight;
	var Height =  screenHeight-navtop ;
	window.onscroll = function() {
		var top = getScrollTop();
		var height = top + Height;
		var allHeight = 55 * nav.children.length;
		if(height < allHeight && height < screenHeight) {
			nav.style.height = height + 'px';
		}
	    else if(height >= screenHeight) {
			nav.style.height = screenHeight + 'px';
		}
		else{
			nav.style.height = allHeight  + 'px';
			nav.style.overflowY = "auto";
		}
		if(top>=340) {
			nav.className = 'fixnav' + ' ' + 'nav-v';
			thd.className = 'fixnav';
			tby[0].style.width = width + 'px';
			thd.style.width = width + 'px';
			thd.children[0].style.width = width1 + 'px';
			thd.children[1].style.width = width2 +'px';
			thd.children[2].style.width = width3 + 'px';
			thd.children[3].style.width = width4 +'px';
			for(var i = 1;i < tby[0].children.length;i++) {
				tby[0].children[i].children[0].style.width = width1  + 'px';
				tby[0].children[i].children[1].style.width = width2  + 'px';
				tby[0].children[i].children[2].style.width = width3  + 'px';
				tby[0].children[i].children[3].style.width = width4  + 'px';
			}
			
		}
		else {
			nav.className = 'nav-v';
			thd.className = 'thd';	
		}
	
    }
}
scroll();
window.addEventListener('resize', function() {
	nav.style.height = (window.innerHeight - nav.getBoundingClientRect().top) + 'px';
	scroll();
});

var editBox = document.getElementsByClassName("edit")[0];
var cover = document.getElementsByClassName("cover")[0];	
//点击编辑按钮弹出浮层和弹窗
function edit(id){
    editBox.style.display = "block";
    cover.style.display = "block";
    editBox.style.left = (document.body.clientWidth - editBox.offsetWidth) / 2 + "px";
    editBox.style.top = (screenHeight - editBox.offsetHeight) / 2 + "px";
    document.body.style.overflow = "hidden";
    document.getElementById("id").value = datat[id].id;
    document.getElementById("name").value = datat[id].name;
    document.getElementById("content").value = datat[id].content;
    document.getElementById("value").value = datat[id].value;
    
}
//浮层及编辑弹框隐藏
function hideEidt(el) {
	el.style.display = "none";
    cover.style.display = "none";
    document.body.style.overflow = "auto";
}
//点击确定按钮
var sureBtn = document.getElementById('edit-sure');
sureBtn.onclick = function() {
	var id = document.getElementById("id").value;
    datat[id].name = document.getElementById("name").value;
    datat[id].content = document.getElementById("content").value;
    datat[id].value = document.getElementById("value").value;
    console.log(datat[id].value);
    createTable();
    hideEidt(editBox);
}
//点击取消按钮
var noBtn = document.getElementById('edit-no');
noBtn.onclick = function() {
	hideEidt(editBox);
}

var delBox = document.getElementsByClassName("delete")[0];
//点击删除按钮弹出浮层和弹窗
function del(id){
    delBox.style.display = "block";
    cover.style.display = "block";
    delBox.style.left = (document.body.clientWidth - delBox.offsetWidth) / 2 + "px";
    delBox.style.top = (screenHeight - delBox.offsetHeight) / 2 + "px";
    document.body.style.overflow = "hidden";
    document.getElementById("del-id").value = datat[id].id;
    
}
//点击确定按钮
var sureBtn2 = document.getElementById('del-sure');
sureBtn2.onclick = function() {
	var id = document.getElementById("del-id").value;
    datat.splice(id,1);
    createTable();
    hideEidt(delBox);
}
var noBtn2 = document.getElementById('del-no');
noBtn2.onclick = function() {
	hideEidt(delBox);
}

