package com.a2zcinema.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.MailException;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import com.a2zcinema.model.Users;


@Service
public class EmailService {
	private JavaMailSender javaMailSender;
	
	@Autowired
	public EmailService(JavaMailSender javaMailSender)
	{
		this.javaMailSender=javaMailSender;
	}
	public void sendEmail(Users user)throws MailException
	{
		SimpleMailMessage mail=new SimpleMailMessage();
		mail.setTo(user.getEmail());
		mail.setFrom("kritisuman.india1@gmail.com");
		mail.setSubject("testing purpose it is working");
		
		mail.setText("please click on below link:localhost:4200/profile/"+user.getUser_id());
		javaMailSender.send(mail);
	}


}
