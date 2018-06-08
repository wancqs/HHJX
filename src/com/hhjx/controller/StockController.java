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
import com.hhjx.entity.Stock;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;
import com.hhjx.service.AdminService;
import com.hhjx.service.StockService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;
import com.hhjx.utils.JsonUtil;

/**
 * 报价管理类
 * 
 * @author cqs 2018年2月1日
 */
@Controller
public class StockController {
	@Autowired
	private StockService stockService;

	// 查询用户列表
	@RequestMapping("getStockListByPage")
	@ResponseBody
	public ResultMessage getStockListByPage(String page) throws Exception {
		return stockService.getStockListByPage(JsonUtil.jsonToObject(page, Page.class));
	}
	
	// 查询用户列表
		@RequestMapping("getStockListByPageById")
		@ResponseBody
		public ResultMessage getStockListByPageById(String page,HttpSession session) throws Exception {
			return stockService.getStockListByPageById(JsonUtil.jsonToObject(page, Page.class),session);
		}

	// 添加客户资料
	@RequestMapping("newStock")
	@ResponseBody
	public ResultMessage newStock(String stock,HttpSession session) throws Exception {
		return stockService.insertStock(JsonUtil.jsonToObject(stock, Stock.class),session);
	}

	
	// 修改用户
	@RequestMapping("updateStock")
	@ResponseBody
	public ResultMessage updateStock(String stock) throws Exception {
		return stockService.updateStock(JsonUtil.jsonToObject(stock, Stock.class));
	}
	
	@RequestMapping("findStock")
	@ResponseBody
	public Stock findStock(String stock) throws Exception {
		return stockService.findStockById(JsonUtil.jsonToObject(stock, Stock.class));
	}
	
	@RequestMapping("adminDeleteStock")
	@ResponseBody
	public ResultMessage adminDeleteStock(String stock) throws Exception {
		return stockService.deleteStock(JsonUtil.jsonToObject(stock, Stock.class));
	}
	
	
}
