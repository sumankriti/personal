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

import com.a2zcinema.dao.UserDao;
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
}
