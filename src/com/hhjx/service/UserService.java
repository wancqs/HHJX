package com.hhjx.service;

import javax.servlet.http.HttpSession;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

public interface UserService {
	User findByUsername(String name);
		
	void updateUser(User user);
	
	ResultMessage login(User user,HttpSession session);

	ResultMessage userIsLogin(HttpSession session);

	ResultMessage userLogout(HttpSession session);

	void insertUser(User user);

	boolean checkPwd(User user,HttpSession session);

	boolean savePwd(User user, HttpSession session);

	ResultMessage showEmail(User user, HttpSession session);

	ResultMessage saveEmail(User user, HttpSession session);

	ResultMessage sendEmail(HttpSession session) throws Exception;
}

