controllers.controller("customerEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.customerData = new CustomerDataVo();

			$scope.showCustomer = function() {
				$scope.customerData = new CustomerDataVo();
				$scope.customerData.id = $stateParams.id
				var url = baseUrl + "findCustomer.do"
				var data = {
					customerData : $scope.customerData.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.customerData.code = data.code;
					$scope.customerData.name = data.name;
					$scope.customerData.type = data.type;
					$scope.customerData.contacts = data.contacts;
					$scope.customerData.phone = data.phone;
					$scope.customerData.telephone = data.telephone;
					$scope.customerData.extendphone = data.extendphone;
					$scope.customerData.fax = data.fax;
					$scope.customerData.email = data.email;
					$scope.customerData.qq = data.qq;
					$scope.customerData.product = data.product;
					$scope.customerData.address = data.address;
					$scope.customerData.remark = data.remark;
				})
			}

			$scope.showCustomer();
			
			// 保存用户
			$scope.updateCustomer = function() {
				$scope.customerData.id = $stateParams.id
				var url = baseUrl + "updateCustomer.do"
				var data = {
					customerData : $scope.customerData.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改客户', '成功');
						$state.go("customerData");

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
				$state.go("customerData");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}


		} ]);