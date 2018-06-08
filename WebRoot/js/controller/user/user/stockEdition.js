controllers.controller("stockEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.stock = new StockVo();
			$scope.factoryName = "";
			$scope.factoryList = [];

			$scope.showStock = function() {
				$scope.stock = new StockVo();
				$scope.stock.id = $stateParams.id
				var url = baseUrl + "findStock.do"
				var data = {
					stock : $scope.stock.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.stock.factoryName = data.factoryName;
					$scope.stock.quantity = data.quantity;
					$scope.stock.code = data.code;
					$scope.stock.description = data.description;
					$scope.stock.brand = data.brand;
					$scope.stock.time = data.time;
					$scope.stock.price = data.price;
				})
			}

			$scope.showStock();
			
			// 保存用户
			$scope.updateStock = function() {
				$scope.stock.id = $stateParams.id
				$scope.stock.factoryName = $scope.factoryName;
				var url = baseUrl + "updateStock.do"
				var data = {
					stock : $scope.stock.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改库存', '成功');
						$state.go("stock");

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
				$state.go("stock");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}
			
            $scope.getFactoryList = function() {
		        
		        $http.get(baseUrl + "selectFactory.do")
		            .success(function(data) {
		                if(data.serviceResult == 1) {
		                    $scope.factoryList = data.resultParam;
		                } else {
		                    toastr.error('获取数据', '失败');
		                }
		                if(data.serviceResult == 5) {
		                    toastr.error('获取权限', '失败');
		                }
		            })
		            .error(function(data) {
		                toastr.error('获取数据', '失败');
		            });
		    }
			$scope.getFactoryList();
			
			$scope.changeName = function(name){
				var div=document.getElementById("DIV");
				$scope.factoryName = name
				div.style.display='none';
                div.innerHTML="";
			}
			
			$scope.inputValue = function(){
				var input=document.getElementById("input").value;
				var div=document.getElementById("DIV");
				var all = false;
				div.style.display='none';
                div.innerHTML="";
				for(var i=0;i<$scope.factoryList.length;i++){
					var name=$scope.factoryList[i].name;
	                if(name!=null&&input!=null){
	                	var sign = new RegExp(input).test(name);
	                	if(sign){
	                		$scope.factoryName=input;
	                		all=true;
		                    div.style.display='block';
		                    div.innerHTML+="<span style='font-size: 14px;' onclick='getVlaue(this)'>"+name+"</span><br/><br/>";
	                	}else{
	                		all=false;
	                	}
				}
				}
				 if(div.childNodes.length==0 && all==false){
					 div.style.display='block';
	                 div.innerHTML+="<br/><span style='font-size: 14px;color:red'>"+'没有该客户名称'+"</span>";
				}
				
			}


		} ]);