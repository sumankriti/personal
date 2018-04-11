package com.a2zcinema.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.a2zcinema.dao.ActorDao;
import com.a2zcinema.model.ActorProfile;
import com.a2zcinema.service.ActorService;
@Service
public class ActorServiceimpl implements ActorService{
@Autowired
public ActorDao actorDao;

@Transactional(readOnly=true)
	public Object getActor() {
		// TODO Auto-generated method stub
		return actorDao.getActor();
	}

@Transactional(readOnly=true)
public ActorProfile getActorById(int actorId) {
	// TODO Auto-generated method stub
	return actorDao.getActorById(actorId);
}

@Transactional(readOnly=false)
public ActorProfile updateProfile(ActorProfile profile) {
	// TODO Auto-generated method stub
	return actorDao.updateProfile(profile);
}

 


}
