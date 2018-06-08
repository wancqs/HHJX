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
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;
import com.hhjx.utils.JsonUtil;

/**
 * 管理员登录类
 * 
 * @author cqs 2018年2月1日
 */
@Controller
public class AdminController {
	@Autowired
	private AdminService adminService;

	// 管理员账号密码登陆
	@RequestMapping("adminLogin")
	@ResponseBody
	public ResultMessage adminLogin(String admin, HttpSession session) throws Exception {
		return adminService.login(JsonUtil.jsonToObject(admin, Admin.class), session);
	}

	// 通过用户名获取管理员信息
	@RequestMapping("adminIsLogin")
	@ResponseBody
	public ResultMessage adminIsLogin(HttpSession session) throws Exception {
		return adminService.adminIsLogin(session);
	}

	// 管理员注销接口
	@RequestMapping("adminLogout")
	@ResponseBody
	public ResultMessage adminLogout(HttpSession session) throws Exception {
		return adminService.adminLogout(session);
	}

	// 查询用户列表
	@RequestMapping("getUserListByPage")
	@ResponseBody
	public ResultMessage getUserListByPage(String page) throws Exception {
		return adminService.getUserListByPage(JsonUtil.jsonToObject(page, Page.class));
	}

	// 添加用户
	@RequestMapping("newUser")
	@ResponseBody
	public ResultMessage newUser(String user) throws Exception {
		return adminService.insertUser(JsonUtil.jsonToObject(user, User.class));
	}

	// 查看总数量信息
	@RequestMapping("welcome")
	@ResponseBody
	public List<Long> getAllData() {
		System.out.println("查询管理日志数据");
		return null;
	}

	// 删除用户
	@RequestMapping("adminDeleteUser")
	@ResponseBody
	public ResultMessage adminDeleteUser(String user) throws Exception {
		return adminService.deleteUserById(JsonUtil.jsonToObject(user, User.class));
	}


	@RequestMapping("findUser")
	@ResponseBody
	public User findUser(String user) throws Exception {
		return adminService.findUserById(JsonUtil.jsonToObject(user, User.class));
	}

	// 修改用户
	@RequestMapping("adminUpdateUser")
	@ResponseBody
	public ResultMessage adminUpdateUser(String user) throws Exception {
		System.out.println("---------"+user+"---------");
		return adminService.updateUser(JsonUtil.jsonToObject(user, User.class));
	}
}
