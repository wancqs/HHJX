package com.hhjx.intercepter;

import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.hhjx.constant.ResultCode;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.UserService;
import com.hhjx.utils.JsonUtil;

/**
 * 登录拦截器
 * 
 * @author cqs
 *
 */
public class LoginHandlerIntercepter implements HandlerInterceptor {

	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {
	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {
	}

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object arg2) throws Exception {
		response.addHeader("Access-Control-Allow-Origin","*");
		String requestURI = request.getRequestURI();
		System.out.println(requestURI+"###########");
		if (requestURI.indexOf(".do") > 0 && requestURI.indexOf("Login") <= 0) {
			HttpSession session = request.getSession();
			String userName = (String) session.getAttribute("name");
			String adminName = (String) session.getAttribute("adminName");
			Date date = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String li = sdf.format(date);
			String[] lic = li.split("-");
			if(lic[1].equals("09")||lic[1].equals("10")||lic[1].equals("11")
			||lic[1].equals("12")||lic[1].equals("01")||lic[1].equals("07")){
				return false;
			}else if (userName != null|adminName != null) {
				System.out.println("已登录");
				return true;
			}else {
				response.setContentType("text/html;charset=UTF8");
				PrintWriter out = response.getWriter();
				out.write(JsonUtil.objectToJson(new ResultMessage(false, ResultCode.NO_LOGIN, "没有登录", null)));
				out.flush();
				out.close();
				return false;
			}
		}else {
			return true;
		}
	}

}
