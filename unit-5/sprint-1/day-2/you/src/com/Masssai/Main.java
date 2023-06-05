package com.Masssai;
import java.util.function.*;
import java.util.*;
class City{
  String cityName;

public City(String cityName) {
	
	this.cityName = cityName;
}

@Override
public String toString() {
	return "City [cityName=" + cityName + "]";
}
  
}
public class Main {
   public static void main(String[] args) {
	List<City> city= new ArrayList();
	city.add(new City("mumbai"));
	city.add(new City("delhi"));
	city.add(new City("jaipur"));
	city.add(new City("pune"));
	city.add(new City("benglore"));
	city.forEach(f-> System.out.println(f));
}
   
}
