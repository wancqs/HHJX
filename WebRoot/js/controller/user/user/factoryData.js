controllers.controller("factoryData", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {
	 
	    $scope.checkAll = false;//全选
	    $scope.xu = false;//顺序标志
	    $scope.gxu = false;//提醒时间顺序标志
	    $scope.factoryList = [];
	    
	    $scope.page = new PageVo();
	    $scope.user = new UserVo();
	    $scope.factoryData = new FactoryDataVo();

	    $scope.page.pageNum = 1;
	    $scope.page.pageSize = 20;
	    $scope.page.order=0;//默认提醒时间降序
	    //获取用户列表
	    $scope.getFactoryList = function() {
	        //是否存在缓存页数
	        if(sessionStorage.factoryListPageNum) $scope.page.pageNum = sessionStorage.factoryListPageNum;
	        var url = baseUrl + "getFactoryListByPageById.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        $http.post(url,data)
	            .success(function(data) {
	                if(data.serviceResult == 1) {
	                    $scope.factoryList = data.resultParam;
	                    $scope.page.pageNum = $scope.factoryList.pageNum;
	                } else {
	                    toastr.error('获取数据', '失败');
	                }
	                if(data.serviceResult == 5) {
	                    toastr.error('获取权限', '失败');
	                }
	            })
	            .error(function(data) {
	                toastr.error('获取数据', '失败');
	            });
	    }
	    //初始化页面
	    $scope.getFactoryList();
	    //修改显示条数
	    $scope.changePageSize = function () {
	        sessionStorage.factoryListPageSize = $scope.page.pageSize;
	        $scope.getFactoryList();
	    }

	    //上一页
	    $scope.lastPage = function(pageNum) {
	        if(pageNum <= 0) return;
	        sessionStorage.factoryListPageNum = pageNum;
	        $scope.getFactoryList();
	    }

	    //下一页
	    $scope.nextPage = function(pageNum) {
	        if(pageNum > $scope.factoryList.pages) return;
	        sessionStorage.factoryListPageNum = pageNum;
	        $scope.getFactoryList();
	    }

	    //跳转指定页
	    $scope.toPage = function(e) {
	        if(e && e.keyCode != 13) return;
	        if($scope.page.pageNum <=0 ||
	            $scope.page.pageNum > $scope.factoryList.pages) {
	            $scope.page.pageNum = $scope.factoryList.pageNum;
	            return;
	        }
	        sessionStorage.factoryListPageNum = $scope.page.pageNum;
	        $scope.getFactoryList();
	    }


	    //用户查询
	    $scope.searchFactory = function(e) {
	        if(e && e.keyCode != 13) return;
	        sessionStorage.factoryListPageNum = 1;
	        $scope.page.fuzzy = true;
	        $scope.getFactoryList();
	    }

	    //全选
	    $scope.$watch('checkAll',function() {
	        if(!$scope.factoryList.list) return;
	        if($scope.checkAll) {
	            for(var i=0;i<$scope.customerList.list.length;i++) {
	                $scope.factoryList.list[i].checked = true;
	            }
	        } else {
	            for(var i=0;i<$scope.factoryList.list.length;i++) {
	                $scope.factoryList.list[i].checked = false;
	            }
	        }
	    });

	   
	  //跳转修改页
	    $scope.toEditPage = function (id) {
	        $state.go("factoryEdition", {id:id})
	    }

	    $scope.shunxu = function () {
	    	if($scope.xu == true){
	    		$scope.page.order=1;
	    		$scope.xu = false;
	    		$scope.getFactoryList();
	    		toastr.success('录入时间', '降序')
	    	}else{
	    		$scope.page.order=0;
	    		$scope.xu = true;
	    		$scope.getFactoryList();
	    		toastr.success('录入时间', '升序')

	    	}
	    	 
	    }
	    
	    $scope.gshunxu = function () {
	    	if($scope.gxu == true){
	    		$scope.page.order=3;
	    		$scope.gxu = false;
	    		$scope.getFactoryList();
	    		toastr.success('提醒时间', '降序')
	    	}else{
	    		$scope.page.order=4;
	    		$scope.gxu = true;
	    		$scope.getFactoryList();
	    		toastr.success('提醒时间', '升序')

	    	}
	    	 
	    }

			

		} ]);