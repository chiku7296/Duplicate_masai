package com.mmasai;
import java.util.*;
public class Main {
public static void main(String[] args) {
	List<Demo> pro = new ArrayList<Demo>();
	pro.add(new Demo(111,"shop",2,29));
	pro.add(new Demo(112,"perfume",4,32));
	pro.add(new Demo(114,"hairoil",2,38));
	pro.add(new Demo(116,"toothpaste",10,29));
	pro.add(new Demo(119,"hairoil",2,38));
	
	Collections.sort(pro);
	System.out.println(pro);
}
}

