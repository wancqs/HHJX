package com.hhjx.service;

import java.text.ParseException;

import javax.servlet.http.HttpSession;

import com.hhjx.entity.FactoryData;
import com.hhjx.entity.Page;
import com.hhjx.entity.ResultMessage;
import com.hhjx.entity.User;

public interface FactoryService {

	ResultMessage getFactoryListByPage(Page page);

	ResultMessage insertFactory(FactoryData factory, HttpSession session) throws ParseException;

	ResultMessage updateFactory(FactoryData factory);

	FactoryData findFactoryById(FactoryData factory);

	ResultMessage getFactoryListByPageById(Page page, HttpSession session);

	ResultMessage deleteFactory(FactoryData factory);

	ResultMessage selectFactory(HttpSession session);

	ResultMessage selectFactoryIdByName(FactoryData factory);

	ResultMessage show(HttpSession session);

	ResultMessage adminShow();

	ResultMessage aselectFactory();

	ResultMessage getFactoryCodeByName(FactoryData factoryData);
	
}

