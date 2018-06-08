package com.hhjx.entity;

import java.util.Date;

public class Stock {

	private int id;
	private int userId;
	private int quantity;
	private String code;
	private String factoryName;
	private String factoryCode;
	private String description;
	private String userName;
	private String brand;
	private String time;
	private double price;
	private String remark;
	private String intime;
	
	
	
	
	public Stock() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Stock(int id, int userId, int quantity, String code, String factoryName, String factoryCode,
			String description, String userName, String brand, String time, double price, String remark,
			String intime) {
		super();
		this.id = id;
		this.userId = userId;
		this.quantity = quantity;
		this.code = code;
		this.factoryName = factoryName;
		this.factoryCode = factoryCode;
		this.description = description;
		this.userName = userName;
		this.brand = brand;
		this.time = time;
		this.price = price;
		this.remark = remark;
		this.intime = intime;
	}


	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public String getFactoryName() {
		return factoryName;
	}


	public void setFactoryName(String factoryName) {
		this.factoryName = factoryName;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public double getPrice() {
		return price;
	}
	public void setPrice(double price) {
		this.price = price;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	public String getIntime() {
		return intime;
	}
	public void setIntime(String intime) {
		this.intime = intime;
	}

	public String getCode() {
		return code;
	}


	public void setCode(String code) {
		this.code = code;
	}


	public String getFactoryCode() {
		return factoryCode;
	}


	public void setFactoryCode(String factoryCode) {
		this.factoryCode = factoryCode;
	}


	@Override
	public String toString() {
		return "Stock [id=" + id + ", userId=" + userId + ", quantity=" + quantity + ", code=" + code + ", factoryName="
				+ factoryName + ", factoryCode=" + factoryCode + ", description=" + description + ", userName="
				+ userName + ", brand=" + brand + ", time=" + time + ", price=" + price + ", remark=" + remark
				+ ", intime=" + intime + "]";
	}

	
}
