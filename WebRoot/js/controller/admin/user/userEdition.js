controllers.controller("userEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.user = new UserVo();

			$scope.showUser = function() {
				$scope.userVo = new UserVo();
				$scope.userVo.id = $stateParams.id
				console.log("aaaaaaaaaaaaaaaaa")
				var url = baseUrl + "findUser.do"
				var data = {
					user : $scope.userVo.voToJson()
				}
				$http.post(url, data).success(function(data) {
					$scope.user.name = data.name;
					$scope.user.password = data.password;
					$scope.user.type = data.type;
				})
			}

			$scope.showUser();
			
			// 保存用户
			$scope.updateUser = function() {
				$scope.user.id = $stateParams.id
				console.log("bbbbbbbbbbbbb")
				console.log($scope.user)
				var url = baseUrl + "adminUpdateUser.do"
				var data = {
					user : $scope.user.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改用户', '成功');
						$state.go("userList");

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
				$state.go("userList");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}

//			$scope.showUser();
//			$scope.updateUser();

		} ]);