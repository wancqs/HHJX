controllers.controller("factoryEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.factoryData = new FactoryDataVo();
			var remark = "";
			var welcome = false;

			$scope.showFactory = function() {
				$scope.factoryData = new FactoryDataVo();
				if($stateParams.id>100000){
					welcome = true;
					$scope.factoryData.id = $stateParams.id-100000;
				}else{
					$scope.factoryData.id = $stateParams.id;
				}
				
				
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
					remark = data.remark;
					$scope.factoryData.clock = data.clock;
				})
			}

			$scope.showFactory();
			
			// 保存用户
			$scope.updateFactory = function() {
				if(welcome==true){
					$scope.factoryData.id = $stateParams.id-100000;
				}else{
					$scope.factoryData.id = $stateParams.id
				}
				var url = baseUrl + "updateFactory.do"
				var data = {
					factoryData : $scope.factoryData.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改客户', '成功');
						if(welcome==true){
							$state.go("welcome");
						}else{
							$state.go("factoryData");
						}

					} else {
						toastr.error('获取数据', '失败');
					}

				})
			}

			$scope.goBackTips = function() {
				// angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}
			
			$scope.newRemark = function() {
				// angular.element("#goBackTips").modal()
				$scope.factoryData.remark = null;
			}

			// 返回
			$scope.goBack = function() {
				// $state.go("userList");
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				if(welcome==true){
					$state.go("welcome");
				}else{
					$state.go("factoryData");
				}
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}


		} ]);