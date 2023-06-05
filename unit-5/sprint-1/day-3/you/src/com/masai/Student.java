package com.masai;
import java.util.*;
public class Student {
	
	String name;
	int marks;
	
	Student(String name,int marks){
		this.name=name;
		this.marks=marks;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", marks=" + marks + "]";
	}
	static Optional<List<Student>> findStudent(List<Student> studentList){
		List<Student> optst= new ArrayList();
		for(Student st : studentList) {
			if(st.marks>40 && st.marks<=100) {
                    optst.add(st);
				
			}
		}
		return Optional.ofNullable(optst);
	
	}
	
	
	
	public static void main(String[] args) {
		List<Student> stlist= new ArrayList();
		stlist.add(new Student("pravesh",87));
		stlist.add(new Student("raksha",38));
		stlist.add(new Student("anokhi",40));
		stlist.add(new Student("himani",56));
		stlist.add(new Student("jay",79));
		
		
Student.findStudent(stlist).ifPresent(t-> System.out.println(t));
	}
}
