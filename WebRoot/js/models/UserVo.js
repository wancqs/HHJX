if(typeof UserVo == 'undefined') {
	function UserVo() {
		this.id;
		this.name;
		this.password;
		this.type;
		this.email;
	}
}

UserVo.prototype.voToJson = function() {
	return JSON.stringify(this);
}