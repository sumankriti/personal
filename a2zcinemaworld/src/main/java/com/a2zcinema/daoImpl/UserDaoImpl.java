package com.a2zcinema.daoImpl;

import java.util.ArrayList;

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
	@Override
	public Users checkUser(String data) {
		String qry="FROM Users u WHERE u.email=:data OR u.mobile=:data";
		Users user=(Users) this.sessionFac.getCurrentSession().createQuery(qry)
				.setParameter("data",data).uniqueResult();
		return user;
	}
//	@SuppressWarnings("unchecked")
//	@Override
//	public ArrayList<Users> getUserByName(String name) {
//		String qry="From Users u where u.name like:name";
//		ArrayList<Users> user=(ArrayList<Users>) this.sessionFac.getCurrentSession().createQuery(qry)
//				.setParameter("name",name).setResultTransformer(Transformers.TO_LIST).list();
//		return user;
//	}
	@Override
	public Object getUserByName(String name) {
		String query = "Select * from Users u where u.name like :name%";
		Object users = (Object) this.sessionFac.getCurrentSession().createSQLQuery(query)
				.setParameter(name,"name")
				.setResultTransformer(Transformers.ALIAS_TO_ENTITY_MAP).list();
		return users;
	}
@Override
public Users changePassword(Users user) {
	this.sessionFac.getCurrentSession()
	.createSQLQuery("UPDATE Users set password=?,is_rest_password=? WHERE user_id=?")
	.setParameter(0,user.getPassword())
	.setParameter(1,user.getIs_rest_password())
	.setParameter(2,user.getUser_id()).executeUpdate();
	return user;
}
	
	
}
