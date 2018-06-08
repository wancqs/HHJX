package com.hhjx.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.plaf.synth.SynthSpinnerUI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import com.hhjx.utils.JsonUtil;
import com.mysql.jdbc.Blob;
import com.hhjx.constant.ResultCode;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.UserService;
import com.hhjx.utils.ExcelUtil;
import com.hhjx.utils.HttpClientUtil;
/**
 * 用户控制类
 * @author cqs
 *2018年1月29日
 */
@Controller
public class UserController {
	@Autowired
	private UserService userService;
	
	@RequestMapping("passLogin")           //账号密码登陆
	@ResponseBody
	public ResultMessage passLogin(String user,HttpSession session) throws Exception {
		return userService.login(JsonUtil.jsonToObject(user, User.class), session);
				
	}
	
	@RequestMapping("userIsLogin")           //判断用户是否登录
	@ResponseBody
	public ResultMessage userIsLogin(HttpSession session) throws Exception {
		return userService.userIsLogin(session);
				
	}
	
	@RequestMapping("checkPwd")           //判断用户密码
	@ResponseBody
	public boolean checkPwd(String user,HttpSession session) throws Exception {
		return userService.checkPwd(JsonUtil.jsonToObject(user, User.class), session);
				
	}
	
	@RequestMapping("showEmail")           //显示修改邮箱
	@ResponseBody
	public ResultMessage showEmail(String user,HttpSession session) throws Exception {
		return userService.showEmail(JsonUtil.jsonToObject(user, User.class), session);
				
	}
	
	@RequestMapping("saveEmail")           //保存修改邮箱
	@ResponseBody
	public ResultMessage saveEmail(String user,HttpSession session) throws Exception {
		return userService.saveEmail(JsonUtil.jsonToObject(user, User.class), session);
				
	}
	
	@RequestMapping("sendEmail")           //保存修改邮箱
	@ResponseBody
	public ResultMessage sendEmail(HttpSession session) throws Exception {
		return userService.sendEmail(session);
				
	}
	
	@RequestMapping("postUrl")           //保存修改邮箱
	@ResponseBody
	public ResultMessage postUrl(HttpSession session,String data) throws Exception {
		System.out.println(data);
		String path = this.getClass().getResource("/").getPath();
		ExcelUtil.parseJsonToExcel(path+"../../excel/"+session.getAttribute("name")+"历史报价.xlsx",data);
		return userService.sendEmail(session);
				
	}
	
	@RequestMapping("savePwd")           //判断用户密码
	@ResponseBody
	public boolean savePwd(String user,HttpSession session) throws Exception {
		return userService.savePwd(JsonUtil.jsonToObject(user, User.class), session);
				
	}
	
	@RequestMapping("userLogout")           //注销
	@ResponseBody
	public ResultMessage userLogout(HttpSession session) throws Exception {
		return userService.userLogout(session);
				
	}
	
	
	@RequestMapping("judgeName.do")                  //判断用户名是否被占用
	public void judgeName(HttpServletRequest request,HttpServletResponse response) throws IOException {
		String username=request.getParameter("username");
		User user=userService.findByUsername(username);
		
		if(user!=null) {                          //用户名已被占用，不能注册
			response.getWriter().write("0");
		}else {
			response.getWriter().write("1");      //用户名可用
		}
	}
	
	@RequestMapping("insertUser.do")               //插入用户
	public void updateStatus(HttpServletRequest request,HttpServletResponse response) throws IOException, Exception  {
		/*String username=request.getParameter("username");*/
		
		String phone=request.getParameter("phone");
		String password=request.getParameter("password");
		String email=request.getParameter("email");
		String username=request.getParameter("username");
		
		User newUser = new User();
		newUser.setName(username);
		newUser.setPassword(password);
		
		SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");   //设置日期格式
		Date now = df.parse(df.format(new Date()));  //df.format(new Date())为字符串，parse将字符串转换成Date类型
		
		userService.insertUser(newUser);
		
		response.getWriter().write("0");
	}
	
	
	@RequestMapping("getUserName")	           //获取当前session用户名
	@ResponseBody
	public String getUserName(HttpSession session) {

		return session.getAttribute("name").toString();
	}
	
	/**
	 * 退出登录
	 * @param session
	 */
	@RequestMapping("logout")
	@ResponseBody
	public String logout(HttpSession session){
		session.invalidate();
		return "1";
	}
	
	@RequestMapping("updatePass.do")                     //修改密码
	public void updatePass(HttpSession session,HttpServletRequest request,HttpServletResponse response) throws IOException {
		User user=(User) session.getAttribute("user");
		String newPass=request.getParameter("newPass");
		user.setPassword(newPass);
		userService.updateUser(user);
		response.getWriter().write("1");
		
	}
	

}
