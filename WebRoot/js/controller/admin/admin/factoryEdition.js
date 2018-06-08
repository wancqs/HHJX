controllers.controller("factoryEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.factoryData = new FactoryDataVo();

			$scope.showFactory = function() {
				$scope.factoryData = new FactoryDataVo();
				$scope.factoryData.id = $stateParams.id
				console.log("aaaaaaaaaaaaaaaaa")
				var url = baseUrl + "findFactory.do"
				var data = {
					factoryData : $scope.factoryData.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.factoryData.code = data.code;
					$scope.factoryData.name = data.name;
					$scope.factoryData.type = data.type;
					$scope.factoryData.contacts = data.contacts;
					$scope.factoryData.phone = data.phone;
					$scope.factoryData.telephone = data.telephone;
					$scope.factoryData.extendphone = data.extendphone;
					$scope.factoryData.fax = data.fax;
					$scope.factoryData.email = data.email;
					$scope.factoryData.qq = data.qq;
					$scope.factoryData.wechat = data.wechat;
					$scope.factoryData.product = data.product;
					$scope.factoryData.address = data.address;
					$scope.factoryData.remark = data.remark;
					$scope.factoryData.clock = data.clock;
				})
			}

			$scope.showFactory();
			
			// 保存用户
			$scope.updateFactory = function() {
				$scope.factoryData.id = $stateParams.id
				console.log("bbbbbbbbbbbbb")
				console.log($scope.factoryData)
				var url = baseUrl + "updateFactory.do"
				var data = {
					factoryData : $scope.factoryData.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改客户', '成功');
						$state.go("factoryData");

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
				$state.go("factoryData");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}


		} ]);