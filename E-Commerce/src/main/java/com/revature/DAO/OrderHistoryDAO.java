package com.revature.DAO;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import com.revature.models.OrderHistory;
import com.revature.models.Role;
import com.revature.models.User;
import com.revature.utilities.HibernateUtil;
@Repository
public class OrderHistoryDAO {

	public int checkout(OrderHistory oh) {
//		String pass = user.getPassword();
//		System.out.println(pass);
		try(Session session = HibernateUtil.getSession()) {
//			Query q = session.createQuery("INSERT INTO User (username, password)"+"SELECT(username,password) FROM User");
//			q.setParameter(0, user.getUsername());
//			q.setParameter(1,user.getPassword());
//			q.executeUpdate();
			//System.out.println(user.getUsername());
			
			session.save(oh);
			//System.out.println(user.getUsername());

			HibernateUtil.closeSession();
			return 1;
		} catch(HibernateException e) {
			System.out.println("There was an error inserting the User");
			e.printStackTrace();
			return 0;
		}//look into insert

	}
	public List<OrderHistory> getAllOrders(){
		Session ses = HibernateUtil.getSession();
		List<OrderHistory> orderList = ses.createQuery("FROM OrderHistory").list();
		HibernateUtil.closeSession();
		return orderList;

	}
}
