var showOne = require('./showOne.js');
var showList = require('./showAll.js');
$('.btn-l').click(()=>{
	showOne();
})
function showSearch() {
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
			for(let j = 0;j < priNum.length;j++)
			if(taskList[i].pri == priNum[j]) {
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
			
	}
}


//选择优先级
var all = document.getElementsByClassName('all')[0];
var pritag = all.getElementsByClassName('pri-tag');
var priNum = [];

for(let i = 0;i < pritag.length;i++) {
	pritag[i].addEventListener('click',function(){
		if(this.className != 'pri-tag choose'){
			this.className += ' '+'choose';
			priNum.push(this.getAttribute('d-id')) ;
			showSearch();
		}
		else {
			this.className = 'pri-tag';
			var id = this.getAttribute('d-id');
			for(let i = 0;i <= priNum.length; i++) {
				if(priNum[i] == id) {
					priNum.splice(i,1);
				}
			}
			showSearch();
			
		}	
	})
}

if(priNum.length == 0) {
	showList();
}
//选择状态
var statag = all.getElementsByClassName('sta-tag');
for(let i = 0;i < statag.length;i++) {
	statag[i].addEventListener('click',function(){
		if(this.className != 'sta-tag choose'){
			this.className += ' '+'choose';
		}
		else {
			this.className = 'sta-tag';
		}
	})
}

