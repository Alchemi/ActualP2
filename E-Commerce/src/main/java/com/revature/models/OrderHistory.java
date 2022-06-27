package com.revature.models;

import java.util.ArrayList;
import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

@Entity
@Component
@Scope("prototype")
public class OrderHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int orderid;
	private int userid;
	private ArrayList<Integer> productid;
	public OrderHistory() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public OrderHistory(int orderid, int userid, ArrayList<Integer> productid) {
		super();
		this.orderid = orderid;
		this.userid = userid;
		this.productid = productid;
	}



	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	
	
	public ArrayList<Integer> getProductid() {
		return productid;
	}



	public void setProductid(ArrayList<Integer> productid) {
		this.productid = productid;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + orderid;
		result = prime * result + ((productid == null) ? 0 : productid.hashCode());
		result = prime * result + userid;
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderHistory other = (OrderHistory) obj;
		if (orderid != other.orderid)
			return false;
		if (productid == null) {
			if (other.productid != null)
				return false;
		} else if (!productid.equals(other.productid))
			return false;
		if (userid != other.userid)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "OrderHistory [orderid=" + orderid + ", userid=" + userid + ", productid=" + productid + "]";
	}
	
	

}
