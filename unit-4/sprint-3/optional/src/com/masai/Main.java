package com.masai;
import java.util.*;
import java.util.stream.*;
class Main{
	public static void main(String[] args) {
		
List<Integer>intList= Arrays.asList(1,2,3,4,5);
List<Integer> result=intList.stream().filter(t-> t%2==0).collect(Collectors.toList());
	      
	      System.out.println(result);
	}
}
