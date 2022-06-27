package com.revature.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.User;
import com.revature.services.AuthService;
import com.revature.services.OrderService;
@Controller
@ResponseBody
@RequestMapping(value="/authcontroller")
@CrossOrigin
public class AuthController {
	@Autowired
	private OrderService os;
	private AuthService as;
	public static User u;
	
	@Autowired
	public AuthController(AuthService service) {
		this.as = service;
	}
	
	
	
	@PostMapping//allows new user to create account recieves user object from frontend
	public ResponseEntity<String> register(@RequestBody User user){
		System.out.println(user.getPassword());
		
		if(user.getUsername() == null) {
			
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("0");
		}else {
			
			as.register(user);
			return ResponseEntity.status(HttpStatus.CREATED).body("1");
		}
	}
	@PostMapping("/login")//authenticates with db to determine if user exists or password matches
	public ResponseEntity<String> login(@RequestBody User user){
		if(user.getUsername()==null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body("0");
		}else{
			if(as.login(user.getUsername(), user.getPassword())!=null) {
				user = as.login(user.getUsername(), user.getPassword());
				u = user;
			return ResponseEntity.ok("1");
			}else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body("0");
			}
		}
		
	}
	@GetMapping("/logout")//not used yet clear cart can be removed
	public ResponseEntity<String> logout(){
		os.clearCart();
		u=null;
		System.out.println("Logout successful");
		return ResponseEntity.ok("1");
	}
	@GetMapping("/user")//returns all users
	public ResponseEntity<User> getUser(){
		if (u!=null) {
			return ResponseEntity.ok(u);
		}
		else {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}
	}
	
	
}
