package com.a2zcinema;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration 
@EnableWebMvc
public class WebMvcConfig extends WebMvcConfigurerAdapter {
	
	@SuppressWarnings("deprecation")
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		registry 
		.addMapping("/**") 
		.allowedOrigins(CrossOrigin.DEFAULT_ORIGINS) 
		.allowedHeaders(CrossOrigin.DEFAULT_ALLOWED_HEADERS) 
		.allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") 
		.maxAge(3600L);
	}

}
