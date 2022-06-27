package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.revature.models.Product;
import com.revature.models.User;
import com.revature.services.ProductService;
import com.revature.services.UserService;

@Controller
@ResponseBody
@RequestMapping(value="/productcontroller")
@CrossOrigin
public class ProductController {
	Product p;
	private ProductService ps;
	
	@Autowired
	public ProductController(ProductService service) {
		this.ps =service;
	}
	@RequestMapping(method=RequestMethod.GET)
	public List<Product> getAllProducts(){
		return ps.getAllProducts();
		//this one works
	}
	@GetMapping("/{id}")
	public ResponseEntity<Product> getProductById(@PathVariable("id") int id){
		
		p = ps.getProductById(id);
		if(p == null) {
			
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(p);
		}else {
			
			return ResponseEntity.ok(p);
		}
	}
	
	@RequestMapping(value="/name")
	public ResponseEntity<Product> getProductByName(@RequestParam("name") String name){
		if(name == null) {
			return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
		}else{
			if(ps.getProductByName(name) != null) {
				Product p = ps.getProductByName(name);
			return ResponseEntity.ok(p);
			}else {
				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
			}
		}
	}
	
    @PostMapping("/addproduct")
    public static ResponseEntity<Product> addProduct(@RequestBody Product product){
    	System.out.println(product.getId());
    	
    	if(product.getProductName() == null) {
    		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(product);
    	} else {
    		ProductService.addProduct(product);
    		return ResponseEntity.status(HttpStatus.NO_CONTENT).body(product);
    	}
    }

}

