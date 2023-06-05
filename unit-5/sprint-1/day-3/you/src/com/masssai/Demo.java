package com.masssai;
import java.util.*;
public class Demo {
public static void main(String[] args) {
	List<Product> products = new ArrayList();
	products.add(new Product(1345,"shop",40,4));
	products.add(new Product(1445,"hairOil",409,8));
	products.add(new Product(1545,"dryer",390,1345));
	products.add(new Product(17845,"Shampu",140,123));
	products.add(new Product(16745,"HandWasher",590,135));
	
	List<Product>filtered = new ArrayList();
	
	products.forEach(t->{
		if(t.quantity>10) {
			filtered.add(t);
		}
	});
	
	Collections.sort(filtered,(Product t1, Product t2)->t1.price>t2.price ? 1:-1);
	products.forEach(t->System.out.print(t.price+ " "));
	System.out.println();
	filtered.forEach(t->System.out.print(t.price+ " "));
	
}
}
