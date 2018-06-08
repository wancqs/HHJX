package com.hhjx.service;

import java.text.ParseException;

import javax.servlet.http.HttpSession;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Stock;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

public interface StockService {

	ResultMessage getStockListByPage(Page page);

	ResultMessage insertStock(Stock stock, HttpSession session) throws ParseException;

	ResultMessage updateStock(Stock stock);

	Stock findStockById(Stock stock);

	ResultMessage getStockListByPageById(Page page, HttpSession session);

	ResultMessage deleteStock(Stock stock);

	
}

