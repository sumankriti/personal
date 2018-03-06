package com.a2zcinema.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a2zcinema.dao.UserDao;
import com.a2zcinema.model.Users;
import com.a2zcinema.service.UserService;
@Service
public class UserServiceimpl implements UserService{
@Autowired
public UserDao userDao;

@Transactional(readOnly=true)
	public Object getUser() {
		// TODO Auto-generated method stub
		return userDao.getUser();
	}

@Transactional(readOnly=true)
public Users getUserByMobile(String mobile) {
	// TODO Auto-generated method stub
	return userDao.getUserByMobile(mobile);
}

@Transactional(readOnly=true)
public Users getUserByEmail(String email) {
	
	return userDao.getUserByEmail(email);
}

@Transactional(readOnly=true)
public Users getUserById(int id) {
	// TODO Auto-generated method stub
	return userDao.getUserById(id);
}


}
