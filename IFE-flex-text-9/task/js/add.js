var showList = require('./showAll.js');
var showOne = require('./showOne.js');
$('#all-c').click(()=>{
	showOne();
})
//点击Done按钮
$('#all-d').click(()=>{
	var pri = $('.pri-tag.choose').attr('id');
	var sta = $('.sta-tag.choose').attr('id');
	var content = $('#content').val();
	
	if(localStorage.flag1 == undefined) {
		localStorage.flag1 = 1;
		var taskList = [];
 		localStorage.setItem('taskList',JSON.stringify(taskList));
	}else{
		localStorage.flag1 = parseInt(localStorage.flag1) + 1;	
	}
	
	var list = {};
	list.id = localStorage.flag1;
	list.pri = pri;
	list.sta = sta;
	list.content = content;
	
	var taskList = JSON.parse(localStorage.getItem('taskList'));
	taskList.push(list);
	localStorage.setItem('taskList',JSON.stringify(taskList));
	
	showList();
})
//选择优先级
var add = document.getElementsByClassName('add')[0];
var pritag = add.getElementsByClassName('pri-tag');
for(let i = 0;i < pritag.length;i++) {
	pritag[i].addEventListener('click',function(){
			for(var i = 0;i < pritag.length;i++){
				pritag[i].className = 'pri-tag';
			}
			this.className += ' '+'choose';

		})
}
//选择状态
var add = document.getElementsByClassName('add')[0];
var statag = add.getElementsByClassName('sta-tag');
for(let i = 0;i < statag.length;i++) {
	statag[i].addEventListener('click',function(){
			for(var i = 0;i < statag.length;i++){
				statag[i].className = 'sta-tag';
			}
			this.className += ' '+'choose';
		})
}















