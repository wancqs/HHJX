controllers.controller("offerPrice", [ '$scope', '$http', '$state','$stateParams',
		function($scope, $http, $state,$stateParams) {

	    $scope.customerPriceList = [];
	    var codeList = [];
	    var dataList =[];
	    var list =[];
	    var userName = "";
	    var tmpDown; //导出的二进制对象
	    var json ="";
	    
	    $scope.page = new PageVo();
	    $scope.user = new UserVo();
	    $scope.customerPrice = new CustomerPriceVo();
        
	    var set = new Set();
	    //批量添加
	    var code = $stateParams.code;
	    $scope.page.keyWords = code;
	    //获取用户列表
	    $scope.getCustomerPriceList = function() {
	        //是否存在缓存页数
	        
	        var url = baseUrl + "getCustomerPriceListByPageByCode.do"
	        var data = {page:$scope.page.voToJson()}
	        
	        if(code.length<6){
	        	$http.post(url,data)
	            .success(function(data) {
	                if(data.serviceResult == 1) {
	                    list = data.resultParam;
	                    for(var i=0;i<list.length;i++){
	                    	if(userName!=list[i].userName){
	                    		list[i].customerName=null;
                    		}
	                    		delete list[i].id;
	                    		delete list[i].userId;
	                    		dataList.push(list[i])
	                    }
	                    $scope.customerPriceList = dataList;
	                    
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
		    }else{
		    	codeList = code.split(",");
		    	
		    	for(var i=0;i<codeList.length;i++){
		    		$scope.page.keyWords = codeList[i];
		    		data = {page:$scope.page.voToJson()}
		    		$http.post(url,data)
		            .success(function(data) {
		                if(data.serviceResult == 1) {
		                	list = data.resultParam;
		                    for(var i=0;i<list.length;i++){
		                    	
		                    	if(!set.has(list[i].id)){
		                    		set.add(list[i].id);
		                    		if(list[i].userName!=userName){
		                    			list[i].customerName=null;
		                    		}
		                    		delete list[i].id;
		                    		delete list[i].userId;
		                    		dataList.push(list[i])
		                    		
		                    	}
		                    	
		                    }
		                    
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
		    	console.log(dataList);
		    	$scope.customerPriceList = dataList;
		    	
		    }
	    }
	   
        //发送邮箱
	    $scope.sendEmail = function () {
	    	$scope.tranJson();
	    	 var url = baseUrl + "postUrl.do"
	         var data = {data:JSON.stringify(json)}
	         $http.post(url,data)
	         .success(function(data) {
	         	 if(data.serviceResult == 1) {
	         		alert('发送邮件成功');
	         	 }else{
	         		alert('发送邮件失败');
	         	 }
	         })
	         .error(function(data) {
	        	 alert('发送邮件失败');
	         	 });
	    }
	   
	    //跳转
	    $scope.toStock = function () {
	        $state.go("stock");
	    }
	    
	    //获取当前用户
	    $http.get(baseUrl + "getUserName.do")
	    .success(function (data) {
	    	console.log("用户名"+data)
	    	 userName=data;
	    	 $scope.getCustomerPriceList();
	    	}
	    )
	    
	      //文件导出
	   
        $scope.tranJson = function() {
        	json = dataList;
            var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
            	var c = "";
            	 keyMap.push(k);
            	switch(k){
            	case 'customerName':
            		c="贸易商名称";
            		break;
            	case 'description':
            		c="型号";
            		break;
            	case 'quantity':
            		c="数量";
            		break;
            	case 'brand':
            		c="品牌";
            		break;
            	case 'time':
            		c="年份";
            		break;
            	case 'price':
            		c="价格";
            		break;
            	case 'offer':
            		c="工厂目标价";
            		break;
            	case 'remark':
            		c="备注";
            		break;
            	case 'userName':
            		c="业务员";
            		break;
            	case 'intime':
            		c="录入时间";
            		break;
            	default:
            		c="";
            	}
            	json[0][k] = c;
                
            }
            
            console.log(json);
         
        }
	   
	    //文件导出
	   
        $scope.downloadExl = function() {
        	json = dataList;
            var tmpdata = json[0];
            json.unshift({});
            var keyMap = []; //获取keys
            for (var k in tmpdata) {
            	var c = "";
            	 keyMap.push(k);
            	switch(k){
            	case 'customerName':
            		c="贸易商名称";
            		break;
            	case 'description':
            		c="型号";
            		break;
            	case 'quantity':
            		c="数量";
            		break;
            	case 'brand':
            		c="品牌";
            		break;
            	case 'time':
            		c="年份";
            		break;
            	case 'price':
            		c="价格";
            		break;
            	case 'offer':
            		c="工厂目标价";
            		break;
            	case 'remark':
            		c="备注";
            		break;
            	case 'userName':
            		c="业务员";
            		break;
            	case 'intime':
            		c="录入时间";
            		break;
            	default:
            		c="";
            	}
            	json[0][k] = c;
                
            }
            
            console.log(json);
          var tmpdata = [];//用来保存转换好的json 
                json.map((v, i) => keyMap.map((k, j) => Object.assign({}, {
                    v: v[k],
                    position: (j > 25 ? $scope.getCharCol(j) : String.fromCharCode(65 + j)) + (i + 1)
                }))).reduce((prev, next) => prev.concat(next)).forEach((v, i) => tmpdata[v.position] = {
                    v: v.v
                });
                var outputPos = Object.keys(tmpdata); //设置区域,比如表格从A1到D10
                console.log(tmpdata);
                var tmpWB = {
                    SheetNames: ['mySheet'], //保存的表标题
                    Sheets: {
                        'mySheet': Object.assign({},
                            tmpdata, //内容
                            {
                                '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 2] //设置填充区域
                            })
                    }
                };
                tmpDown = new Blob([$scope.s2ab(XLSX.write(tmpWB, 
                    {bookType:'xlsx',bookSST: false, type: 'binary'}//这里的数据是用来定义导出的格式类型
                    ))], {
                }); //创建二进制对象写入转换好的字节流
            var href = URL.createObjectURL(tmpDown); //创建对象超链接
            
            document.getElementById("hf").href = href; //绑定a标签
            document.getElementById("hf").click(); //模拟点击实现下载
            setTimeout(function() { //延时释放
                URL.revokeObjectURL(tmpDown); //用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        }

        $scope.s2ab = function(s) { //字符串转字符流
            var buf = new ArrayBuffer(s.length);
            var view = new Uint8Array(buf);
            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
            return buf;
        }
       // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。
        $scope.getCharCol = function(n) {
            let temCol = '',
            s = '',
            m = 0
            while (n > 0) {
                m = n % 26 + 1
                s = String.fromCharCode(m + 64) + s
                n = (n - m) / 26
            }
            return s
        }

		} ]);