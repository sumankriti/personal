package com.a2zcinema.service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.a2zcinema.model.Users;

@Service
public class EmailService1 {

    @Autowired
    private JavaMailSender emailSender;

    @Autowired
    private SpringTemplateEngine templateEngine;


    public void sendSimpleMessage(Users user) throws MessagingException, IOException {
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message,
                MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                StandardCharsets.UTF_8.name());

      /*  helper.addAttachment("logo.png", new ClassPathResource("memorynotfound-logo.png"));
*/
        Context context = new Context();
        context.setVariable("name",user.getName());
        context.setVariable("email",user.getEmail()+".com");
        context.setVariable("password",user.getPassword());
        context.setVariable("return_page",user.getUser_id());
        String html = templateEngine.process("email-template", context);

        helper.setTo(user.getEmail()+".com");
        helper.setText(html, true);
        helper.setSubject("Account - Email Verification - A2ZCWCinema");
        helper.setFrom("kritisuman.india1@gmail.com");

        emailSender.send(message);
    }
       public void forgotMessage(Users user)throws MessagingException, IOException 
       {
    	   MimeMessage message = emailSender.createMimeMessage();
           MimeMessageHelper helper = new MimeMessageHelper(message,
                   MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
                   StandardCharsets.UTF_8.name());
           
           Context context = new Context();
           context.setVariable("name",user.getName());
           context.setVariable("email",user.getEmail()+".com");
           context.setVariable("password",user.getPassword());
          
           String html = templateEngine.process("forgot-password", context);

           helper.setTo(user.getEmail()+".com");
           helper.setText(html, true);
           helper.setSubject("Account - forgot password - A2ZCWCinema");
           helper.setFrom("kritisuman.india1@gmail.com");

           emailSender.send(message);
    	   
       }
}