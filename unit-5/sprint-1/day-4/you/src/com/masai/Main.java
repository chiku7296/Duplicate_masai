package com.masai;
import java.util.*;
import java.util.stream.*;

public class Main {
public static void main(String[] args) {
	List<Customer> cus=new ArrayList();
	cus.add(new Customer("pravesh",21,"Male","khetri"));
	cus.add(new Customer("ravina",27,"female","khetri"));
	cus.add(new Customer("yogesh",36,"Male","khetri"));
	cus.add(new Customer("raju",26,"Male","khetri"));
	cus.add(new Customer("ritesh",41,"Male","khetri"));
	cus.add(new Customer("himani",21,"female","khetri"));
	cus.add(new Customer("laxya",29,"Male","khetri"));
	cus.add(new Customer("raksha",35,"female","khetri"));
	cus.add(new Customer("rajiv",40,"Male","khetri"));
	
	List<String> newList= cus.stream().filter(t->t.getAge()>30).sorted((s1,s2)->s1.getAge()-s2.getAge()).map(m->m.getName()).collect(Collectors.toList());
	System.out.println(newList);

	
}
}
