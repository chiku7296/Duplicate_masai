package com.Problem_2;
import java.util.*;
@FunctionalInterface
interface custom{
	Customer meth(Object arr[]);
			
}	

public class Customer implements custom{
int id;
String name;
String email;
String state;
public Customer(int id, String name, String email, String state) {
	super();
	this.id = id;
	this.name = name;
	this.email = email;
	this.state = state;
}
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getState() {
	return state;
}
public void setState(String state) {
	this.state = state;
}
@Override
public String toString() {
	return "Customer [id=" + id + ", name=" + name + ", email=" + email + ", state=" + state + "]";
}
@Override
public Customer meth(Object arr[]) {
	
	int Id=(int)arr[0];
	String name=(String)arr[1];
	String email=(String)arr[2];
	String state=(String)arr[3];
	Customer cus  = new Customer(Id,name,email,state);
	return cus;
}

}
