controllers.controller("stockBatchAddtion", [ '$scope', '$http', '$state',
		function($scope, $http, $state) {

			$scope.stock = new StockVo();
			$scope.factory = new FactoryDataVo();
			$scope.factoryName = "";
			$scope.factoryList = [];
			$scope.file = [];
			$scope.codeList = [];
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
			// 保存用户
			$scope.saveBatchStock = function() {
				
				var stockList = [];
				for(var i=1;i<$scope.file.length;i++) {
	                	var stock = new StockVo();
	                	stock.code= $scope.file[i][0];
	                	stock.description = $scope.file[i][1];
	                	stock.brand = $scope.file[i][2];
	                	stock.time = $scope.file[i][3];
	                	stock.quantity = $scope.file[i][4];
	                	stock.price = $scope.file[i][5];
	                	stock.factoryName = $scope.factoryName;
	                	stockList.push(stock);
	                	if(stock.code ==null){
	                		toastr.error('有型号为空的数据', '失败');
	                	}
	                	$scope.codeList.push(stock.code.substring(0,5));
	                	
	                	
	                }
				if(stockList.length){
	            	for(var i=0;i<stockList.length;i++){
				        var url = baseUrl + "newStock.do"
				        var data = {
						stock : stockList[i].voToJson()
				        }
				    $http.post(url, data).success(function(data) {

					if (data.serviceResult == 1) {
						toastr.success('添加库存信息', '成功');
						$state.go("offerPrice",{code:$scope.codeList});

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