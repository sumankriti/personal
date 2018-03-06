package com.a2zcinema.service;

import com.a2zcinema.model.Users;

public interface UserService {
	public Object getUser();
	
	public Users getUserByMobile(String mobile);
	
	public Users getUserByEmail(String email);
	
	public Users getUserById(int id);

}
