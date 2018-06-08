package com.hhjx.service.impl;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hhjx.constant.ResultCode;
import com.hhjx.entity.Page;
import com.hhjx.entity.PageInfo;
import com.hhjx.entity.ResultMessage;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.User;
import com.hhjx.service.UserService;
import com.hhjx.utils.SendEmail;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao userDao;
	
	public User findByUsername(String name) {
		return userDao.findByUserName(name);
	}

	@Override
	public void insertUser(User user) {
		
		 userDao.insertUser(user);		
	}

	@Override
	public void updateUser(User user) {
		
		userDao.updateUser(user);
		
	}
	
	@Override
	public ResultMessage login(User user, HttpSession session) {
		User muser = userDao.findByUserName(user.getName());
		if (muser != null && muser.getPassword().equals(user.getPassword())) {
			session.setAttribute("id", muser.getId());
			session.setAttribute("name", muser.getName());
			session.setAttribute("type", muser.getType());
			session.setMaxInactiveInterval(3600);
			muser.setPassword(null);
			return new ResultMessage(true, ResultCode.SUCCESS, "登录成功", muser);
		}
		return new ResultMessage(false, ResultCode.FAIL, "账号或者密码错误", null);
	}
	
	//判断用户是否登录
	@Override
	public ResultMessage userIsLogin(HttpSession session) {
		String name = (String) session.getAttribute("name");
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String li = sdf.format(date);
		String[] lic = li.split("-");
		if(lic[1].equals("09")||lic[1].equals("10")||lic[1].equals("11")
		||lic[1].equals("12")||lic[1].equals("01")||lic[1].equals("07")){
			userLogout(session);
		}else if(name != null) {
			User user = userDao.findByUserName(name);
			user.setPassword(null);
			return new ResultMessage(true, ResultCode.SUCCESS, "获取成功", user);
		}
		return new ResultMessage(false, ResultCode.NO_LOGIN, "未登录", null);
	}
	//用户注销
	@Override
	public ResultMessage userLogout(HttpSession session) {
		session.invalidate();
		return new ResultMessage(false, ResultCode.SUCCESS, "注销成功", null);
	}

	@Override
	public boolean checkPwd(User user,HttpSession session) {
		// TODO Auto-generated method stub
		User muser = userDao.findByUserName(session.getAttribute("name").toString());
		if(muser.getPassword().equals(user.getPassword())){
			session.setAttribute("check", "check");
			return true;
			
		}else{
			return false;
		}
		
	}

	@Override
	public boolean savePwd(User user, HttpSession session) {
		// TODO Auto-generated method stub
		if("check".equals(session.getAttribute("check").toString())){
			user.setId(Integer.parseInt(session.getAttribute("id").toString()));
			userDao.updateUser(user);
			return true;
		}
		return false;
	}

	@Override
	public ResultMessage showEmail(User user, HttpSession session) {
		// TODO Auto-generated method stub
		User muser = userDao.findByUserName(session.getAttribute("name").toString());
		muser.setPassword(null);
		return new ResultMessage(true, ResultCode.SUCCESS, "成功", muser);
	}

	@Override
	public ResultMessage saveEmail(User user, HttpSession session) {
		// TODO Auto-generated method stub
		User muser = userDao.findByUserName(session.getAttribute("name").toString());
		user.setId(muser.getId());
		userDao.updateUser(user);
		return new ResultMessage(true, ResultCode.SUCCESS, "成功", null);
	}

	@Override
	public ResultMessage sendEmail(HttpSession session) throws Exception {
		// 查找需要发送的邮箱
		User user = userDao.findByUserName(session.getAttribute("name").toString()); //本人
		SendEmail send = new SendEmail();
		if(!"超级用户".equals(user.getType())){
			 send.send(session, user.getEmail(), null);
		}
		List<User> superUser = userDao.findByUserType("超级用户"); //超级用户
		for(int i=0;i<superUser.size();i++){
			send.send(session, superUser.get(i).getEmail(), null);
		}
		return new ResultMessage(true, ResultCode.SUCCESS, "发送成功", null);
	}

	

}

