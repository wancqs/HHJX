controllers.controller("stock", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

	    $scope.checkAll = false;//全选
	    $scope.xu = false;//顺序标志
	    $scope.stockList = [];
	    
	    $scope.page = new PageVo();
	    $scope.user = new UserVo();
	    $scope.stock = new StockVo();

	    $scope.page.pageNum = 1;
	    $scope.page.pageSize = 9;
	    //获取用户列表
	    $scope.getStockList = function() {
	        //是否存在缓存页数
	        if(sessionStorage.stockListPageNum) $scope.page.pageNum = sessionStorage.stockListPageNum;
	        var url = baseUrl + "getStockListByPageById.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        $http.post(url,data)
	            .success(function(data) {
	                if(data.serviceResult == 1) {
	                    $scope.stockList = data.resultParam;
	                    $scope.page.pageNum = $scope.stockList.pageNum;
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
	    $scope.getStockList();
	    //修改显示条数
	    $scope.changePageSize = function () {
	        sessionStorage.stockListPageSize = $scope.page.pageSize;
	        $scope.getStockList();
	    }

	    //上一页
	    $scope.lastPage = function(pageNum) {
	        if(pageNum <= 0) return;
	        sessionStorage.stockListPageNum = pageNum;
	        $scope.getStockList();
	    }

	    //下一页
	    $scope.nextPage = function(pageNum) {
	        if(pageNum > $scope.stockList.pages) return;
	        sessionStorage.stockListPageNum = pageNum;
	        $scope.getStockList();
	    }

	    //跳转指定页
	    $scope.toPage = function(e) {
	        if(e && e.keyCode != 13) return;
	        if($scope.page.pageNum <=0 ||
	            $scope.page.pageNum > $scope.stockList.pages) {
	            $scope.page.pageNum = $scope.stockList.pageNum;
	            return;
	        }
	        sessionStorage.stockListPageNum = $scope.page.pageNum;
	        $scope.getStockList();
	    }


	    //用户查询
	    $scope.searchStock = function(e) {
	        if(e && e.keyCode != 13) return;
	        sessionStorage.stockListPageNum = 1;
	        $scope.page.fuzzy = true;
	        $scope.getStockList();
	    }

	    //全选
	    $scope.$watch('checkAll',function() {
	        if(!$scope.stockList.list) return;
	        if($scope.checkAll) {
	            for(var i=0;i<$scope.stockList.list.length;i++) {
	                $scope.stockList.list[i].checked = true;
	            }
	        } else {
	            for(var i=0;i<$scope.stockList.list.length;i++) {
	                $scope.stockList.list[i].checked = false;
	            }
	        }
	    });

	   
	  //跳转修改页
	    $scope.toEditPage = function (id) {
	        $state.go("stockEdition", {id:id})
	    }
	    
	    $scope.shunxu = function () {
	    	if($scope.xu == true){
	    		$scope.page.order=1;
	    		$scope.xu = false;
	    		$scope.getStockList();
	    		toastr.success('录入时间', '降序')
	    	}else{
	    		$scope.page.order=0;
	    		$scope.xu = true;
	    		$scope.getStockList();
	    		toastr.success('录入时间', '升序')
	    	}
	    	
	    }

		} ]);