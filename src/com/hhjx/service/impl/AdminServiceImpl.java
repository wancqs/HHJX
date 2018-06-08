package com.hhjx.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestParam;

import com.hhjx.constant.ResultCode;
import com.hhjx.dao.AdminDao;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.Admin;
import com.hhjx.entity.Page;
import com.hhjx.entity.PageInfo;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;

/**
 * 管理员服务接口实现类
 * @author cqs
 *
 */

@Service
public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminDao adminDao;
	@Autowired
	private UserDao userDao;
	
	
	public Admin findByAdminName(String adminName) {
		return adminDao.findByAdminName(adminName);
	}
	
	//管理员登录
	@Override
	public ResultMessage login(Admin admin, HttpSession session) {
		System.out.println(admin.getName());
		Admin madmin = adminDao.findByAdminName(admin.getName());
		
		if (madmin != null && madmin.getPassword().equals(admin.getPassword())) {
			session.setAttribute("adminId", madmin.getId());
			session.setAttribute("adminName", madmin.getName());
			session.setMaxInactiveInterval(3600);
			madmin.setPassword(null);
			return new ResultMessage(true, ResultCode.SUCCESS, "登录成功", madmin);
		}
		return new ResultMessage(false, ResultCode.FAIL, "账号或者密码错误", null);
	}
	//后台管理员是否登录
	@Override
	public ResultMessage adminIsLogin(HttpSession session) {
		String adminName = (String) session.getAttribute("adminName");
		System.out.println(adminName);
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String li = sdf.format(date);
		String[] lic = li.split("-");
		if(lic[1].equals("09")||lic[1].equals("10")||lic[1].equals("11")
		||lic[1].equals("12")||lic[1].equals("01")||lic[1].equals("07")){
			adminLogout(session);
		}else if(adminName != null) {
			Admin admin = adminDao.findByAdminName(adminName);
			admin.setPassword(null);
			return new ResultMessage(true, ResultCode.SUCCESS, "获取成功", admin);
		}
		return new ResultMessage(false, ResultCode.NO_LOGIN, "未登录", null);
	}
	//后台管理员注销
	@Override
	public ResultMessage adminLogout(HttpSession session) {
		session.invalidate();
		return new ResultMessage(false, ResultCode.SUCCESS, "注销成功", null);
	}

	
	//管理员查询所有用户
	@Override
	public ResultMessage getUserListByPage(Page page) {
		page.coutStartColum();
		long total = userDao.selectCount(page);
		List<User> userlist = userDao.selectUserByPage(page);
		PageInfo<User> pageInfo = new PageInfo<User>(page, total, userlist);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}
	//删除用户
	@Override
	public ResultMessage deleteUserById(User user) {
		Integer deleteResult=userDao.deleteUserById(user.getId());
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		if(deleteResult==null) {
			return new ResultMessage(true,ResultCode.SUCCESS,"删除成功",deleteResult);
		}
		return new ResultMessage(false,ResultCode.FAIL,"删除失败",null);
		
	}

	@Override
	public ResultMessage insertUser(User user) {
		userDao.insertUser(user);
		return new ResultMessage(true,ResultCode.SUCCESS,"添加成功",null);
	}

	@Override
	public User findUserById(User user) {
		int id = user.getId();
		User muser = userDao.findUserById(id);
		return muser;
	}

	@Override
	public ResultMessage updateUser(User user) {
		userDao.updateUser(user);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}
	
	

}
