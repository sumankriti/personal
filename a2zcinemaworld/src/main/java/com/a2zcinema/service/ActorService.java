package com.a2zcinema.service;

import com.a2zcinema.model.ActorProfile;

public interface ActorService {
	
	public Object getActor();
	
	public ActorProfile getActorById(int actorId);
	
	public ActorProfile updateProfile(ActorProfile profile);
	
	
}
