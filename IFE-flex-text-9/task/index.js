require('./css/app.less');
require('./css/add.less');
require('./css/all.less');
require('./js/add.js');
require('./js/all.js');
var $ = require('jquery');
var showList = require('./js/showAll.js');
var showOne = require('./js/showOne.js');

showOne();
$('#one-a').click(()=>{
	$('.onething').css('display','none');
	$('.hd-one').css('display','none');
	$('.all').css('display','none');
	$('.add').css('display','block');
	$('.hd-add').css('display','block');
	$('btn-add').css('display','block');
	$('.btn-edit').css('display','none');
	$('.btn-l').css('background','#D9D9D9');
	$('.btn-r').css('background','#D9D9D9');
	var add = document.getElementsByClassName('add')[0];
	var pritag = add.getElementsByClassName('pri-tag');
	for(var i = 0;i < pritag.length;i++){
		pritag[i].className = 'pri-tag';
	}
	var add = document.getElementsByClassName('add')[0];
	var statag = add.getElementsByClassName('sta-tag');
	for(var i = 0;i < statag.length;i++){
		statag[i].className = 'sta-tag';
	}
	document.getElementById('content').value = '';
//	localStorage.clear();
})
$('.btn-r').click(()=>{
	
	showList();
})


