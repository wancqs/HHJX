package com.hhjx.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

/**
 * 用户dao层接口
 * @author cqs
 * 2017年1月29日
 */
@Repository("customerDao")
public interface CustomerDao {

	long selectCustomerCount(Page page);

	List<CustomerData> selectCustomerByPage(Page page);

	void insertCustomer(CustomerData customer);

	CustomerData findCustomer(int id);

	void updateCustomer(CustomerData customer);

	List<CustomerData> selectCustomerByPageById(Page page);
	
	List<CustomerData> selectCustomer(int id);

	void deleteCustomerById(int id);

	int selectCustomerIdByName(String name);

	long selectCustomerCountById(Page page);
	

}
