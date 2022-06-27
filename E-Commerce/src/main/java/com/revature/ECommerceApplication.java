package com.revature;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.revature.DAO.UserDAO;
import com.revature.models.User;
import com.revature.services.AuthService;

@SpringBootApplication
public class ECommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ECommerceApplication.class, args);
		//ApplicationContext ac = new ClassPathXmlApplicationContext("applicationContext.xml");
		//UserDAO ud = new UserDAO();
		//User u = new User(2,"Tomcat","face");
		//ud.createUser(u);
	}

}
