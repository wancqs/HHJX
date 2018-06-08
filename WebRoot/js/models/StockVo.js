if(typeof StockVo == 'undefined') {
	function StockVo() {
		this.id;
		this.userId;
		this.factoryId;
		this.userName;
		this.code;
		this.quantity;
		this.description;
		this.brand;
		this.time;
		this.price;
		this.factoryName;
		this.factoryCode;
		this.factory;
		this.remark;
		this.intime;
	}
}

StockVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
