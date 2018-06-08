controllers.controller("changePwd", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {
	
			var password1 = document.getElementById("password1");
			var password2 = document.getElementById("password2");
			var password0 = document.getElementById("password0");
			var flag = false;
			
			$scope.user = new UserVo();
			
			$scope.checkPwd=function(password){
				$scope.user.password = password;
//				$scope.user.password = password0;
				var url = baseUrl + "checkPwd.do"
				var data = {
						user : $scope.user.voToJson()
				}
				$http.post(url, data).success(function(data) {
					if (data == true) {
						document.getElementById("ts").style.display = "block";
						document.getElementById("ts1").style.display = "none";
						document.getElementById("ts2").style.display = "none";
						flag = true;
					} else {
						flag = false;
					}

				}).error(function () {
	            })
			}
			//保存用户
			$scope.savePwd = function() {
					if (flag == false) {
						document.getElementById("ts2").style.display = "block";
						document.getElementById("ts").style.display = "none";
						document.getElementById("ts1").style.display = "none";
					}else if(password1.value==password2.value){
						$scope.user.password = password1.value;
						var url = baseUrl + "savePwd.do"
						var data = {
								user : $scope.user.voToJson()
						}
						$http.post(url, data).success(function(data) {

							if (data == true) {
								toastr.success('修改密码', '成功');
								$state.go("welcome");

							} else {
								toastr.error('修改密码', '失败');
							}

						}).error(function () {
			                toastr.error('输入数据格式错误', '失败');
			            })
					}else{
						document.getElementById("ts1").style.display = "block";
						document.getElementById("ts").style.display = "none";
						document.getElementById("ts2").style.display = "none";
					}
			}
			

			$scope.goBackTips = function() {
				//angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}

			// 返回
			$scope.goBack = function() {
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("stock");
			}
			

		} ]);