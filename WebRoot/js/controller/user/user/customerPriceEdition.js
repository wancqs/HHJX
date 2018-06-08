controllers.controller("customerPriceEdition", [ '$scope', '$http', '$state',
		'$stateParams', function($scope, $http, $state, $stateParams) {

			$scope.customerPrice = new CustomerPriceVo();
			$scope.customerName = "";
			$scope.customerList = [];

			$scope.showCustomerPrice = function() {
				$scope.customerPrice = new CustomerPriceVo();
				$scope.customerPrice.id = $stateParams.id
				var url = baseUrl + "findCustomerPrice.do"
				var data = {
					customerPrice : $scope.customerPrice.voToJson()
				}
				$http.post(url, data).success(function(data) {
					
					$scope.customerPrice.customerName = data.customerName;
					$scope.customerPrice.quantity = data.quantity;
					$scope.customerPrice.description = data.description;
					$scope.customerPrice.brand = data.brand;
					$scope.customerPrice.time = data.time;
					$scope.customerPrice.price = data.price;
					$scope.customerPrice.offer = data.offer;
					$scope.customerPrice.remark = data.remark;
				})
			}

			$scope.showCustomerPrice();
			
			// 保存用户
			$scope.updateCustomerPrice = function() {
				$scope.customerPrice.id = $stateParams.id
				$scope.customerPrice.customerName = $scope.customerName;
				var url = baseUrl + "updateCustomerPrice.do"
				var data = {
					customerPrice : $scope.customerPrice.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('修改客户', '成功');
						$state.go("customerPrice");

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
				$state.go("customerPrice");
				// $window.location.href =
				// "/HHJX/pages/admin/user/user-list.html";
				// window.location.href="/HHJX/pages/admin/index.html#/userList";
			}
			
            $scope.getCustomerList = function() {
		        
		        $http.get(baseUrl + "selectCustomer.do")
		            .success(function(data) {
		                if(data.serviceResult == 1) {
		                    $scope.customerList = data.resultParam;
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
			$scope.getCustomerList();
			
			$scope.changeName = function(name){
				var div=document.getElementById("DIV");
				$scope.customerName = name;
				div.style.display='none';
                div.innerHTML="";
			}
			
			$scope.inputValue = function(){
				var input=document.getElementById("input").value;
				var div=document.getElementById("DIV");
				var all = false;
				div.style.display='none';
                div.innerHTML="";
				for(var i=0;i<$scope.customerList.length;i++){
					var name=$scope.customerList[i].name;
	                if(name!=null&&input!=null){
	                	var sign = new RegExp(input).test(name);
	                	if(sign){
	                		$scope.customerName=input;
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
	                 div.innerHTML+="<br/><span style='font-size: 14px;color:red'>"+'没有该贸易商名称'+"</span>";
				}
				
			}



		} ]);