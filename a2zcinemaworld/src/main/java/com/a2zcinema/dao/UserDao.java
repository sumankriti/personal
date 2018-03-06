package com.a2zcinema.dao;

import com.a2zcinema.model.Users;

public interface UserDao {
	
	public Object getUser();
	
	public Users getUserByMobile(String name);
	
	public Users getUserByEmail(String email);
	
	public Users getUserById(int id);

}
