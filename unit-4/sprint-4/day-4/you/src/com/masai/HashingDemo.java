package com.masai;
import java.util.*;
public class HashingDemo  {
	
	
	public static void main(String[] args) {
		String names[]= {
		"pravesh","himani","rahul","radhe","op","hannu","jay","prahi",
		"gyanwati","opsharma","anshu","aarohi","aarushi"
		};
		
		Map<Character,List<String>> map = addName(names);
		System.out.println("Original Map is ");
		System.out.println(map);
		display(map);
		System.out.println();
		if(searchName(map,"pravesh")) {
			System.out.println("pravesh in map ");
		}
		else {
			System.out.println("pravesh not found in map ");
		}
		System.out.println();
		if(removeName(map,"pravesh")) {
			System.out.println("pravesh is removed ");
		}
		else {
			System.out.println("pravesh not found in map ");
		}
		System.out.println();
		
		display(map);
	}
	
	
	
	
	
	
	
public static Map<Character,List<String>> addName(String names[]){
    Arrays.sort(names);
	
	Map<Character,List<String>> mp = new TreeMap();
	for(String s: names) {
		List<String> list = new ArrayList();
		for(String l : names) {
			if(s.charAt(0)==l.charAt(0)) {
			list.add(l)	;
			mp.put(s.charAt(0),list);
			}
		}
	}
	return mp;
}
public static void display(Map<Character,List<String>> map) {
	Set<Map.Entry<Character,List<String>>> me = map.entrySet();
	
	for(Map.Entry l : me) {
		
    System.out.println(l.getKey()+":"+ l.getValue());
	}
}
public static boolean searchName(Map<Character,List<String>> map,String name) {
	Set<Map.Entry<Character,List<String>>> mp = map.entrySet();
	int count=0;
	for(Map.Entry l : mp) {
	   if(l.getValue().toString().contains(name)) {
		  count++;
	   }
	}
	if(count>0) {
		return true;
	}
	else {
		return false;
	}
	
	
}
public static boolean removeName(Map<Character,List<String>> map,String name) {

	Set<Map.Entry<Character,List<String>>> mp = map.entrySet();
	int count=0;
	for(Map.Entry l: mp) {
		   if(l.getValue().toString().contains(name)){
			 
				  count++;
			   }
			}
			if(count>0) {
				return true;
			}
			else {
				return false;
			}
	}
}




