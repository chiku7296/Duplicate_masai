package com.Problem_2;
import java.util.*;
import com.Problem_2.*;
public class Main {
public static void main(String[] args) {
	Object[][] obj = new Object[][] {
		{1, "ABC", "abc@gmail.com", "Punjab"},
		{2, "BCD", "bcd@gmail.com", "Haryana"},
		{3, "CDE", "cde@gmail.com", "Karnataka"},
		{4, "DEF", "def@yahoo.com", "Punjab"},
		{5, "EFG", "efg@masai.com", "Karnataka"},
	};
	

	List<Customer> lus=new ArrayList<>();
	for(Object[] ar: obj) {
		Customer cus = new Customer(1,"a","b","c");
		System.out.println(cus.meth(ar));
		lus.add(cus.meth(ar));
	}
	int count=0;
	for(Customer cs: lus) {
		if(cs.getState().equals("Punjab")) {
			count++;
		}
	}
	System.out.println("Customer from punjab only  "+count);
	
	lus.stream().forEach(t->System.out.println(t.getName()+" "+t.getId()+" "+t.getState()));
 boolean str=lus.stream().anyMatch(t->t.getEmail().endsWith("@masai.com"));
	System.out.println(str);
}	
}
