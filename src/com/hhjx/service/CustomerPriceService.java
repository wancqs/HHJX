package com.hhjx.service;

import java.text.ParseException;

import javax.servlet.http.HttpSession;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.CustomerPrice;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

public interface CustomerPriceService {

	ResultMessage getCustomerPriceListByPage(Page page);

	ResultMessage insertCustomerPrice(CustomerPrice customerPrice, HttpSession session) throws ParseException;

	ResultMessage updateCustomerPrice(CustomerPrice customerPrice);

	CustomerPrice findCustomerPriceById(CustomerPrice customerPrice);

	ResultMessage getCustomerPriceListByPageById(Page page, HttpSession session);

	ResultMessage deleteCustomerPrice(CustomerPrice customerPrice);

	ResultMessage getCustomerPriceListByPageByCode(Page page, HttpSession session);

	
}

