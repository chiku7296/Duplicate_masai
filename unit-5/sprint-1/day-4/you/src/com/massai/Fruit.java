package com.massai;
import java.util.*;

class Fruit{
	String name;
	int quantity;
	int price;
	public Fruit(String name, int quantity, int price) {
		super();
		this.name = name;
		this.quantity = quantity;
		this.price = price;
	}
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	@Override
	public String toString() {
		return "Fruit [name=" + name + ", quantity=" + quantity + ", price=" + price + "]";
	}
		
}

