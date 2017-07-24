var showOne = require('./showOne.js');
var showList = require('./showAll.js');
$('.btn-l').click(()=>{
	showOne();
})
function bind() {

		$('.list .task').each(function(){
			$(this).hammer().bind("swipeleft",function(){
				$(this).children().eq(2).animate({right:'0px'});
			})
			$(this).hammer().bind("swiperight",function(){
				$(this).children().eq(3).animate({left:'0px'});
			})
			$(this).hammer().bind("tap",function(){
				$(this).children().eq(3).animate({left:'-300px'});
				$(this).children().eq(2).animate({right:'-300px'});
			})
		});
		
		
	}
function showTask(id,font,color,content) {
	
	$('.list').append (`
		<div class="task" id=${id}>
	    	<span class="glyphicon ${font} ${color}"></span>
	    	<div class="content">
	    		${content}
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
	bind();
}
function showSearch() {
	$('.list').empty();
	var taskList = JSON.parse(localStorage.getItem('taskList'));
	if(localStorage.flag1 == undefined) {
		$('.list').append ('目前没有任务');
	}
	else if(priNum.length == 0 && staNum.length == 0) {
		showList();
	}
	else{
		for (let i = 0;i < taskList.length;i++) {
			var pri = taskList[i].pri;
			var sta = taskList[i].sta;
//			console.log(pri,sta);
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
			if(staNum.length == 0) {
				for(let j = 0;j < priNum.length;j++) {
					if(taskList[i].pri == priNum[j]) {
						showTask(taskList[i],font,color,taskList[i].content);
					}

				}
			}
			else if(priNum.length == 0) {
				for(let j = 0;j < staNum.length;j++) {
					if(taskList[i].sta == staNum[j]) {
						showTask(taskList[i],font,color,taskList[i].content);
					}

				}
			}
			else {
				for(let k = 0;k < priNum.length;k++) {
					for(let j = 0;j < staNum.length;j++) {
						if(taskList[i].sta == staNum[j] && taskList[i].pri == priNum[k]) {
							showTask(taskList[i],font,color,taskList[i].content);
						}
					}
				}
			}
			
		}		
	}
}


//选择优先级
var all = document.getElementsByClassName('all')[0];
var pritag = all.getElementsByClassName('pri-tag');
var priNum = [];
var staNum = [];

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


//选择状态
var statag = all.getElementsByClassName('sta-tag');
for(let i = 0;i < statag.length;i++) {
	statag[i].addEventListener('click',function(){
		if(this.className != 'sta-tag choose'){
			this.className += ' '+'choose';
			staNum.push(this.getAttribute('d-id')) ;
			showSearch();
		}
		else {
			this.className = 'sta-tag';
			var id = this.getAttribute('d-id');
			for(let i = 0;i <= staNum.length; i++) {
				if(staNum[i] == id) {
					staNum.splice(i,1);
				}
			}
			showSearch();
		}
	})
}

