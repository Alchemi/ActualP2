package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.OrderHistory;
import com.revature.models.Product;
import com.revature.models.User;
import com.revature.services.OrderService;
@Controller
@ResponseBody
@RequestMapping(value="/ordercontroller")
@CrossOrigin
public class OrderController {
	ArrayList<Product> cart;
	private OrderService os;
	@Autowired
	public OrderController(OrderService oService){
		this.os = oService;
	}

	@PutMapping //adds to cart but not used
	public ResponseEntity<ArrayList<Product>> addToCart(@RequestBody Product p){
		if(p.getProductName() == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(cart);
		}
		else {
			
			cart =os.addToCart(p);
			return ResponseEntity.status(202).body(cart);
		}
	}
	@PostMapping//sends order information to persist to the database
	public ResponseEntity<String> checkout(@RequestBody ArrayList<Product> cart){
		if(os.checkout(cart)==1) {
			return ResponseEntity.status(HttpStatus.OK).body("Checkout successful");
		}else {
			return ResponseEntity.status(HttpStatus.CONFLICT).body("Checkout was unsuccessful");
		}
	}
	@GetMapping//returns all orders
	public List<OrderHistory> getAllOrders(){
		return os.getAllOrders();
	}
	
}
