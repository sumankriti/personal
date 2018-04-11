package com.a2zcinema.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;

import com.a2zcinema.model.ActorProfile;
import com.a2zcinema.model.Users;

public interface ActorRepository extends CrudRepository<ActorProfile, Integer>{
	
ActorProfile save(ActorProfile actor);

}
