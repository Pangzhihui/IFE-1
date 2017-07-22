module.exports = function () {
	
	
	function bind() {

		$('.list .task').each(function(){
			$(this).hammer().bind("swipeleft",function(){
				$(this).children().eq(2).animate({right:'0px'});
			})
			$(this).hammer().bind("swiperight",function(){
				$(this).children().eq(3).animate({left:'0px'});
			})
		});
		
	}
	
	function showTask() {
		$('.onething').css('display','none');
		$('.all').css('display','block');
		$('.add').css('display','none');
		$('.hd-one').css('display','block');
		$('.hd-add').css('display','none');
		$('.btn-l').css('background','#D9D9D9');
		$('.btn-r').css('background','#ADADAD');
		var all = document.getElementsByClassName('all')[0];
		var pritag = all.getElementsByClassName('pri-tag');
		for(let i = 0;i < pritag.length;i++) {
			pritag[i].className = 'pri-tag';	
		}
		//选择状态
		var statag = all.getElementsByClassName('sta-tag');
		for(let i = 0;i < statag.length;i++) {
			statag[i].className = 'sta-tag';
		}
		$('.list').empty();
		var taskList = JSON.parse(localStorage.getItem('taskList'));
		if(localStorage.flag1 == undefined) {
			$('.list').append ('目前没有任务');
		}else{
			for (let i = 0;i < taskList.length;i++) {
				var pri = taskList[i].pri;
				var sta = taskList[i].sta;
				console.log(pri,sta);
				var color = '';
				var font ='';
				switch(pri) {
					case '高优':
						color = 'red';
						break;
					case '中优':
						color = 'yellow';
						break;
					case '低优':
						color = 'green';
						break;
				}
				switch(sta) {
					case '进行中':
						font = 'glyphicon-play';
						break;
					case '待办':
						font = 'glyphicon-pause';
						break;
					case '已完成':
						font = 'glyphicon-stop';
						break;
				}
				console.log(font,color);
				
				$('.list').append (`
					<div class="task" id=${taskList[i].id}>
				    	<span class="glyphicon ${font} ${color}"></span>
				    	<div class="content">
				    		${taskList[i].content}
				    	</div>
				    	<div class="right">
					    	<div class="op-edit">编辑</div>
					    	<div class="op-del">删除</div>
					    </div>
					    <div class="left">
					    	<div class="op-1">已完成</div>
					    	<div class="op-2">待办</div>
					    	<div class="op-3">进行中</div>
					    </div>
					</div>
				`)
				
			}
		}
		bind();
	}
	showTask();
	
	
	
	var del = document.getElementsByClassName('op-del');
	for(let i = 0; i < del.length;i++) {
		del[i].addEventListener('click',function(){
			
			var id = this.parentNode.parentNode.getAttribute('id');
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			
			for(let j = 0;j < taskList.length;j++) {
				if(taskList[j].id == id) {
					let index = j;
					taskList.splice(index,1);
					localStorage.setItem('taskList',JSON.stringify(taskList));
				}
			}
			showTask();
		})
	}
	
	var edit = document.getElementsByClassName('op-edit');
	var taskId = '';
	for(let i = 0; i < edit.length;i++) {
		edit[i].addEventListener('click',function(){
			
			var taskId = this.parentNode.parentNode.getAttribute('id');
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			var pri = '';
			var sta = '';
			var content = '';
			for(let j = 0;j < taskList.length;j++) {
				if(taskList[j].id == taskId) {
					pri = taskList[j].pri;
					sta = taskList[j].sta;
					content = taskList[j].content;
				}
			}
			$('.onething').css('display','none');
			$('.hd-one').css('display','none');
			$('.all').css('display','none');
			$('.add').css('display','block');
			$('.hd-add').css('display','block');
			$('btn-add').css('display','none');
			$('.btn-edit').css('display','block');
			$('.btn-l').css('background','#D9D9D9');
			$('.btn-r').css('background','#D9D9D9');
			var add = document.getElementsByClassName('add')[0];
			var pritag = add.getElementsByClassName('pri-tag');
			for(var i = 0;i < pritag.length;i++){
				pritag[i].className = 'pri-tag';
				var id = pritag[i].getAttribute('id');
				if(id == pri) {
					pritag[i].className += ' '+'choose';
				}
			}
			var add = document.getElementsByClassName('add')[0];
			var statag = add.getElementsByClassName('sta-tag');
			for(var i = 0;i < statag.length;i++){
				statag[i].className = 'sta-tag';
				var id = statag[i].getAttribute('id');
				if(id == sta) {
					statag[i].className += ' '+'choose';
				}
			}
			document.getElementById('content').value = content;
			
			//点击Done按钮
			$('#all-e').click(()=>{
				var pri = $('.pri-tag.choose').attr('id');
				var sta = $('.sta-tag.choose').attr('id');
				var content = $('#content').val();
				var taskList = JSON.parse(localStorage.getItem('taskList'));
				for(let j = 0;j < taskList.length;j++) {
					if(taskList[j].id == taskId) {
						taskList[j].pri = pri;
						taskList[j].sta = sta;
						taskList[j].content = content;
						localStorage.setItem('taskList',JSON.stringify(taskList));
					}
				}
				showTask();
		
			})
		})
	}
	
	var op1 = document.getElementsByClassName('op-1');
	for(let i = 0; i < op1.length;i++) {
		op1[i].addEventListener('click',function(){
		
			var id = op1[i].parentNode.parentNode.getAttribute('id');
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			
			for(let j = 0;j < taskList.length;j++) {
				if(taskList[j].id == id) {
					taskList[j].sta = '已完成';
					localStorage.setItem('taskList',JSON.stringify(taskList));
				}
			}
			showTask();
		})
	}
	var op2 = document.getElementsByClassName('op-2');
	for(let i = 0; i < op2.length;i++) {
		op2[i].addEventListener('click',function(){
			
			var id = op2[i].parentNode.parentNode.getAttribute('id');
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			
			for(let j = 0;j < taskList.length;j++) {
				if(taskList[j].id == id) {
					taskList[j].sta = '待办';
					localStorage.setItem('taskList',JSON.stringify(taskList));
				}
			}
			showTask();
		})
	}
	var op3 = document.getElementsByClassName('op-3');
	for(let i = 0; i < op3.length;i++) {
		op3[i].addEventListener('click',function(){
			
			var id = op3[i].parentNode.parentNode.getAttribute('id');
			var taskList = JSON.parse(localStorage.getItem('taskList'));
			
			for(let j = 0;j < taskList.length;j++) {
				if(taskList[j].id == id) {
					taskList[j].sta = '进行中';
					localStorage.setItem('taskList',JSON.stringify(taskList));
				}
			}
			showTask();
		})
	}
		
	
	
}

