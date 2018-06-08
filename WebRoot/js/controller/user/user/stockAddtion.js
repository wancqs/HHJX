controllers.controller("stockAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.stock = new StockVo();
			$scope.factory = new FactoryDataVo();
			$scope.factoryName = "";
			$scope.factoryList = [];
			$scope.getFactoryList = function() {
		        
		        $http.get(baseUrl + "selectFactory.do")
		            .success(function(data) {
		                if(data.serviceResult == 1) {
		                    $scope.factoryList = data.resultParam;
		                    console.log($scope.factoryList);
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
			
			//保存用户
			$scope.saveStock = function() {
				$scope.stock.factoryName = $scope.factoryName;
				var url = baseUrl + "newStock.do"
				var data = {
						stock : $scope.stock.voToJson()
				}
				console.log(data)
				$http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加库存信息', '成功');
						$state.go("offerPrice",{code:$scope.stock.code.substring(0,5)});

					} else {
						toastr.error('获取数据', '失败');
					}

				}).error(function () {
	                toastr.error('输入数据格式错误', '失败');
	            })
			}
			
			$scope.searchFactoryName = function(e) {
			        if(e && e.keyCode != 13) return;
			        sessionStorage.customerPriceListPageNum = 1;
			        $scope.page.fuzzy = true;
			        $scope.getStockList();
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