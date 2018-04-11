package com.a2zcinema.daoImpl;

import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.a2zcinema.dao.ActorDao;
import com.a2zcinema.model.ActorProfile;
import com.a2zcinema.service.ActorRepository;
@Repository
public class ActorDaoImpl implements ActorDao{
@Autowired
public SessionFactory sessionFac;
@Autowired
public ActorRepository actorRepo;
	@Override
	public Object getActor() {
		String qry="select * from actorprofile";
		Object actor=this.sessionFac.getCurrentSession().createSQLQuery(qry).setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
		return actor;
	}
	@Override
	public ActorProfile getActorById(int actorId) {
		String qry="from ActorProfile a where a.user_id=?";
		ActorProfile actor=(ActorProfile) this.sessionFac.getCurrentSession().createQuery(qry).
				setParameter(0,actorId).uniqueResult();
		return actor;
	}
	@Override
	public ActorProfile updateProfile(ActorProfile profile) {
		this.sessionFac.getCurrentSession()
		.createSQLQuery("UPDATE ActorProfile set sub_profession=?,other_profession=?,gender=?,"
				+ "dob=?,age=?,height=?,weight=?,whatsapp=?,qualification=?,"
				+ "films_course=?,language=?,other_language=?,about_self=?,address=?,country=?,"
				+ "state=?,city=?,zip=?,industry=?,user_pic=?,privacy=? WHERE user_id=?")
		.setParameter(0,profile.getSubProfession())
		.setParameter(1,profile.getOtherProfession())
		.setParameter(2,profile.getGender())
		.setParameter(3,profile.getDob())
		.setParameter(4,profile.getAge())
		.setParameter(5,profile.getHeight())
		.setParameter(6,profile.getWeight())
		.setParameter(7,profile.getWhatsapp())
		.setParameter(8,profile.getQualification())
		.setParameter(9,profile.getFilmsCourse())
		.setParameter(10,profile.getLanguage())
		.setParameter(11,profile.getOtherLanguage())
		.setParameter(12,profile.getAboutSelf())
		.setParameter(13,profile.getAddress())
		.setParameter(14,profile.getCountry())
		.setParameter(15,profile.getState())
		.setParameter(16,profile.getCity())
		.setParameter(17,profile.getZip())
		.setParameter(18,profile.getIndustry())
		.setParameter(19,profile.getUser_pic())
		.setParameter(20,profile.getPrivacy())
		.setParameter(21,profile.getUser_id()).executeUpdate();
		return profile;
	}
	
	

}
