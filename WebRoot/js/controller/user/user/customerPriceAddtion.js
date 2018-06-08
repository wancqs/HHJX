controllers.controller("customerPriceAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.customerPrice = new CustomerPriceVo();
			$scope.customer = new CustomerDataVo();
			$scope.customerName = "";
			$scope.customerList = [];
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
			//保存用户
			$scope.saveCustomerPrice = function() {
				$scope.customerPrice.customerName = $scope.customerName;
				var url = baseUrl + "newCustomerPrice.do"
				var data = {
						customerPrice : $scope.customerPrice.voToJson()
				}
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加贸易商报价信息', '成功');
						$state.go("customerPrice");

					} else {
						toastr.error('获取数据', '失败');
					}

				}).error(function () {
	                toastr.error('输入数据格式错误', '失败');
	            })
			}
			
			$scope.searchCustomerName = function(e) {
			        if(e && e.keyCode != 13) return;
			        sessionStorage.customerPriceListPageNum = 1;
			        $scope.page.fuzzy = true;
			        $scope.getCustomerPriceList();
			    }

			$scope.goBackTips = function() {
				//angular.element("#goBackTips").modal()
				$("#goBackTips").modal("show");
			}

			// 返回
			$scope.goBack = function() {
				$("#goBackTips").modal('hide');
				$(".modal-backdrop").remove();
				$state.go("customerPrice");
			}
			$scope.changeName = function(name){
				var div=document.getElementById("DIV");
				$scope.customerName = name
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