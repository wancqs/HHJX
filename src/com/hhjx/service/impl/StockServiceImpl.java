package com.hhjx.service.impl;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import com.hhjx.utils.TimeUtil;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hhjx.constant.ResultCode;
import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Stock;
import com.hhjx.entity.Page;
import com.hhjx.entity.PageInfo;
import com.hhjx.entity.ResultMessage;
import com.hhjx.dao.CustomerDao;
import com.hhjx.dao.StockDao;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.User;
import com.hhjx.service.StockService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;

@Service
public class StockServiceImpl implements StockService{

	@Autowired
	private StockDao stockDao;

	@Override
	public ResultMessage getStockListByPage(Page page) {
		page.coutStartColum();
		long total = stockDao.selectStockCount(page);
		List<Stock> stockList = stockDao.selectStockByPage(page);
		PageInfo<Stock> pageInfo = new PageInfo<Stock>(page, total, stockList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage insertStock(Stock stock,HttpSession session) throws ParseException {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		stock.setIntime(sdf.format(date));
		int userId = Integer.parseInt(session.getAttribute("id").toString());
		stock.setUserId(userId);
		stockDao.insertStock(stock);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage updateStock(Stock stock) {
		stockDao.updateStock(stock);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}

	@Override
	public Stock findStockById(Stock stock) {
		int id = stock.getId();
		return stockDao.findStock(id);
		
	}

	@Override
	public ResultMessage getStockListByPageById(Page page, HttpSession session) {
		System.out.println("用户ID查询-----"+session.getAttribute("id").toString());
		page.setUserId(Integer.parseInt(session.getAttribute("id").toString()));
		page.coutStartColum();
		long total = stockDao.selectStockCountNoUser(page);
		List<Stock> stockList = stockDao.selectStockByPageNoUser(page);
		PageInfo<Stock> pageInfo = new PageInfo<Stock>(page, total, stockList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage deleteStock(Stock stock) {
		System.out.println("删除id----"+stock.getId());
		stockDao.deleteStockById(stock.getId());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}
	

}

