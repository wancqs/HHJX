controllers.controller("userAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.user = new UserVo();
			//保存用户
			$scope.saveUser = function() {
				var url = baseUrl + "newUser.do"
				var data = {
					user : $scope.user.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加用户', '成功');
						$state.go("userList");

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
				// $state.go("userList");
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("userList");
				//$window.location.href = "/HHJX/pages/admin/user/user-list.html";
				//	    	  window.location.href="/HHJX/pages/admin/index.html#/userList";
			}

		} ]);