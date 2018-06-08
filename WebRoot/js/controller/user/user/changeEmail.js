controllers.controller("changeEmail", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {
	
			var email = document.getElementById("email");
			
			$scope.user = new UserVo();
			
			$http.get(baseUrl + "showEmail.do")
				.success(function(data) {
					 if (data.serviceResult == 1) {
			                $scope.user.email = data.resultParam.email;
			                console.log($scope.user.email);
			            }
				}).error(function () {
					
	            });
			//保存用户
			$scope.saveEmail = function() {
					$scope.user.email = email.value;
					 console.log($scope.user.email);
					var url = baseUrl + "saveEmail.do"
					var data = {
							user : $scope.user.voToJson()
					}
					$http.post(url, data).success(function(data) {

						if (data.serviceResult == 1) {
							toastr.success('修改邮箱', '成功');
							$state.go("welcome");

						} else {
							toastr.error('修改邮箱', '失败');
						}

					}).error(function () {
		                toastr.error('输入数据格式错误', '失败');
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
				$state.go("welcome");
			}
			

		} ]);