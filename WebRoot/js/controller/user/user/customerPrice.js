controllers.controller("customerPrice", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

	    $scope.checkAll = false;//全选
	    $scope.xu = false;//顺序标志
	    $scope.customerPriceList = [];
	    
	    $scope.page = new PageVo();
	    $scope.user = new UserVo();
	    $scope.customerPrice = new CustomerPriceVo();

	    $scope.page.pageNum = 1;
	    $scope.page.pageSize = 9;
	    //获取用户列表
	    $scope.getCustomerPriceList = function() {
	        //是否存在缓存页数
	        if(sessionStorage.customerPriceListPageNum) $scope.page.pageNum = sessionStorage.customerPriceListPageNum;
	        var url = baseUrl + "getCustomerPriceListByPageById.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        $http.post(url,data)
	            .success(function(data) {
	                console.log(data);
	                if(data.serviceResult == 1) {
	                    $scope.customerPriceList = data.resultParam;
	                    $scope.page.pageNum = $scope.customerPriceList.pageNum;
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
	    $scope.getCustomerPriceList();
	    //修改显示条数
	    $scope.changePageSize = function () {
	        sessionStorage.customerPriceListPageSize = $scope.page.pageSize;
	        $scope.getCustomerPriceList();
	    }

	    //上一页
	    $scope.lastPage = function(pageNum) {
	        if(pageNum <= 0) return;
	        sessionStorage.customerPriceListPageNum = pageNum;
	        $scope.getCustomerPriceList();
	    }

	    //下一页
	    $scope.nextPage = function(pageNum) {
	        if(pageNum > $scope.customerPriceList.pages) return;
	        sessionStorage.customerPriceListPageNum = pageNum;
	        $scope.getCustomerPriceList();
	    }

	    //跳转指定页
	    $scope.toPage = function(e) {
	        if(e && e.keyCode != 13) return;
	        if($scope.page.pageNum <=0 ||
	            $scope.page.pageNum > $scope.customerPriceList.pages) {
	            $scope.page.pageNum = $scope.customerPriceList.pageNum;
	            return;
	        }
	        sessionStorage.customerPriceListPageNum = $scope.page.pageNum;
	        $scope.getCustomerPriceList();
	    }


	    //用户查询
	    $scope.searchCustomerPrice = function(e) {
	        if(e && e.keyCode != 13) return;
	        sessionStorage.customerPriceListPageNum = 1;
	        $scope.page.fuzzy = true;
	        $scope.getCustomerPriceList();
	    }

	    //全选
	    $scope.$watch('checkAll',function() {
	        if(!$scope.customerPriceList.list) return;
	        if($scope.checkAll) {
	            for(var i=0;i<$scope.customerPriceList.list.length;i++) {
	                $scope.customerPriceList.list[i].checked = true;
	            }
	        } else {
	            for(var i=0;i<$scope.customerPriceList.list.length;i++) {
	                $scope.customerPriceList.list[i].checked = false;
	            }
	        }
	    });

	    $scope.shunxu = function () {
	    	if($scope.xu == true){
	    		$scope.page.order=1;
	    		$scope.xu = false;
	    		$scope.getCustomerPriceList();
	    		toastr.success('录入时间', '降序')
	    	}else{
	    		$scope.page.order=0;
	    		$scope.xu = true;
	    		$scope.getCustomerPriceList();
	    		toastr.success('录入时间', '升序')

	    	}
	    }
	   
	  //跳转修改页
	    $scope.toEditPage = function (id) {
	        $state.go("customerPriceEdition", {id:id})
	    }

		} ]);