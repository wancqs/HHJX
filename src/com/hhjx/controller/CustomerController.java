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
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;
import com.hhjx.utils.JsonUtil;

/**
 * 客户管理类
 * 
 * @author cqs 2018年2月1日
 */
@Controller
public class CustomerController {
	@Autowired
	private CustomerService customerService;

	// 查询用户列表
	@RequestMapping("getCustomerListByPage")
	@ResponseBody
	public ResultMessage getCustomerListByPage(String page) throws Exception {
		return customerService.getCustomerListByPage(JsonUtil.jsonToObject(page, Page.class));
	}
	
	// 查询用户列表
		@RequestMapping("getCustomerListByPageById")
		@ResponseBody
		public ResultMessage getCustomerListByPageById(String page,HttpSession session) throws Exception {
			return customerService.getCustomerListByPageById(JsonUtil.jsonToObject(page, Page.class),session);
		}

	// 添加客户资料
	@RequestMapping("newCustomer")
	@ResponseBody
	public ResultMessage newCustomer(String customerData,HttpSession session) throws Exception {
		return customerService.insertCustomer(JsonUtil.jsonToObject(customerData, CustomerData.class),session);
	}
	
	// 添加客户资料
	@RequestMapping("selectCustomer")
	@ResponseBody
	public ResultMessage selectCustomer(HttpSession session) throws Exception {
		return customerService.selectCustomer(session);
	}
	// 添加客户资料
	@RequestMapping("selectCustomerIdByName")
	@ResponseBody
	public ResultMessage selectCustomerIdByName(String customerData) throws Exception {
		return customerService.selectCustomerIdByName(JsonUtil.jsonToObject(customerData, CustomerData.class));
	}

	
	// 修改用户
	@RequestMapping("updateCustomer")
	@ResponseBody
	public ResultMessage updateCustomer(String customerData) throws Exception {
		return customerService.updateCustomer(JsonUtil.jsonToObject(customerData, CustomerData.class));
	}
	
	@RequestMapping("findCustomer")
	@ResponseBody
	public CustomerData findUser(String customerData) throws Exception {
		return customerService.findCustomerById(JsonUtil.jsonToObject(customerData, CustomerData.class));
	}
	
	@RequestMapping("adminDeleteCustomer")
	@ResponseBody
	public ResultMessage adminDeleteCustomer(String customerData) throws Exception {
		return customerService.deleteCustomer(JsonUtil.jsonToObject(customerData, CustomerData.class));
	}
}
