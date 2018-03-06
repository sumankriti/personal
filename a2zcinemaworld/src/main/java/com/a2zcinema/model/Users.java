package com.a2zcinema.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="users")
public class Users {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="user_id")
	private int user_id;
	@GenericGenerator(name = "sequence_dep_id", strategy = "com.a2zcinema.model.Users")
	@GeneratedValue(generator = "sequence_dep_id")
	@Column(name="user_unique_id")
	private String user_unique_id;
	@Column(name="profession")
	private String profession;
	@Column(name="name")
	private String name;
	@Column(name="email")
	private String email;
	@Column(name="mobile")
	private String mobile;
	@Column(name="password")
	private String password;
	@Column(name="date")
	private String date;
	@Column(name="role")
	private String role;
	@Column(name="is_rest_password")
	private String is_rest_password;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	public String getUser_unique_id() {
		return user_unique_id;
	}
	public void setUser_unique_id(String user_unique_id) {
		this.user_unique_id = user_unique_id;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getIs_rest_password() {
		return is_rest_password;
	}
	public void setIs_rest_password(String is_rest_password) {
		this.is_rest_password = is_rest_password;
	}
}
