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
import com.hhjx.entity.CustomerPrice;
import com.hhjx.entity.Page;
import com.hhjx.entity.PageInfo;
import com.hhjx.entity.ResultMessage;
import com.hhjx.dao.CustomerDao;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.User;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;

@Service
public class CustomerServiceImpl implements CustomerService{

	@Autowired
	private CustomerDao customerDao;

	@Override
	public ResultMessage getCustomerListByPage(Page page) {
		page.coutStartColum();
		long total = customerDao.selectCustomerCount(page);
		List<CustomerData> customerlist = customerDao.selectCustomerByPage(page);
		PageInfo<CustomerData> pageInfo = new PageInfo<CustomerData>(page, total, customerlist);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage insertCustomer(CustomerData customer,HttpSession session) throws ParseException {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		customer.setIntime(sdf.format(date));
		int userId = Integer.parseInt(session.getAttribute("id").toString());
		customer.setUserId(userId);
		customerDao.insertCustomer(customer);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage updateCustomer(CustomerData customer) {
		customerDao.updateCustomer(customer);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}

	@Override
	public CustomerData findCustomerById(CustomerData customer) {
		int id = customer.getId();
		return customerDao.findCustomer(id);
		
	}

	@Override
	public ResultMessage getCustomerListByPageById(Page page, HttpSession session) {
		String type = "超级用户";
		long total = 0;
		List<CustomerData> customerList = null;
		System.out.println("用户ID查询-----"+session.getAttribute("id").toString());
		page.setUserId(Integer.parseInt(session.getAttribute("id").toString()));
		page.coutStartColum();
		if(type.equals(session.getAttribute("type").toString())){
			total = customerDao.selectCustomerCount(page);
			customerList = customerDao.selectCustomerByPage(page);
		}else{
			total = customerDao.selectCustomerCountById(page);
			customerList = customerDao.selectCustomerByPageById(page);
		}
		
		PageInfo<CustomerData> pageInfo = new PageInfo<CustomerData>(page, total, customerList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage deleteCustomer(CustomerData customer) {
		System.out.println("删除id用户----"+customer.getId());
		customerDao.deleteCustomerById(customer.getId());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage selectCustomer(HttpSession session) {
		List<CustomerData> customer = customerDao.selectCustomer(Integer.parseInt(session.getAttribute("id").toString()));
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", customer);
	}

	@Override
	public ResultMessage selectCustomerIdByName(CustomerData customerData) {
		int id = customerDao.selectCustomerIdByName(customerData.getName());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", id);
	}
	

}

