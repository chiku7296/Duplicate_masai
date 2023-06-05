package com.masaischool.problem_4;

import java.sql.Date;
import java.time.LocalDate;

public class Bike {
     String bike_id;
     String brand;
     String model;
     int price;
     Date registration_date;
	public Bike(String bike_id, String brand, String model, int price, Date registration_date) {
		super();
		this.bike_id = bike_id;
		this.brand = brand;
		this.model = model;
		this.price = price;
		this.registration_date = registration_date;
	}
	public String getBike_id() {
		return bike_id;
	}
	public void setBike_id(String bike_id) {
		this.bike_id = bike_id;
	}
	public String getBrand() {
		return brand;
	}
	public void setBrand(String brand) {
		this.brand = brand;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public Date getRegistration_date() {
		return registration_date;
	}
	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}
	@Override
	public String toString() {
		return "Bike [bike_id=" + bike_id + ", brand=" + brand + ", model=" + model + ", price=" + price
				+ ", registration_date=" + registration_date + "]";
	}
}
