package com.a2zcinema.userController;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.a2zcinema.model.ActorProfile;
import com.a2zcinema.model.Users;
import com.a2zcinema.service.ActorRepository;
import com.a2zcinema.service.ActorService;

@RestController
public class ActorController {
	@Autowired 
	public ActorRepository actorRepo;
	@Autowired
	public ActorService actorService;
	@GetMapping(value="/getActor")
	public ResponseEntity<Object> getUser(){
		Object actor =actorService.getActor();
		ResponseEntity<Object> response=new ResponseEntity<>(actor,HttpStatus.OK);
		return response;
	}
	@RequestMapping(value = "/getActorById/{actorId}", method = RequestMethod.GET)
	 public ResponseEntity<ActorProfile> getActorById(@PathVariable("actorId") int actorId) {
	 ActorProfile actor =actorService.getActorById(actorId);
	 System.out.println("user data :" + actor.getAge());
	 return new ResponseEntity<ActorProfile>(actor, HttpStatus.OK);
	 }
	@RequestMapping(value = "/saveActor/{userId}", method = RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @ResponseBody
	 public ResponseEntity<ActorProfile>  saveActor(@RequestBody ActorProfile actor,@PathVariable("userId") int id) throws IOException {
	        String msg="";
	       
	        //Users user= new Users();
			if(actor!=null){
				
				actor.setUser_id(id);
				actorRepo.save(actor);
				msg="User registration Saved Successfully";
			}
			
			return new ResponseEntity<ActorProfile>(actor,HttpStatus.OK);
		}
	

}
