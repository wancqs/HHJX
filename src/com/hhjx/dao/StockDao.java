package com.hhjx.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hhjx.entity.CustomerData;
import com.hhjx.entity.Stock;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

/**
 * 用户dao层接口
 * @author cqs
 * 2017年1月29日
 */
@Repository("StockDao")
public interface StockDao {

	long selectStockCount(Page page);

	List<Stock> selectStockByPage(Page page);

	void insertStock(Stock stock);

	Stock findStock(int id);

	void updateStock(Stock stock);

	List<Stock> selectStockByPageById(Page page);

	void deleteStockById(int id);

	long selectStockCountById(Page page);

	List<Stock> selectStockByPageNoUser(Page page);

	long selectStockCountNoUser(Page page);

	

}
