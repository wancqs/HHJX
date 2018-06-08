if(typeof FactoryDataVo == 'undefined') {
	function FactoryDataVo() {
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
		this.wechat;
		this.product;
		this.remark;
		this.address;
		this.clock;
		this.intime;
	}
}

FactoryDataVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}
