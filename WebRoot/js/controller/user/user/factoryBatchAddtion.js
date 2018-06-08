controllers.controller("factoryBatchAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.file = [];
			// 保存用户
			$scope.saveBatchFactory = function() {
				
				var factoryList = [];
				for(var i=1;i<$scope.file.length;i++) {
	                	var factoryData = new FactoryDataVo();
	                	factoryData.code= $scope.file[i][0];
	                	factoryData.name = $scope.file[i][1];
	                	factoryData.contacts = $scope.file[i][2];
	                	factoryData.phone = $scope.file[i][3];
	                	factoryData.email = $scope.file[i][4];
	                	factoryData.qq = $scope.file[i][5];
	                	factoryData.product = $scope.file[i][6];
	                	factoryData.address = $scope.file[i][7];
	                	factoryData.remark = $scope.file[i][8];
	                	factoryList.push(factoryData)
	                }
				if(factoryList.length){
	            	for(var i=0;i<factoryList.length;i++){
				        var url = baseUrl + "newFactory.do"
				        var data = {
				        		factoryData : factoryList[i].voToJson()
				        }
				    $http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加工厂客户信息', '成功');
						$state.go("factoryData");

					} else {
						toastr.error('已有相同客户', '失败');
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
				$state.go("factoryData");
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