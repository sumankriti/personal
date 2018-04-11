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
import com.a2zcinema.service.UserService;

@RestController
public class ActorController {
	@Autowired 
	public ActorRepository actorRepo;
	@Autowired
	public ActorService actorService;
	@Autowired
	public UserService userService;
	
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
	 @RequestMapping(value = "/updateProfile/{user_id}", method = RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @ResponseBody
	 public ResponseEntity<ActorProfile>  updateUser1(@RequestBody ActorProfile actor,@PathVariable("user_id") int user_id) throws IOException {
	        @SuppressWarnings("unused")
			String msg="";
	        System.out.println("data is coming:"+actor.getAboutSelf());
	        //Users user= new Users();
	        
			if(actor!=null){
				
				actor.setUser_id(user_id);
				actorService.updateProfile(actor);
				msg="User registration Saved Successfully";
			}
			
			return new ResponseEntity<ActorProfile>(actor,HttpStatus.OK);
		}
	 @RequestMapping(value = "/updateActor", method = RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @ResponseBody
	 public ResponseEntity<ActorProfile>  updateActor(@RequestBody ActorProfile actor) throws IOException {
	        @SuppressWarnings("unused")
			String msg="";
	        System.out.println("datua is coming:"+actor.getAge());
	        //Users user= new Users();
	        if(actor!=null)
	        {	
				actorRepo.save(actor);
				msg="User registration Saved Successfully";
	        }
	        else if(actor.getActor_back_profile_id()>0)
	        {
	        	actor=actorRepo.findOne(actor.getActor_back_profile_id());
	        	actorRepo.save(actor);
	        }
			
			
			return new ResponseEntity<ActorProfile>(actor,HttpStatus.OK);
		}
	 
	 
	 
}
