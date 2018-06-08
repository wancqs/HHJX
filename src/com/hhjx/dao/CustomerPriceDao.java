package com.hhjx.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.CustomerPrice;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

/**
 * 用户dao层接口
 * @author cqs
 * 2017年1月29日
 */
@Repository("customerPriceDao")
public interface CustomerPriceDao {

	long selectCustomerPriceCount(Page page);

	List<CustomerPrice> selectCustomerPriceByPage(Page page);

	void insertCustomerPrice(CustomerPrice customerPrice);

	CustomerPrice findCustomerPrice(int id);

	void updateCustomerPrice(CustomerPrice customerPrice);

	List<CustomerPrice> selectCustomerPriceByPageById(Page page);

	void deleteCustomerPriceById(int id);

	List<CustomerPrice> selectCustomerPriceByPageByCode(Page page);

	long selectCustomerPriceCountByCode(Page page);

	long selectCustomerPriceCountById(Page page);

	

}
