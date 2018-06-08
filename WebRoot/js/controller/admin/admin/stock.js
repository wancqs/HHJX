controllers.controller("stock", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

	 $scope.checkAll = false;//全选
	 $scope.xu = false;
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
	        var url = baseUrl + "getStockListByPage.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        $http.post(url,data)
	            .success(function(data) {
	                console.log(data);
	                if(data.serviceResult == 1) {
	                    console.log(data.resultParam)
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
	        console.log(pageNum);
	        if(pageNum <= 0) return;
	        sessionStorage.stockListPageNum = pageNum;
	        $scope.getStockList();
	    }

	    //下一页
	    $scope.nextPage = function(pageNum) {
	        console.log($scope.stockList.pages)
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
	    
	  //删除确认提示
	    $scope.deleteType = "";
	    $scope.deleteId = ""
	    	$scope.deleteTips = function(type,id) {
	        $scope.deleteType = type;
	        if(id){
	            $scope.deleteId = id;
	        }
	        $("#deleteTips").modal("show");
	    }
	    
	    $scope.deleteStock= function() {
	        var stockList = [];
	        if($scope.deleteType == "one") {
	        	var stock = new StockVo();
	            stock.id = $scope.deleteId;
	            var url = baseUrl + "adminDeleteStock.do";
	            var data = {stock:stock.voToJson()};
	            
	            $http.post(url,data)
	                .success(function(data) {
						toastr.success('删除客户', '成功');
	                    $scope.getStockList();
	                })
	                .error(function(data) {
	                    toastr.error('删除失败', '失败');
	                });
	            
	        } else if ($scope.deleteType == "batch") {
	            for(var i=0;i<$scope.stockList.list.length;i++) {
	                if($scope.stockList.list[i].checked) {
	                	var stock = new StockVo();
	                	stock.id = $scope.stockList.list[i].id;
	                	stockList.push(stock)
	                }
	                
	            }
	            if(stockList.length){
	            	for(var i=0;i<stockList.length;i++){
	            		var url = baseUrl + "adminDeleteStock.do";
			            var data = {stock:stockList[i].voToJson()};
			            
			            $http.post(url,data)
			                .success(function(data) {
								toastr.success('删除客户', '成功');
			                    $scope.getStockList();
			                })
			                .error(function(data) {
			                    toastr.error('删除失败', '失败');
			                });
	            	} 
	            }
	        }
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
	   
	  //跳转修改页
	    $scope.toEditPage = function (id) {
	        $state.go("stockEdition", {id:id})
	    }

		} ]);