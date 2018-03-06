package com.a2zcinema.service;

import org.springframework.data.repository.CrudRepository;

import com.a2zcinema.model.ActorProfile;

public interface ActorRepository extends CrudRepository<ActorProfile, Integer>{
ActorProfile save(ActorProfile actor);
}
