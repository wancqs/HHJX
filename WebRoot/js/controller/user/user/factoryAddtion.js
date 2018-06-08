controllers.controller("factoryAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.factoryData = new FactoryDataVo();
			//保存用户
			$scope.saveFactory = function() {
				var url = baseUrl + "newFactory.do"
				var data = {
						factoryData : $scope.factoryData.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加客户', '成功');
						$state.go("factoryData");

					} else if(data.serviceResult == 2){
						var nameList = data.resultParam;
						toastr.error('录入失败', '失败');
						if(nameList.length){
							alert(nameList + '在跟进此客户');
						}
						$state.go("factoryData");
					}else {
						toastr.error('获取数据', '失败');
					}

				}).error(function () {
	                toastr.error('输入数据格式错误', '失败');
	            })
			}

			$scope.goBackTips = function() {
				//angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}
			
			$scope.change = function(name) {
				$scope.factoryData.name=name;
				var url = baseUrl + "getFactoryCodeByName.do"
		        var data = {factoryData:$scope.factoryData.voToJson()}
		        
		        $http.post(url,data)
		            .success(function(data) {
		                if(data.serviceResult == 1) {
		                    $scope.factoryData.code = data.resultParam;
		                } else {
		                }
		            })
		            .error(function(data) {
		            });
			}

			// 返回
			$scope.goBack = function() {
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("factoryData");
			}
			
			

		} ]);