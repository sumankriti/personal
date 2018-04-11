package com.a2zcinema.service;

import java.util.ArrayList;

import com.a2zcinema.model.Users;

public interface UserService {
	public Object getUser();
	
	public Users getUserByMobile(String mobile);
	
	public Users getUserByEmail(String email);
	
	public Users getUserById(int id);
	
	public Users checkUser(String data);
	
	public Object getUserByName(String name);
	
	public Users changePassword(Users user);

}
