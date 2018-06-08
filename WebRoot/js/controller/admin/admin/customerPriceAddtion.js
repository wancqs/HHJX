controllers.controller("customerPriceAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.customerPrice = new CustomerPriceVo();
			$scope.customer = new CustomerDataVo();
			$scope.customerName = "";
			$scope.getCustomerList = function() {
		        
		        $http.get(baseUrl + "selectCustomer.do")
		            .success(function(data) {
		                console.log(data);
		                if(data.serviceResult == 1) {
		                    console.log(data.resultParam)
		                    $scope.customerList = data.resultParam;
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
			$scope.getCustomerList();
			//保存用户
			$scope.saveCustomerPrice = function() {
				$scope.customerPrice.customerName = $scope.customerName;
				var url = baseUrl + "newCustomerPrice.do"
				var data = {
						customerPrice : $scope.customerPrice.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加贸易商报价信息', '成功');
						$state.go("customerPrice");

					} else {
						toastr.error('获取数据', '失败');
					}

				}).error(function () {
	                toastr.error('输入数据格式错误', '失败');
	            })
			}
			
			 $scope.searchCustomerName = function(e) {
			        if(e && e.keyCode != 13) return;
			        sessionStorage.customerPriceListPageNum = 1;
			        $scope.page.fuzzy = true;
			        $scope.getCustomerPriceList();
			    }

			$scope.goBackTips = function() {
				//angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}

			// 返回
			$scope.goBack = function() {
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("customerPrice");
			}
			$scope.changeName = function(name){
				console.log(name)
				$scope.customerName = name
			}

		} ]);