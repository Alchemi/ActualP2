package com.revature.models;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.validator.constraints.NotBlank;

@Entity
public class Address implements Serializable {

		/**
		 * 
		 */
		private static final long serialVersionUID = 1L;
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		@NotBlank(message = "Please enter address line one!")
		@Column(name = "address_line_one")
		private String addressLineOne;
		@NotBlank(message = "Please enter address line two!")	
		@Column(name = "address_line_two")
		private String addressLineTwo;
		@NotBlank(message = "Please enter City!")	
		private String city;
		@NotBlank(message = "Please enter State!")	
		private String state;
		@NotBlank(message = "Please enter country!")	
		private String country;
		@Column(name ="postal_code")
		@NotBlank(message = "Please enter Postal Code!")	
		private String postalCode;
		@Column(name="is_shipping")
		private boolean shipping;
		@Column(name="is_billing")
		private boolean billing;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getAddressLineOne() {
			return addressLineOne;
		}
		public void setAddressLineOne(String addressLineOne) {
			this.addressLineOne = addressLineOne;
		}
		public String getAddressLineTwo() {
			return addressLineTwo;
		}
		public void setAddressLineTwo(String addressLineTwo) {
			this.addressLineTwo = addressLineTwo;
		}
		public String getCity() {
			return city;
		}
		public void setCity(String city) {
			this.city = city;
		}
		public String getState() {
			return state;
		}
		public void setState(String state) {
			this.state = state;
		}
		public String getCountry() {
			return country;
		}
		public void setCountry(String country) {
			this.country = country;
		}
		public String getPostalCode() {
			return postalCode;
		}
		public void setPostalCode(String postalCode) {
			this.postalCode = postalCode;
		}
		public boolean isBilling() {
			return billing;
		}
		public void setBilling(boolean billing) {
			this.billing = billing;
		}
		
		@Override
		public String toString() {
			return "Address [id=" + id + ", addressLineOne=" + addressLineOne + ", addressLineTwo=" + addressLineTwo
					+ ", city=" + city + ", state=" + state + ", country=" + country + ", postalCode=" + postalCode
					+ ", billing=" + billing + "]";
		}
			
		@Column(name = "user_id")
		private int userId;
		public boolean isShipping() {
			return shipping;
		}
		public void setShipping(boolean shipping) {
			this.shipping = shipping;
		}
		public int getUserId() {
			return userId;
		}
		public void setUserId(int userId) {
			this.userId = userId;
		}
		@Override
		public int hashCode() {
			final int prime = 31;
			int result = 1;
			result = prime * result + ((addressLineOne == null) ? 0 : addressLineOne.hashCode());
			result = prime * result + ((addressLineTwo == null) ? 0 : addressLineTwo.hashCode());
			result = prime * result + (billing ? 1231 : 1237);
			result = prime * result + ((city == null) ? 0 : city.hashCode());
			result = prime * result + ((country == null) ? 0 : country.hashCode());
			result = prime * result + id;
			result = prime * result + ((postalCode == null) ? 0 : postalCode.hashCode());
			result = prime * result + (shipping ? 1231 : 1237);
			result = prime * result + ((state == null) ? 0 : state.hashCode());
			result = prime * result + userId;
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
			Address other = (Address) obj;
			if (addressLineOne == null) {
				if (other.addressLineOne != null)
					return false;
			} else if (!addressLineOne.equals(other.addressLineOne))
				return false;
			if (addressLineTwo == null) {
				if (other.addressLineTwo != null)
					return false;
			} else if (!addressLineTwo.equals(other.addressLineTwo))
				return false;
			if (billing != other.billing)
				return false;
			if (city == null) {
				if (other.city != null)
					return false;
			} else if (!city.equals(other.city))
				return false;
			if (country == null) {
				if (other.country != null)
					return false;
			} else if (!country.equals(other.country))
				return false;
			if (id != other.id)
				return false;
			if (postalCode == null) {
				if (other.postalCode != null)
					return false;
			} else if (!postalCode.equals(other.postalCode))
				return false;
			if (shipping != other.shipping)
				return false;
			if (state == null) {
				if (other.state != null)
					return false;
			} else if (!state.equals(other.state))
				return false;
			if (userId != other.userId)
				return false;
			return true;
		}
		
}
