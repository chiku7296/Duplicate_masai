package com.massai;
import java.util.*;
public class Demo {
	
public static void findSameStateStudent(List<Student> empty,List<SchoolStudent> list,List<CollegeStudent>clist,String State){
	List<Student> epty =new ArrayList();
  for(Student s : list) {
	  if(s.State.equals(State)) {
		  epty.add(s);
	  }
  }
  for(Student s : clist) {
	  if(s.State.equals(State)) {
		  epty.add(s);
	  }
  }
  System.out.print(epty);
}
   public static void main(String[] args) {
	List<SchoolStudent> list= new ArrayList<SchoolStudent>();
	list.add(new SchoolStudent(1,"pravesh","rajasthan","RBSE"));
	list.add(new SchoolStudent(2,"himani","Haryana","CBSE"));
	list.add(new SchoolStudent(3,"jay","Delhi","RBSE"));
	list.add(new SchoolStudent(4,"hannu","Jharkhand","CBSE"));
	list.add(new SchoolStudent(5,"raksha","Bihar","RBSE"));
	
	List<CollegeStudent> clist= new ArrayList<CollegeStudent>();
	clist.add(new CollegeStudent(10,"pravesh sharma","rajasthan","RBSE"));
	clist.add(new CollegeStudent(20,"himani sharma","Haryana","CBSE"));
	clist.add(new CollegeStudent(30,"jay sharma","Delhi","RBSE"));
	clist.add(new CollegeStudent(40,"hannu sharma","Jharkhand","CBSE"));
	clist.add(new CollegeStudent(50,"raksha sharma","Bihar","RBSE"));
	
	List<Student> empty = new ArrayList();
	Demo.findSameStateStudent(empty,list,clist,"rajasthan");
}
}
