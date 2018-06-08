package com.hhjx.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hhjx.entity.FactoryData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

/**
 * 用户dao层接口
 * @author cqs
 * 2017年1月29日
 */
@Repository("FactoryDao")
public interface FactoryDao {

	long selectFactoryCount(Page page);

	List<FactoryData> selectFactoryByPage(Page page);

	void insertFactory(FactoryData factory);

	FactoryData findFactory(int id);

	void updateFactory(FactoryData factory);

	List<FactoryData> selectFactoryByPageById(Page page);
	
	List<FactoryData> selectFactory(int id);

	void deleteFactoryById(int id);

	int selectFactoryIdByName(String name);

	List<FactoryData> selectFactoryByUserId(int id);
	
	List<FactoryData> selectFactoryNoId();

	List<FactoryData> aselectFactory();
	
	List<FactoryData> selectFactoryName();

	long selectFactoryCountById(Page page);

	List<FactoryData> selectFactoryByDay(Page page);

	List<FactoryData> selectFactoryByDayById(Page page);

}
