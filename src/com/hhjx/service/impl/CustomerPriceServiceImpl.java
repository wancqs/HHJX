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
import com.hhjx.dao.CustomerPriceDao;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.User;
import com.hhjx.service.CustomerPriceService;
import com.hhjx.service.CustomerService;
import com.hhjx.service.UserService;

@Service
public class CustomerPriceServiceImpl implements CustomerPriceService{

	@Autowired
	private CustomerPriceDao customerPriceDao;

	@Override
	public ResultMessage getCustomerPriceListByPage(Page page) {
		page.coutStartColum();
		long total = customerPriceDao.selectCustomerPriceCount(page);
		List<CustomerPrice> customerPriceList = customerPriceDao.selectCustomerPriceByPage(page);
		PageInfo<CustomerPrice> pageInfo = new PageInfo<CustomerPrice>(page, total, customerPriceList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage insertCustomerPrice(CustomerPrice customerPrice,HttpSession session) throws ParseException {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		customerPrice.setIntime(sdf.format(date));
		int userId = Integer.parseInt(session.getAttribute("id").toString());
		customerPrice.setUserId(userId);
		customerPriceDao.insertCustomerPrice(customerPrice);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage updateCustomerPrice(CustomerPrice customerPrice) {
		customerPriceDao.updateCustomerPrice(customerPrice);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}

	@Override
	public CustomerPrice findCustomerPriceById(CustomerPrice customerPrice) {
		int id = customerPrice.getId();
		return customerPriceDao.findCustomerPrice(id);
		
	}

	@Override
	public ResultMessage getCustomerPriceListByPageById(Page page, HttpSession session) {
		String type = "超级用户";
		long total = 0;
		List<CustomerPrice> customerPriceList = null;
		System.out.println("用户ID查询-----"+session.getAttribute("id").toString());
		page.setUserId(Integer.parseInt(session.getAttribute("id").toString()));
		page.coutStartColum();
		if(type.equals(session.getAttribute("type").toString())){
			total = customerPriceDao.selectCustomerPriceCount(page);
			customerPriceList = customerPriceDao.selectCustomerPriceByPage(page);
		}else{
			total = customerPriceDao.selectCustomerPriceCountById(page);
			customerPriceList = customerPriceDao.selectCustomerPriceByPageById(page);
		}
		
		PageInfo<CustomerPrice> pageInfo = new PageInfo<CustomerPrice>(page, total, customerPriceList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage deleteCustomerPrice(CustomerPrice customerPrice) {
		System.out.println("删除id----"+customerPrice.getId());
		customerPriceDao.deleteCustomerPriceById(customerPrice.getId());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage getCustomerPriceListByPageByCode(Page page, HttpSession session) {
		System.out.println("用户ID查询-----"+session.getAttribute("id").toString());
		page.setUserId(Integer.parseInt(session.getAttribute("id").toString()));
//		page.coutStartColum();
		long total = customerPriceDao.selectCustomerPriceCountByCode(page);
		List<CustomerPrice> customerPriceList = customerPriceDao.selectCustomerPriceByPageByCode(page);
//		PageInfo<CustomerPrice> pageInfo = new PageInfo<CustomerPrice>(page, total, customerPriceList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", customerPriceList);
	}
	

}

