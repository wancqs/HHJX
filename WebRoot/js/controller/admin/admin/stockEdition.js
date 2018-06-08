controllers.controller("stockEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.stock = new StockVo();
			$scope.factoryName = "";

			$scope.showStock = function() {
				$scope.stock = new StockVo();
				$scope.stock.id = $stateParams.id
				var url = baseUrl + "findStock.do"
				var data = {
					stock : $scope.stock.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.stock.factoryName = data.factoryName;
					$scope.stock.quantity = data.quantity;
					$scope.stock.code = data.code;
					$scope.stock.description = data.description;
					$scope.stock.brand = data.brand;
					$scope.stock.time = data.time;
					$scope.stock.price = data.price;
					$scope.stock.remark = data.remark;
				})
			}

			$scope.showStock();
			
			// 保存用户
			$scope.updateStock = function() {
				$scope.stock.id = $stateParams.id
				$scope.stock.factoryName = $scope.factoryName;
				console.log($scope.stock)
				var url = baseUrl + "updateStock.do"
				var data = {
					stock : $scope.stock.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改库存', '成功');
						$state.go("stock");

					} else {
						toastr.error('获取数据', '失败');
					}

				})
			}

			$scope.goBackTips = function() {
				// angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}

			// 返回
			$scope.goBack = function() {
				// $state.go("userList");
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("stock");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}
			
            $scope.getFactoryList = function() {
		        
		        $http.get(baseUrl + "selectFactoryByAdmin.do")
		            .success(function(data) {
		                console.log(data);
		                if(data.serviceResult == 1) {
		                    console.log(data.resultParam)
		                    $scope.factoryList = data.resultParam;
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
			$scope.getFactoryList();
			
			$scope.changeName = function(code){
				console.log(code)
				$scope.factoryName = code
			}


		} ]);