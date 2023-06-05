package com.massai;

public class Student {
int roll;
String name;
String State;
    Student(int roll, String name,String State){
    	this.roll=roll;
    	this.name=name;
    	this.State=State;
    }
	@Override
	public String toString() {
		return "Student [roll=" + roll + ", name=" + name + ", State=" + State + "]";
	}
}
