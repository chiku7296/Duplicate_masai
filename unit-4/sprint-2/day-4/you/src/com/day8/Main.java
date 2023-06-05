package com.day8;
class Person{
	String name;
	String gender;
	
}
class Address {
	String city;
	String state;
	String pinCode;
}	
class Instructor extends Person {
	int instructorId;
	int salary;
}
class Student extends Person {
	int studentId;
	String courseEnrolled;
	int courseFee;
	public String toString() {
		return "stid=1,couen=2342,courfee332";
	}
}
public class Main {
public static Person generatePerson(Person person) {
	return person;
}
	

      public static void main(String[] args) {
    	  Person newStudent=generatePerson(new Student());
    	  Person newTeacher=new Instructor();
    	  System.out.println(newStudent);
    	  System.out.println(newTeacher);
      }
}
