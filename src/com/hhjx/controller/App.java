package com.hhjx.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class App {
	@RequestMapping("user")
	public String index(){
		return "redirect:pages/user/userLogin.html";
	}
	
	@RequestMapping("admin")
	public String admin(){
		return "redirect:pages/admin/adminLogin.html";
	}

}
