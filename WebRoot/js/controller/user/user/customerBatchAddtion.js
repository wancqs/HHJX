controllers.controller("customerBatchAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.file = [];
			// 保存用户
			$scope.saveBatchCustomer = function() {
				
				var customerList = [];
				for(var i=1;i<$scope.file.length;i++) {
	                	var customer = new CustomerDataVo();
	                	customer.name= $scope.file[i][0];
	                	customer.contacts = $scope.file[i][1];
	                	customer.telephone = $scope.file[i][2];
	                	customer.phone = $scope.file[i][3];
	                	customer.email = $scope.file[i][4];
	                	customer.qq = $scope.file[i][5];
	                	customer.product = $scope.file[i][6];
	                	customer.address = $scope.file[i][7];
	                	customer.remark = $scope.file[i][8];
	                	customerList.push(customer)
	                }
				if(customerList.length){
	            	for(var i=0;i<customerList.length;i++){
				        var url = baseUrl + "newCustomer.do"
				        var data = {
				        		customerData : customerList[i].voToJson()
				        }
				    $http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加贸易商信息', '成功');
						$state.go("customerData");

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
				$state.go("customerData");
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