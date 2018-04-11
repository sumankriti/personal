package com.a2zcinema.userController;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

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

import com.a2zcinema.dao.UserDao;
import com.a2zcinema.model.ActorProfile;
import com.a2zcinema.model.Users;
import com.a2zcinema.service.EmailService;
import com.a2zcinema.service.EmailService1;
import com.a2zcinema.service.UserRepository;
import com.a2zcinema.service.UserService;

@RestController
public class UserController {
	@Autowired
	public UserService userService;
	@Autowired
	public UserRepository userRepo;
	@Autowired EmailService emailService;
	@Autowired EmailService1 emailService1;
	@Autowired UserDao userDao;
	
	
	@GetMapping(value="/getUser")
	public ResponseEntity<Object> getUser(){
		Object user =userService.getUser();
		ResponseEntity<Object> response=new ResponseEntity<>(user,HttpStatus.OK);
		return response;
	}
	
	
	@RequestMapping(value = "/getUserByMobile/{mobile}", method = RequestMethod.GET)
	 public ResponseEntity<Users> getUserByMobile(@PathVariable("mobile") String mobile) {
	 Users user =userService.getUserByMobile(mobile);
	 System.out.println("user data :" + user.getName());

	 return new ResponseEntity<Users>(user, HttpStatus.OK);
	 }
	@GetMapping(value="/getUserByEmail/{email}")
	public ResponseEntity<Users> getUserByEmail(@PathVariable("email") String email)
	{
		Users user=userService.getUserByEmail(email);
		System.out.println("user data:"+user.getName());
		return new ResponseEntity<Users>(user,HttpStatus.OK);
	}
	@GetMapping(value="/checkUser/{data}")
	public ResponseEntity<Users> checkUser(@PathVariable("data") String data)
	{
		Users user=userService.checkUser(data);
		System.out.println("user data:"+user.getName());
		return new ResponseEntity<Users>(user,HttpStatus.OK);
	}
	@GetMapping(value="/getUserByName/{name}")
	public ResponseEntity<List<Users>> getUserByName(@PathVariable("name") String name){
		
		List<Users> user1=userRepo.findByNameIgnoreCaseContaining(name);
		ResponseEntity<List<Users>> response=new ResponseEntity<>(user1,HttpStatus.OK);
		return response;
	}
	
	@RequestMapping(value = "/addUser", method = RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @ResponseBody
	 public ResponseEntity<Users>  addUser(@RequestBody Users user,Model model) throws IOException {
	        String msg="";
	        System.out.println("data is coming:"+user.getName());
	        //Users user= new Users();
			if(user!=null){
				if(user.getProfession()!=null)
				{
					user.setRole("actor");
				}
			    String x=user.getEmail();
			    x=x.replaceAll(".com","");
			    user.setEmail(x);
				user.setUser_unique_id("A2Z-"+user.getName()+"-"+user.getRole());
				userRepo.save(user);
				msg="User registration Saved Successfully";
				try
				{
					
					emailService1.sendSimpleMessage(user);
					
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
				
			}
			
			return new ResponseEntity<Users>(user,HttpStatus.OK);
		}
	@RequestMapping(value = "/getUserById/{id}", method = RequestMethod.GET)
	 public ResponseEntity<Users> getUserById(@PathVariable("id") int id) {
	 Users user =userService.getUserById(id);
	 System.out.println("user data :" + user.getName());

	 return new ResponseEntity<Users>(user, HttpStatus.OK);
	 }
	@GetMapping(value="/forgotEmail/{email}")
	public ResponseEntity<Users> getForgotEmail(@PathVariable("email") String email)
	{
		Users user=userService.getUserByEmail(email);
		  System.out.println("data is coming:"+user.getName());
		try
		{
			emailService1.forgotMessage(user);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return new ResponseEntity<Users>(user,HttpStatus.OK);
	}
	@RequestMapping(value = "/changePassword", method = RequestMethod.POST ,consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	 @ResponseBody
	 public ResponseEntity<Users>  changePassword(@RequestBody Users user) throws IOException {
	       
			if(user!=null)
			{
				userService.changePassword(user);
			}
			return new ResponseEntity<Users>(user,HttpStatus.OK);
		}
}
