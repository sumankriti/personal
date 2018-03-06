package com.a2zcinema.daoImpl;

import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.a2zcinema.dao.ActorDao;
import com.a2zcinema.model.ActorProfile;
@Repository
public class ActorDaoImpl implements ActorDao{
@Autowired
public SessionFactory sessionFac;
	@Override
	public Object getActor() {
		String qry="select * from actor_backsupport_profile";
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
	

}
