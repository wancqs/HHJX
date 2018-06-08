controllers.controller("customerData", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

	    $scope.checkAll = false;//全选
	    $scope.xu = false;//顺序标志
	    $scope.customerList = [];
	    
	    $scope.page = new PageVo();
	    $scope.user = new UserVo();
	    $scope.customerData = new CustomerDataVo();

	    $scope.page.pageNum = 1;
	    $scope.page.pageSize = 9;
	    //获取用户列表
	    $scope.getCustomerList = function() {
	        //是否存在缓存页数
	        if(sessionStorage.customerListPageNum) $scope.page.pageNum = sessionStorage.customerListPageNum;
	        var url = baseUrl + "getCustomerListByPageById.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        $http.post(url,data)
	            .success(function(data) {
	                if(data.serviceResult == 1) {
	                    $scope.customerList = data.resultParam;
	                    $scope.page.pageNum = $scope.customerList.pageNum;
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
	    $scope.getCustomerList();
	    //修改显示条数
	    $scope.changePageSize = function () {
	        sessionStorage.customerListPageSize = $scope.page.pageSize;
	        $scope.getCustomerList();
	    }

	    //上一页
	    $scope.lastPage = function(pageNum) {
	        if(pageNum <= 0) return;
	        sessionStorage.customerListPageNum = pageNum;
	        $scope.getCustomerList();
	    }

	    //下一页
	    $scope.nextPage = function(pageNum) {
	        if(pageNum > $scope.customerList.pages) return;
	        sessionStorage.customerListPageNum = pageNum;
	        $scope.getCustomerList();
	    }

	    //跳转指定页
	    $scope.toPage = function(e) {
	        if(e && e.keyCode != 13) return;
	        if($scope.page.pageNum <=0 ||
	            $scope.page.pageNum > $scope.customerList.pages) {
	            $scope.page.pageNum = $scope.customerList.pageNum;
	            return;
	        }
	        sessionStorage.customerListPageNum = $scope.page.pageNum;
	        $scope.getCustomerList();
	    }


	    //用户查询
	    $scope.searchCustomer = function(e) {
	        if(e && e.keyCode != 13) return;
	        sessionStorage.customerListPageNum = 1;
	        $scope.page.fuzzy = true;
	        $scope.getCustomerList();
	    }

	    //全选
	    $scope.$watch('checkAll',function() {
	        if(!$scope.customerList.list) return;
	        if($scope.checkAll) {
	            for(var i=0;i<$scope.customerList.list.length;i++) {
	                $scope.customerList.list[i].checked = true;
	            }
	        } else {
	            for(var i=0;i<$scope.customerList.list.length;i++) {
	                $scope.customerList.list[i].checked = false;
	            }
	        }
	    });

	   
	  //跳转修改页
	    $scope.toEditPage = function (id) {
	        $state.go("customerEdition", {id:id})
	    }
	    
	    $scope.shunxu = function () {
	    	if($scope.xu == true){
	    		$scope.page.order=1;
	    		$scope.xu = false;
	    		$scope.getCustomerList();
	    		 toastr.success('录入时间', '降序')
	    	}else{
	    		$scope.page.order=0;
	    		$scope.xu = true;
	    		$scope.getCustomerList();
	    		 toastr.success('录入时间', '升序')
	    	}
	    	
	    }


		} ]);