package com.a2zcinema.dao;

import com.a2zcinema.model.ActorProfile;

public interface ActorDao {
	
	public Object getActor();
	
	public ActorProfile getActorById(int id);
	
	public ActorProfile updateProfile(ActorProfile profile);
	
	
	
	
	
	
	

}
