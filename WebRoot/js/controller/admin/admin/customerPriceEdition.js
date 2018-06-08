 controllers.controller("customerPriceEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.customerPrice = new CustomerPriceVo();
			$scope.customerName = "";

			$scope.showCustomerPrice = function() {
				$scope.customerPrice = new CustomerPriceVo();
				$scope.customerPrice.id = $stateParams.id
				var url = baseUrl + "findCustomerPrice.do"
				var data = {
					customerPrice : $scope.customerPrice.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.customerPrice.customerName = data.customerName;
					$scope.customerPrice.quantity = data.quantity;
					$scope.customerPrice.description = data.description;
					$scope.customerPrice.brand = data.brand;
					$scope.customerPrice.time = data.time;
					$scope.customerPrice.price = data.price;
					$scope.customerPrice.offer = data.offer;
					$scope.customerPrice.remark = data.remark;
				})
			}

			$scope.showCustomerPrice();
			
			// 保存用户
			$scope.updateCustomerPrice = function() {
				$scope.customerPrice.id = $stateParams.id
				$scope.customerPrice.customerName = $scope.customerName;
				console.log("bbbbbbbbbbbbb")
				console.log($scope.customerPrice)
				var url = baseUrl + "updateCustomerPrice.do"
				var data = {
					customerPrice : $scope.customerPrice.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改客户', '成功');
						$state.go("customerPrice");

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
				$state.go("customerPrice");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}
			
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
			
			$scope.changeName = function(name){
				console.log(name)
				$scope.customerName = name
			}

			

		} ]);