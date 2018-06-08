package com.hhjx.entity;

import java.util.Date;

public class FactoryData {

	private int id;
	private int userId;
	private String userName;
	private String code;
	private String name;
	private String type;
	private String contacts;
	private String phone;
	private String telephone;
	private String extendphone;
	private String fax;
	private String email;
	private String qq;
	private String wechat;
	private String product;
	private String remark;
	private String address;
	private Date clock;
	private String intime;

	public FactoryData() {
		super();
		// TODO Auto-generated constructor stub
	}

	public FactoryData(int id, int userId, String userName, String code, String name, String type, String contacts,
			String phone, String telephone, String extendphone, String fax, String email, String qq, String wechat,
			String product, String remark, String address, Date clock, String intime) {
		super();
		this.id = id;
		this.userId = userId;
		this.userName = userName;
		this.code = code;
		this.name = name;
		this.type = type;
		this.contacts = contacts;
		this.phone = phone;
		this.telephone = telephone;
		this.extendphone = extendphone;
		this.fax = fax;
		this.email = email;
		this.qq = qq;
		this.wechat = wechat;
		this.product = product;
		this.remark = remark;
		this.address = address;
		this.clock = clock;
		this.intime = intime;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getContacts() {
		return contacts;
	}

	public void setContacts(String contacts) {
		this.contacts = contacts;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getExtendphone() {
		return extendphone;
	}

	public void setExtendphone(String extendphone) {
		this.extendphone = extendphone;
	}

	public String getFax() {
		return fax;
	}

	public void setFax(String fax) {
		this.fax = fax;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getQq() {
		return qq;
	}

	public void setQq(String qq) {
		this.qq = qq;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getRemark() {
		return remark;
	}

	public void setRemark(String remark) {
		this.remark = remark;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getIntime() {
		return intime;
	}

	public void setIntime(String intime) {
		this.intime = intime;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getWechat() {
		return wechat;
	}

	public void setWechat(String wechat) {
		this.wechat = wechat;
	}

	public Date getClock() {
		return clock;
	}

	public void setClock(Date clock) {
		this.clock = clock;
	}

	@Override
	public String toString() {
		return "FactoryData [id=" + id + ", userId=" + userId + ", userName=" + userName + ", code=" + code + ", name="
				+ name + ", type=" + type + ", contacts=" + contacts + ", phone=" + phone + ", telephone=" + telephone
				+ ", extendphone=" + extendphone + ", fax=" + fax + ", email=" + email + ", qq=" + qq + ", wechat="
				+ wechat + ", product=" + product + ", remark=" + remark + ", address=" + address + ", clock=" + clock
				+ ", intime=" + intime + "]";
	}

}
