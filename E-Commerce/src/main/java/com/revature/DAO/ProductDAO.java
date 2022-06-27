package com.revature.DAO;

import java.util.List;

import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.revature.models.Product;
import com.revature.models.User;
import com.revature.utilities.HibernateUtil;
@Repository
public class ProductDAO {
	private Product p;
	@Autowired
	public ProductDAO(Product prod) {
		this.p = prod;
	}
	
	public ProductDAO() {
		// TODO Auto-generated constructor stub
	}
	@PersistenceContext//adds product to the database
	public static void addProduct(Product product) {
		try(Session ses = HibernateUtil.getSession()){
			ses.save(product);
			HibernateUtil.closeSession();
		} catch(HibernateException e) {
			System.out.println(e);
			e.printStackTrace();
		}
		
	}


	public Product getProductByName(String name) {//gets product with matching name
		Session ses = HibernateUtil.getSession();
		Query q = ses.createQuery("FROM Product WHERE productname = ?1");
		q.setParameter(1, name);
		try {
		List<Product> productList = q.getResultList();
		HibernateUtil.closeSession();
		Product p = productList.get(0);
		
		System.out.println("product exists");
		return p;
		} catch(Exception e) {
			return null;
		}
		
		
	}
	public Product getProductById(int id) {
		Session ses = HibernateUtil.getSession();
		Product p = ses.get(Product.class, id);
		HibernateUtil.closeSession();
		return p;

	}
	public List<Product> getAllProducts(){
		Session ses = HibernateUtil.getSession();
		List<Product> productList = ses.createQuery("FROM Product").list();
		HibernateUtil.closeSession();
		return productList;

	}
	

	
}
