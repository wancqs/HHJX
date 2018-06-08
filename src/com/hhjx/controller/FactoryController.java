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
import com.hhjx.entity.FactoryData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.FactoryService;
import com.hhjx.service.UserService;
import com.hhjx.utils.JsonUtil;

/**
 * 客户管理类
 * 
 * @author cqs 2018年2月1日
 */
@Controller
public class FactoryController {
	@Autowired
	private FactoryService factoryService;

	// 查询用户列表
	@RequestMapping("getFactoryListByPage")
	@ResponseBody
	public ResultMessage getFactoryListByPage(String page) throws Exception {
		return factoryService.getFactoryListByPage(JsonUtil.jsonToObject(page, Page.class));
	}
	
	@RequestMapping("getFactoryCodeByName")
	@ResponseBody
	public ResultMessage getFactoryCodeByName(String factoryData) throws Exception {
		return factoryService.getFactoryCodeByName(JsonUtil.jsonToObject(factoryData, FactoryData.class));
	}
	
	// 查询用户列表
		@RequestMapping("getFactoryListByPageById")
		@ResponseBody
		public ResultMessage getFactoryListByPageById(String page,HttpSession session) throws Exception {
			return factoryService.getFactoryListByPageById(JsonUtil.jsonToObject(page, Page.class),session);
		}

	// 添加客户资料
	@RequestMapping("newFactory")
	@ResponseBody
	public ResultMessage newFactory(String factoryData,HttpSession session) throws Exception {
		System.out.println("factoryData is"+factoryData.toString());
		return factoryService.insertFactory(JsonUtil.jsonToObject(factoryData, FactoryData.class),session);
	}
	
	// 添加客户资料
	@RequestMapping("selectFactory")
	@ResponseBody
	public ResultMessage selectFactory(HttpSession session) throws Exception {
		return factoryService.selectFactory(session);
	}
	
	// 添加客户资料
		@RequestMapping("selectFactoryByAdmin")
		@ResponseBody
		public ResultMessage selectFactoryByAdmin() throws Exception {
			return factoryService.aselectFactory();
		}
	// 添加客户资料
	@RequestMapping("selectFactoryIdByName")
	@ResponseBody
	public ResultMessage selectFactoryIdByName(String factoryData) throws Exception {
		return factoryService.selectFactoryIdByName(JsonUtil.jsonToObject(factoryData, FactoryData.class));
	}

	
	// 修改用户
	@RequestMapping("updateFactory")
	@ResponseBody
	public ResultMessage updateFactory(String factoryData) throws Exception {
		return factoryService.updateFactory(JsonUtil.jsonToObject(factoryData, FactoryData.class));
	}
	
	@RequestMapping("findFactory")
	@ResponseBody
	public FactoryData findFactory(String factoryData) throws Exception {
		return factoryService.findFactoryById(JsonUtil.jsonToObject(factoryData, FactoryData.class));
	}
	
	@RequestMapping("adminDeleteFactory")
	@ResponseBody
	public ResultMessage adminDeleteFactory(String factoryData) throws Exception {
		return factoryService.deleteFactory(JsonUtil.jsonToObject(factoryData, FactoryData.class));
	}
	
	@RequestMapping("show")
	@ResponseBody
	public ResultMessage show(HttpSession session) throws Exception {
		return factoryService.show(session);
	}
	
	@RequestMapping("adminShow")
	@ResponseBody
	public ResultMessage adminShow() throws Exception {
		return factoryService.adminShow();
	}
}
