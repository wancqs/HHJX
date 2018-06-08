/**
 * 菜单控制器
 */
var controllers = angular.module("controllers", []);

/**
 * 主页控制器
 */
controllers.controller("index", ['$scope', '$http', '$window', function ($scope, $http, $window) {
    
	$scope.admin = new AdminVo();

    // 登录判断和管理员信息获取
    $http.get(baseUrl + "adminIsLogin.do")
        .success(function (data) {
            if (data.serviceResult == 1) {
                $scope.admin.name = data.resultParam.name;
//                alert("成功");
            }else {
            	alert("请重新登录");
                window.location.href="../admin/adminLogin.html";
            }
        })
        .error(function (data) {
        	alert("请登录！");
            window.location.href="../admin/adminLogin.html";
            })

    // 注销
    $scope.adminLogout = function () {
        $http.get(baseUrl + "adminLogout.do")
            .success(function () {
            	window.location.href="../admin/adminLogin.html";
            })
            
    }
    
    $http.get(baseUrl + "adminShow.do")
    .success(function (data) {
    	console.log(data)
    	 $scope.factoryList=data.resultParam
    	}
    )
    
//    $scope.allData=[];
//    $http.get(baseUrl + "welcome.do")
//    .success(function (data) {
//    	for(var i=0;i<data.length;i++){
//    	 $scope.allData[i]=data[i];
//    	}
//    })

}]);