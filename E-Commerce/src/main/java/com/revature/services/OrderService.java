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

	
	//adds product to cart not used anymore
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
	//not used but removes from cart
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
	//submits order information to the dao(orderid,userid,productid)
	public int checkout(ArrayList<Product> cart) {
		oh.setUserid(AuthController.u.getUserid());
		for (Product product : cart) {
			productids.add(product.getId());
		}
		oh.setProductid(productids);
		return ohd.checkout(oh);
		
	}
	//returns all orders from the ordertable
	public List<OrderHistory> getAllOrders(){
		return ohd.getAllOrders();
	}

	//not used frontend has same functionality
	public void clearCart() {
		// TODO Auto-generated method stub
		cartList = null;
	}
	//returns cartitems not used
	public void displaycart() {
		// TODO Auto-generated method stub
		for(Product p : cartList) {
			System.out.println(p.getProductName());
		}
	}
}
