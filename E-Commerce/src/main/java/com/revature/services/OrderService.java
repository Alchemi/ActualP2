package com.revature.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.revature.DAO.OrderHistoryDAO;
import com.revature.DAO.ProductDAO;
import com.revature.DAO.UserDAO;
import com.revature.controllers.AuthController;
import com.revature.models.OrderHistory;
import com.revature.models.Product;
import com.revature.models.User;
@Service

public class OrderService {
	
	

	static ArrayList<Product> cartList = new ArrayList<Product>();
	OrderHistoryDAO ohd= new OrderHistoryDAO();
	@Autowired
	private OrderHistory oh;

	
	
	public ArrayList<Product> addToCart(Product p){
		ProductDAO pd = new ProductDAO();
		if(pd.getProductByName(p.getProductName())!=null) {
		cartList.add(p);
		System.out.println(cartList);
		return cartList;
		
		}else {
			System.out.println("item not found");
			return cartList;
		}
				
	}
	public ArrayList<Product> removeFromCart(Product p){
		if(p.getProductName()!=null && cartList!=null) {
			for(Product prod : cartList) {
				if(p.getProductName() == prod.getProductName()) {
					cartList.remove(prod);
				}
			}
			return cartList;
		
		}else {
			return cartList;
		}
	}
	ArrayList<Integer> productids = new ArrayList<>();
	public int checkout() {
		oh.setUserid(AuthController.u.getUserid());
		for (Product product : cartList) {
			productids.add(product.getId());
		}
		oh.setProductid(productids);
		return ohd.checkout(oh);
		
	}
	public List<OrderHistory> getAllOrders(){
		return ohd.getAllOrders();
	}

	public void clearCart() {
		// TODO Auto-generated method stub
		cartList = null;
	}
	public void displaycart() {
		// TODO Auto-generated method stub
		for(Product p : cartList) {
			System.out.println(p.getProductName());
		}
	}
}
