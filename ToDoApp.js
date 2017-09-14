var ToDoApp =angular.module('mainApp',[]);

ToDoApp.controller('mainController',  function($scope){
	$scope.tasks=[];

	
	var taskData=localStorage['tasklist'];
		if((taskData !=undefined)) {
			$scope.tasks = JSON.parse(taskData);
			console.log('First LocalStorage');
		}
		
	$scope.searchEnter=function(){
		if((event.which == 13) && ($scope.task != "") ) {
		$scope.addTask();
		//console.log('SearchEnter');
		}
	};

	$scope.addTask=function(){
		//console.log('AddTask');
		$scope.tasks.push({'taskMessage':$scope.task, 'status':false});
		//$scope.task='';
		//delete $scope.task;
		localStorage['tasklist'] = JSON.stringify($scope.tasks);
		console.log(localStorage);
		$scope.task='';
	};
	
	$scope.contentEdit=function(msg){
		for(i=0;i<$scope.tasks.length;i++) {
			if($scope.tasks[i].taskMessage == msg) {
				$scope.tasks[i].taskMessage=event.target.innerText;
			}
		}

		localStorage['tasklist'] = JSON.stringify($scope.tasks);
		console.log("new value"+localStorage);
		event.target.contentEditable = event.target.contentEditable == "false" ? "true" : "false";
		
	};
	$scope.EnterEdit=function(msg){
		if((event.which == 13) && (msg != "") ) {
		$scope.contentEdit();
		//console.log("work");
		}
	};

	$scope.delete=function(task){
		$scope.tasks.splice(task,1);
		localStorage['tasklist'] = JSON.stringify($scope.tasks);
				console.log('a mers');
		localStorage['tasklist'] = JSON.stringify($scope.tasks);

	}
	if($scope.checktask == true)
		{
				localStorage['tasklist'] = JSON.stringify($scope.tasks);
				console.log('LocalStorage checkbox');
		}

});
	
