package com.hhjx.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.hhjx.entity.Page;
import com.hhjx.entity.User;

/**
 * 用户dao层接口
 * @author cqs
 * 2017年1月29日
 */
@Repository("userDao")
public interface UserDao {
	// 通过id查询用户名
	User selectUserNameByPrimaryKey(Integer id);
	
	User findByUserName(String name);
	
	User findByUserPhone(String phone);
	
	User findByUserEmail(String email);
	
	void insertUser(User user);
	
	void updateUser(User user);
	//条件分页查询总数
	long selectCount(Page page);
	//条件分页查询用户列表
	List<User> selectUserByPage(Page page);
	//根据ID删除用户
	Integer deleteUserById(Integer id);
	//查询用户数据总数
	long selectCountByTime(long i);
	//根据登录次数查询用户总数
	long selectCountByLoginCount(long i);

	User findUserById(int id);

	List<User> findByUserType(String type);
	
	

}
