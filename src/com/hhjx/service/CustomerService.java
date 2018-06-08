package com.hhjx.service;

import java.text.ParseException;

import javax.servlet.http.HttpSession;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

public interface CustomerService {

	ResultMessage getCustomerListByPage(Page page);

	ResultMessage insertCustomer(CustomerData customer, HttpSession session) throws ParseException;

	ResultMessage updateCustomer(CustomerData customer);

	CustomerData findCustomerById(CustomerData customer);

	ResultMessage getCustomerListByPageById(Page page, HttpSession session);

	ResultMessage deleteCustomer(CustomerData customer);

	ResultMessage selectCustomer(HttpSession session);

	ResultMessage selectCustomerIdByName(CustomerData customer);
	
}

