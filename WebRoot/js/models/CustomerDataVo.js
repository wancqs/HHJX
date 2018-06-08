if(typeof CustomerDataVo == 'undefined') {
	function CustomerDataVo() {
		this.id;
		this.userId;
		this.userName;
		this.code;
		this.name;
		this.password;
		this.type;
		this.contacts;
		this.phone;
		this.telephone;
		this.extendphone;
		this.fax;
		this.email;
		this.qq;
		this.product;
		this.remark;
		this.address;
		this.intime;
	}
}

CustomerDataVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
