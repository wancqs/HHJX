package com.hhjx.service.impl;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.hhjx.utils.ChineseCharToUtil;
import com.hhjx.utils.TimeUtil;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hhjx.constant.ResultCode;
import com.hhjx.entity.CustomerData;
import com.hhjx.entity.FactoryData;
import com.hhjx.entity.Page;
import com.hhjx.entity.PageInfo;
import com.hhjx.entity.ResultMessage;
import com.hhjx.dao.FactoryDao;
import com.hhjx.dao.UserDao;
import com.hhjx.entity.User;
import com.hhjx.service.FactoryService;
import com.hhjx.service.FactoryService;
import com.hhjx.service.UserService;

@Service
public class FactoryServiceImpl implements FactoryService{

	@Autowired
	private FactoryDao factoryDao;

	@Override
	public ResultMessage getFactoryListByPage(Page page) {
		page.coutStartColum();
		long total = factoryDao.selectFactoryCount(page);
		List<FactoryData> factorylist = factoryDao.selectFactoryByPage(page);
		PageInfo<FactoryData> pageInfo = new PageInfo<FactoryData>(page, total, factorylist);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage insertFactory(FactoryData factory,HttpSession session) throws ParseException {
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		factory.setIntime(sdf.format(date));
		
		//转首字母
		String code;
		if(factory.getCode()==null){
			if(factory.getName().length()>7){
				code = ChineseCharToUtil.getAllFirstLetter(factory.getName().substring(0,7));
			}else{
				code = ChineseCharToUtil.getAllFirstLetter(factory.getName());
			}
			factory.setCode(ChineseCharToUtil.getAllFirstLetter(code).toUpperCase());
		}else{
			factory.setCode(factory.getCode().toUpperCase());
		}
		//设置默认跟进时间
		if(factory.getClock()==null){
			factory.setClock(date);
		}
//		Date clock = sdf.format(factory.getClock());
//		factory.setClock(clock);
		int userId = Integer.parseInt(session.getAttribute("id").toString());
		factory.setUserId(userId);
		
		//判断插入时是否有已有的客户，有就返回提示信息
		Set<String> message = new HashSet<String>();
		List<FactoryData> fdList = factoryDao.selectFactoryName();
		for(FactoryData fd:fdList){
			if(factory.getName()!=null && factory.getName().equals(fd.getName())){
				message.add(fd.getUserName());
			}
		}
		if(message.isEmpty()){
			factoryDao.insertFactory(factory);
			return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
		}
//		factoryDao.insertFactory(factory);
		return new ResultMessage(true, ResultCode.FAIL,"失败", message);
	}

	@Override
	public ResultMessage updateFactory(FactoryData factory) {
		factory.setCode(factory.getCode().toUpperCase());
		factoryDao.updateFactory(factory);
		return new ResultMessage(true,ResultCode.SUCCESS,"修改成功",null);
	}

	@Override
	public FactoryData findFactoryById(FactoryData factory) {
		int id = factory.getId();
		return factoryDao.findFactory(id);
		
	}

	@Override
	public ResultMessage getFactoryListByPageById(Page page, HttpSession session) {
		String type = "超级用户";
		long total = 0;
		List<FactoryData> factorylist = new ArrayList<FactoryData>();
		//今天
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String now = sdf.format(date);
		
		System.out.println("用户ID查询-----"+session.getAttribute("id").toString());
		page.setUserId(Integer.parseInt(session.getAttribute("id").toString()));
		page.coutStartColum();
		
		//默认排序
		if("0".equals(page.getOrder())){
			if(type.equals(session.getAttribute("type").toString())){
				total = factoryDao.selectFactoryCount(page);
				factorylist = factoryDao.selectFactoryByDay(page);
			}else{
			    total = factoryDao.selectFactoryCountById(page);
			    factorylist = factoryDao.selectFactoryByDayById(page);
			}
			PageInfo<FactoryData> pageInfo = new PageInfo<FactoryData>(page, total, factorylist);
			return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
		}
		
		if(type.equals(session.getAttribute("type").toString())){
			total = factoryDao.selectFactoryCount(page);
			factorylist = factoryDao.selectFactoryByPage(page);
		}else{
		    total = factoryDao.selectFactoryCountById(page);
		    factorylist = factoryDao.selectFactoryByPageById(page);
		}
		PageInfo<FactoryData> pageInfo = new PageInfo<FactoryData>(page, total, factorylist);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", pageInfo);
	}

	@Override
	public ResultMessage deleteFactory(FactoryData factory) {
		System.out.println("删除id用户----"+factory.getId());
		factoryDao.deleteFactoryById(factory.getId());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", null);
	}

	@Override
	public ResultMessage selectFactory(HttpSession session) {
		List<FactoryData> factory = factoryDao.selectFactory(Integer.parseInt(session.getAttribute("id").toString()));
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", factory);
	}

	@Override
	public ResultMessage selectFactoryIdByName(FactoryData factoryData) {
		int id = factoryDao.selectFactoryIdByName(factoryData.getName());
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", id);
	}

	@Override
	public ResultMessage show(HttpSession session) {
		List<FactoryData> factoryList = null;
 		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String now = sdf.format(date);
		System.out.println("今天是："+now);
		factoryList = factoryDao.selectFactoryByUserId(Integer.parseInt(session.getAttribute("id").toString()));
		Iterator<FactoryData> iterator = factoryList.iterator();
			while(iterator.hasNext()){
				FactoryData factoryd = iterator.next();
			if(factoryd.getClock()==null){
				iterator.remove();
			}else if(!now.equals(sdf.format(factoryd.getClock()))){
				iterator.remove();
			}
		}
		System.out.println(factoryList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", factoryList);
	}

	@Override
	public ResultMessage adminShow() {
		List<FactoryData> factoryList = null;
 		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String now = sdf.format(date);
		System.out.println("今天是："+now);
		factoryList = factoryDao.selectFactoryNoId();
		Iterator<FactoryData> iterator = factoryList.iterator();
			while(iterator.hasNext()){
				FactoryData factoryd = iterator.next();
				if(factoryd.getClock()==null){
					iterator.remove();
				}else if(!now.equals(sdf.format(factoryd.getClock()))){
					iterator.remove();
				}
		}
		System.out.println(factoryList);
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", factoryList);
	}

	@Override
	public ResultMessage aselectFactory() {
		List<FactoryData> factory = factoryDao.aselectFactory();
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", factory);
	}

	@Override
	public ResultMessage getFactoryCodeByName(FactoryData factoryData) {
		// TODO Auto-generated method stub
		String name = factoryData.getName();
		String code;
		if(name.length()>7){
			code = ChineseCharToUtil.getAllFirstLetter(name.substring(0,7));
		}else{
			code = ChineseCharToUtil.getAllFirstLetter(name);
		}
		return new ResultMessage(true, ResultCode.SUCCESS,"成功", code.toUpperCase());
	}
	

}

