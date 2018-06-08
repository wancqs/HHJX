controllers.controller("customerAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.customerData = new CustomerDataVo();
			//保存用户
			$scope.saveCustomer = function() {
				var url = baseUrl + "newCustomer.do"
				var data = {
						customerData : $scope.customerData.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加客户', '成功');
						$state.go("customerData");

					} else {
						toastr.error('获取数据', '失败');
					}

				})
			}

			$scope.goBackTips = function() {
				//angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}

			// 返回
			$scope.goBack = function() {
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("customerData");
			}

		} ]);