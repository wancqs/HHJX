package com.hhjx.entity;

import java.util.Date;

public class CustomerPrice {

	private int id;
	private int userId;
	private String customerName;
	private String description;
	private int quantity;
	private String brand;
	private String time;
	private double price;
	private double offer;
	private String remark;
	private String userName;
	private String intime;
	
	
	
	
	public CustomerPrice() {
		super();
		// TODO Auto-generated constructor stub
	}




	public CustomerPrice(int id, int userId, String customerName, String description, int quantity, String brand,
			String time, double price, double offer, String remark, String userName, String intime) {
		super();
		this.id = id;
		this.userId = userId;
		this.customerName = customerName;
		this.description = description;
		this.quantity = quantity;
		this.brand = brand;
		this.time = time;
		this.price = price;
		this.offer = offer;
		this.remark = remark;
		this.userName = userName;
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




	public String getCustomerName() {
		return customerName;
	}




	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}




	public String getDescription() {
		return description;
	}




	public void setDescription(String description) {
		this.description = description;
	}




	public int getQuantity() {
		return quantity;
	}




	public void setQuantity(int quantity) {
		this.quantity = quantity;
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




	public double getOffer() {
		return offer;
	}




	public void setOffer(double offer) {
		this.offer = offer;
	}




	public String getRemark() {
		return remark;
	}




	public void setRemark(String remark) {
		this.remark = remark;
	}




	public String getUserName() {
		return userName;
	}




	public void setUserName(String userName) {
		this.userName = userName;
	}




	public String getIntime() {
		return intime;
	}




	public void setIntime(String intime) {
		this.intime = intime;
	}




	@Override
	public String toString() {
		return "CustomerPrice [id=" + id + ", userId=" + userId + ", customerName=" + customerName + ", description="
				+ description + ", quantity=" + quantity + ", brand=" + brand + ", time=" + time + ", price=" + price
				+ ", offer=" + offer + ", remark=" + remark + ", userName=" + userName + ", intime=" + intime + "]";
	}
	
	
	


	
}
