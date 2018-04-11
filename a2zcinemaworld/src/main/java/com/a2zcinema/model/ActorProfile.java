package com.a2zcinema.model;



import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;

@Entity
@Table(name="actorprofile")
public class ActorProfile {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	@Column(name="actor_back_profile_id")
	private int actor_back_profile_id;
	public int getActor_back_profile_id() {
		return actor_back_profile_id;
	}
	public void setActor_back_profile_id(int actor_back_profile_id) {
		this.actor_back_profile_id = actor_back_profile_id;
	}
	@Column(name="user_id")
	public int user_id;
	public int getUser_id() {
		return user_id;
	}
	public void setUser_id(int user_id) {
		this.user_id = user_id;
	}
	@Column(name="sub_profession")
	private String subProfession;
	@Column(name="other_profession")
	private String otherProfession;
	@Column(name="gender")
	private String gender;

	 
	  @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy")
	@Column(name="dob")
	private Date dob;
	@Column(name="age")
	private String age;
	@Column(name="height")
	private String height;
	@Column(name="weight")
	private String weight;
	@Column(name="whatsapp")
	private String whatsapp;
	@Column(name="qualification")
	private String qualification;
	@Column(name="films_course")
	private String films_course;
	@Column(name="language")
	private String language;
	@Column(name="other_language")
	private String otherLanguage;
	@Column(name="about_self")
	private String aboutSelf;
	@Column(name="address")
	private String address;
	@Column(name="country")
	private String country;
	@Column(name="state")
	private String state;
	@Column(name="city")
	private String city;
	@Column(name="zip")
	private String zip;
	@Column(name="industry")
	private String industry;
	@Column(name="user_pic")
	private String user_pic;
	@Column(name="privacy")
	private String privacy;
	@Column(name="filmscourse")
	
	
	
	public String getFilms_course() {
		return films_course;
	}
	public void setFilms_course(String films_course) {
		this.films_course = films_course;
	}
	public String getSubProfession() {
		return subProfession;
	}
	public void setSubProfession(String subProfession) {
		this.subProfession = subProfession;
	}
	public String getOtherProfession() {
		return otherProfession;
	}
	public void setOtherProfession(String otherProfession) {
		this.otherProfession = otherProfession;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public String getHeight() {
		return height;
	}
	public void setHeight(String height) {
		this.height = height;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getWhatsapp() {
		return whatsapp;
	}
	public void setWhatsapp(String whatsapp) {
		this.whatsapp = whatsapp;
	}
	public String getQualification() {
		return qualification;
	}
	public void setQualification(String qualification) {
		this.qualification = qualification;
	}
	public String getFilmsCourse() {
		return films_course;
	}
	public void setFilmsCourse(String films_course) {
		this.films_course = films_course;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getOtherLanguage() {
		return otherLanguage;
	}
	public void setOtherLanguage(String otherLanguage) {
		this.otherLanguage = otherLanguage;
	}
	public String getAboutSelf() {
		return aboutSelf;
	}
	public void setAboutSelf(String aboutSelf) {
		this.aboutSelf = aboutSelf;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getZip() {
		return zip;
	}
	public void setZip(String zip) {
		this.zip = zip;
	}
	public String getIndustry() {
		return industry;
	}
	public void setIndustry(String industry) {
		this.industry = industry;
	}
	public String getUser_pic() {
		return user_pic;
	}
	public void setUser_pic(String user_pic) {
		this.user_pic = user_pic;
	}
	public String getPrivacy() {
		return privacy;
	}
	public void setPrivacy(String privacy) {
		this.privacy = privacy;
	}
	

}
