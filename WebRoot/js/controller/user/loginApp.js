var loginApp = angular.module("loginApp",[]);
var baseUrl = "/HHJX/";
loginApp
.config(['$httpProvider',function($httpProvider) {
	$httpProvider.defaults.transformRequest=function(obj){
		var str=[];
		for(var p in obj){
			str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
		}
		return str.join("&");
	};
	$httpProvider.defaults.headers.post = {
			'Content-Type': 'application/x-www-form-urlencoded',
	}
}]);

loginApp.controller("login", ['$scope','$http','$window',function($scope,$http,$window) {
	
	$scope.user = new UserVo();
	
	$scope.login = function() {
	
		var url = baseUrl + "passLogin.do";
		var data = {user:$scope.user.voToJson()};
		console.log(data);
		$http.post(url,data)
		.success(function(data) {
			console.log(data);
			if(data.serviceResult == 1) {
				$scope.user.name = data.resultParam.name;
				$window.location.href = "index.html";
			} else {
				toastr.error('失败', data.resultInfo);
			}
		})
		.error(function(data) {
			toastr.error('登陆', "网络繁忙");
		});
	}
	
}]);