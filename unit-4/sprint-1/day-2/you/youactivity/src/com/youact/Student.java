package com.youact;
import java.util.*;
public class Student {
	public  String name;
		public int roll;
		public int marks;
		Student(String name,int roll, int marks){
			this.name=name;
			this.roll=roll;
			this.marks=marks;
			
		}
		
	
public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public int getRoll() {
			return roll;
		}


		public void setRoll(int roll) {
			this.roll = roll;
		}


		public int getMarks() {
			return marks;
		}


		public void setMarks(int marks) {
			this.marks = marks;
		}


public  String toString() {
	return ""+name+" "+roll+" "+marks;
}



}
