if(typeof CustomerPriceVo == 'undefined') {
	function CustomerPriceVo() {
		this.id;
		this.userId;
		this.customerId;
		this.userName;
		this.code;
		this.quantity;
		this.description;
		this.brand;
		this.time;
		this.price;
		this.offer;
		this.customerName;
		this.fax;
		this.email;
		this.qq;
		this.customer;
		this.remark;
		this.intime;
	}
}

CustomerPriceVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
