package com.hhjx.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hhjx.entity.Admin;
import com.hhjx.entity.CustomerData;
import com.hhjx.entity.CustomerPrice;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;
import com.hhjx.service.CustomerPriceService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;
import com.hhjx.utils.JsonUtil;

/**
 * 报价管理类
 * 
 * @author cqs 2018年2月1日
 */
@Controller
public class CustomerPriceController {
	@Autowired
	private CustomerPriceService customerPriceService;

	// 查询贸易商列表
	@RequestMapping("getCustomerPriceListByPage")
	@ResponseBody
	public ResultMessage getCustomerPriceListByPage(String page) throws Exception {
		return customerPriceService.getCustomerPriceListByPage(JsonUtil.jsonToObject(page, Page.class));
	}
	
	// 查询贸易商列表
	@RequestMapping("getCustomerPriceListByPageById")
	@ResponseBody
	public ResultMessage getCustomerPriceListByPageById(String page,HttpSession session) throws Exception {
		return customerPriceService.getCustomerPriceListByPageById(JsonUtil.jsonToObject(page, Page.class),session);
	}
	
	// 查询贸易商列表
	@RequestMapping("getCustomerPriceListByPageByCode")
	@ResponseBody
	public ResultMessage getCustomerPriceListByPageByCode(String page,HttpSession session) throws Exception {
		return customerPriceService.getCustomerPriceListByPageByCode(JsonUtil.jsonToObject(page, Page.class),session);
	}

	// 添加客户资料
	@RequestMapping("newCustomerPrice")
	@ResponseBody
	public ResultMessage newCustomerPrice(String customerPrice,HttpSession session) throws Exception {
		return customerPriceService.insertCustomerPrice(JsonUtil.jsonToObject(customerPrice, CustomerPrice.class),session);
	}

	
	// 修改用户
	@RequestMapping("updateCustomerPrice")
	@ResponseBody
	public ResultMessage updateCustomerPrice(String customerPrice) throws Exception {
		return customerPriceService.updateCustomerPrice(JsonUtil.jsonToObject(customerPrice, CustomerPrice.class));
	}
	
	@RequestMapping("findCustomerPrice")
	@ResponseBody
	public CustomerPrice findCustomerPrice(String customerPrice) throws Exception {
		return customerPriceService.findCustomerPriceById(JsonUtil.jsonToObject(customerPrice, CustomerPrice.class));
	}
	
	@RequestMapping("adminDeleteCustomerPrice")
	@ResponseBody
	public ResultMessage adminDeleteCustomerPrice(String customerPrice) throws Exception {
		return customerPriceService.deleteCustomerPrice(JsonUtil.jsonToObject(customerPrice, CustomerPrice.class));
	}
	
	
}
