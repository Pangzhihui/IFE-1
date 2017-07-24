module.exports = function () {
	$('.onething').css('display','block');
	$('.all').css('display','none');
	$('.add').css('display','none');
	$('.hd-one').css('display','block');
	$('.hd-add').css('display','none');
	$('.btn-l').css('background','#ADADAD');
	$('.btn-r').css('background','#D9D9D9');
	$('.list1').empty();
	var taskList = JSON.parse(localStorage.getItem('taskList'));
	if(localStorage.flag1 == undefined) {
		$('.list1').append ('目前没有任务');
	}else{
		for (let i = 0;i < taskList.length;i++) {
			var pri = taskList[i].pri;
			var sta = taskList[i].sta;
			console.log(pri,sta);
			if(pri == '高优' && sta == '进行中') {
				$('.list1').append (`
					<div class="task" id=${taskList[i].id}>
				    	<span class="glyphicon glyphicon-play red"></span>
				    	<div class="content">
				    		${taskList[i].content}
				    	</div>
					</div>
				`);
				break;
			}
			
		}
	}
}