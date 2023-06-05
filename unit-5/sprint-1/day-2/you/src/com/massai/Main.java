package com.massai;
import java.util.*;
import java.util.function.*;
public class Main {
 public static void main(String[] args) {
	List<Student> studentList= new ArrayList<Student>();
	studentList.add(new Student(1,"pravesh",200));
	studentList.add(new Student(2,"himani",300));
	studentList.add(new Student(3,"yogesh",400));
	studentList.add(new Student(4,"prahi",500));
	studentList.add(new Student(5,"prachi",345));
	studentList.add(new Student(6,"piyush",100));
	studentList.add(new Student(7,"praveen",98));
	studentList.add(new Student(8,"pritam",150));
	studentList.add(new Student(9,"parul",369));
	studentList.add(new Student(10,"poonam",280));
	
Function<List<Student>,Map<String,List<Student>>> Main=(stlist)->{
	Map<String,List<Student>> map = new HashMap();
	
	Predicate<Student>pre= (st-> st.marks<165);
	Predicate<Student>pre1=(st-> st.marks>165 && st.marks<400);
	List<Student>fail=new ArrayList();
	List<Student>pass=new ArrayList();
	List<Student>top=new ArrayList();
	for(Student f: studentList) {
		if(pre.test(f)) {
			fail.add(f);
		}
		else if (pre1.test(f)){
			pass.add(f);
		}
		else {
			top.add(f);
		}
	}
	map.put("Fail",fail);
	map.put("Pass", pass);
	map.put("Top", top);
	return map;
		
	
};
System.out.println(Main.apply(studentList));
	
}
}
