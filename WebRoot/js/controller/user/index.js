/**
 * 菜单控制器
 */
var controllers = angular.module("controllers", []);

/**
 * 主页控制器
 */
controllers.controller("index", ['$scope', '$http', '$window','$state', function ($scope, $http, $window, $state) {
    
	$scope.user = new UserVo();
	$scope.factoryList=[];

    // 登录判断和管理员信息获取
    $http.get(baseUrl + "userIsLogin.do")
        .success(function (data) {
            if (data.serviceResult == 1) {
                $scope.user.name = data.resultParam.name;
//                alert($scope.user.name);
            }else {
            	alert("请登录");
            	window.location.href="../user/userLogin.html";
            }
        })
        .error(function (data) {
        	    alert("请登录");
                window.location.href="../user/userLogin.html";
            })

    // 注销
    $scope.userLogout = function () {
        $http.get(baseUrl + "userLogout.do")
            .success(function () {
            	window.location.href="../user/userLogin.html";
            })
            
    }
    
    
    $http.get(baseUrl + "show.do")
    .success(function (data) {
    	console.log(data)
    	 $scope.factoryList=data.resultParam
    	}
    )
    
    $scope.toEdit = function (id) {
    	id = id + 100000;
    	console.log(id)
	    $state.go("factoryEdition", {id:id})
	    }
//    
//    $scope.remarkData=[];
//    $http.get(baseUrl + "remark.do")
//    .success(function (data) {
//    	for(var i=0;i<data.length;i++){
//    	 $scope.remarkData[i]=data[i];
//    	}
//    })

}]);