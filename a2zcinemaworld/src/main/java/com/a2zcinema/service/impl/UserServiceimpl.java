package com.a2zcinema.service.impl;

import java.util.ArrayList;

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

@Transactional(readOnly=true)
public Users checkUser(String data) {
	// TODO Auto-generated method stub
	return userDao.checkUser(data);
}

@Transactional(readOnly=true)
public Object getUserByName(String name) {
	// TODO Auto-generated method stub
	return userDao.getUserByName(name);
}

@Transactional(readOnly=false)
public Users changePassword(Users user) {
	// TODO Auto-generated method stub
	return userDao.changePassword(user);
}

//@Transactional(readOnly=true)
//public ArrayList<Users> getUserByName(String name) {
//	// TODO Auto-generated method stub
//	return userDao.getUserByName(name);
//}


}
