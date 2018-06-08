package com.hhjx.service;

import java.util.List;
import javax.servlet.http.HttpSession;
import com.hhjx.entity.Admin;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

/**
 * 管理员服务接口类
 * @author cqs
 *
 */
public interface AdminService {

	Admin findByAdminName(String name);
	//登录接口
	ResultMessage login(Admin admin,HttpSession session);
	//判定后台管理员是否登录
	ResultMessage adminIsLogin(HttpSession session);
	//后台管理员注销
	ResultMessage adminLogout(HttpSession session);
	//查询用户
	ResultMessage getUserListByPage(Page page);
	//删除用户
	ResultMessage deleteUserById(User user);
	
	ResultMessage insertUser(User user);
	
	User findUserById(User user);
	
	ResultMessage updateUser(User user);
		

}
