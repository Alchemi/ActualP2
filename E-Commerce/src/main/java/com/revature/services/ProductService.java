package com.revature.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.DAO.ProductDAO;
import com.revature.models.Product;

@Service
public class ProductService {
	private ProductDAO pd;
	@Autowired
	public ProductService(ProductDAO pDAO) {
		this.pd = pDAO;
	}

	public Product getProductByName(String name) {
		return pd.getProductByName(name);
	}
	public Product getProductById(int id) {
		return pd.getProductById(id);
	}
	public List<Product> getAllProducts(){
		return pd.getAllProducts();
	}
	public static void addProduct(Product product) {
		ProductDAO.addProduct(product);
	}
}
