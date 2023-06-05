package com.massai;
import java.util.*;
import java.util.stream.*;
public class Main {
	public static void main(String[] args) {
		List<Fruit> fruits = Arrays.asList(
				new Fruit("Orange", 10, 89),
				new Fruit("Papaya", 20, 90),
				new Fruit("Apple", 10, 45),
				new Fruit("Watermelon", 10, 56),
				new Fruit("Guava", 10, 40),
				new Fruit("Pomegranate", 10, 200)
			);
	
Map<String, Integer> fruitMap= fruits.stream().collect(Collectors.toMap(m->m.getName(),m->
m.getPrice()*m.getQuantity()));
	System.out.println(fruitMap);
//	int total=0;
fruits.stream().forEach(i-> System.out.println(i.price*i.quantity));
	List<String> list= fruits.stream().filter(f->f.price>50).map(k->k.name).collect(Collectors.toList());
	System.out.println(list);
	}
}
