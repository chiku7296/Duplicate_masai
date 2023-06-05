package com.masai;
import java.util.*;
import java.util.function.Consumer;
import java.util.function.Predicate;
public class PredicateConsumerDemo implements Consumer{
public static void displayCountryList(List<Country> list) {
list.forEach(s->System.out.println(s.countryName+ "  from "+s.continentName+ "Area is "+s.area+"sqkm"));
	
}

public static List<Country> filterCountryArea(List<Country>list,Predicate<Country>filterByArea){
	return list;
}


@Override
public void accept(Object t) {
	// TODO Auto-generated method stub
	
}
}
