package com.a2zcinema.daoImpl;

import org.hibernate.SessionFactory;
import org.hibernate.transform.Transformers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.a2zcinema.dao.UserDao;
import com.a2zcinema.model.Users;
@Repository
public class UserDaoImpl implements UserDao{
 @Autowired
 public SessionFactory sessionFac;
	@Override
	public Object getUser() {
		String query = " select * FROM users";
		Object users = (Object) this.sessionFac.getCurrentSession().createSQLQuery(query)
				.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
		return users;
	}
	@Override
	public Users getUserByMobile(String mobile) {
		String qry="from Users u where u.mobile=:mobile";
		Users user=(Users) this.sessionFac.getCurrentSession().createQuery(qry)
				.setParameter("mobile", mobile)
				.uniqueResult();
		return user;
	}
	@Override
	public Users getUserByEmail(String email) {
		String qry="from Users u where u.email=:email";
		Users user=(Users) this.sessionFac.getCurrentSession().createQuery(qry)
				.setParameter("email", email).uniqueResult();
		return user;
	}
	@Override
	public Users getUserById(int id) {
		String qry="from Users u where u.user_id=?";
		Users user=(Users)this.sessionFac.getCurrentSession().createQuery(qry)
				.setParameter(0,id).uniqueResult();
		return user;
	}
}
