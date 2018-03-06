package com.a2zcinema.service;

import org.springframework.data.repository.CrudRepository;

import com.a2zcinema.model.Users;

public interface UserRepository extends CrudRepository<Users,Integer>{
	
	Users save(Users user);

}
