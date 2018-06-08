controllers.controller("customerPriceBatchAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

	        $scope.customerPrice = new CustomerPriceVo();
	        $scope.customer = new CustomerDataVo();
	        $scope.customerName = "";
	        $scope.customerList = [];
			$scope.file = [];
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
			// 保存用户
			$scope.saveBatchCustomerPrice = function() {
				
				var customerPriceList = [];
				for(var i=1;i<$scope.file.length;i++) {
	                	var customerPrice = new CustomerPriceVo();
	                	customerPrice.description = $scope.file[i][0];
	                	customerPrice.quantity = $scope.file[i][1];
	                	customerPrice.brand = $scope.file[i][2];
	                	customerPrice.time = $scope.file[i][3];
	                	customerPrice.price = $scope.file[i][4];
	                	customerPrice.offer = $scope.file[i][5];
	                	customerPrice.remark = $scope.file[i][6];
	                	customerPrice.customerName = $scope.customerName;
	                	customerPriceList.push(customerPrice)
	                }
				if(customerPriceList.length){
	            	for(var i=0;i<customerPriceList.length;i++){
				        var url = baseUrl + "newCustomerPrice.do"
				        var data = {
				        		customerPrice : customerPriceList[i].voToJson()
				        }
				    $http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加报价信息', '成功');
						$state.go("customerPrice");

					} else {
						toastr.error('获取数据', '失败');
					}

				}).error(function () {
	                toastr.error('输入数据格式错误', '失败');
	            });
			}
	      }
			}
	            
	          
			

			$scope.goBackTips = function() {
				// angular.element("#goBackTips").modal()
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
			
			$scope.do_file = function(){
				var f = $("#xlfile")[0].files;
				var reader = new FileReader();
				reader.onload = function(e) {
					var data = e.target.result;
					$scope.file = $scope.process(XLSX.read(data, {type:'array'})).Sheet1;
				};
				reader.readAsArrayBuffer(f[0]);
				
			}
			
			$scope.process =  function(workbook){
				var result = {};
				
				workbook.SheetNames.forEach(function(sheetName) {
					var roa = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {header:1});
					if(roa.length) 
						result[sheetName] = roa;
				});
				return result;
			}
			
			$(function(){
				var xlf = document.getElementById('xlfile');
				if(!xlf.addEventListener) return;
				function handleFile(e) { 
					$scope.do_file(); 
					}
				xlf.addEventListener('change', handleFile, false);
			});

		} ]);