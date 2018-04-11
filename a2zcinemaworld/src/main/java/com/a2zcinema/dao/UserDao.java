package com.a2zcinema.dao;

import java.util.ArrayList;

import com.a2zcinema.model.Users;

public interface UserDao {
	
	public Object getUser();
	
	public Users getUserByMobile(String name);
	
	public Users getUserByEmail(String email);
	
	public Users getUserById(int id);
	
	public Users checkUser(String data);
	
//	public ArrayList<Users> getUserByName(String name);
	
	public Object getUserByName(String name);
	
	public Users changePassword(Users user);

}
