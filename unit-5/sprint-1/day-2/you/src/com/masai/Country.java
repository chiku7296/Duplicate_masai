package com.masai;
import java.util.*;
import java.util.function.*;
//import java.util.function.Predicate;
public class Country {
String countryName;
String continentName;
double area;
public Country(String countryName, String continentName, double area) {
	super();
	this.countryName = countryName;
	this.continentName = continentName;
	this.area = area;
}
public String getCountryName() {
	return countryName;
}
public void setCountryName(String countryName) {
	this.countryName = countryName;
}
public String getContinentName() {
	return continentName;
}
public void setContinentName(String continentName) {
	this.continentName = continentName;
}
public double getArea() {
	return area;
}
public void setArea(double area) {
	this.area = area;
}

public static void main(String args[]){
	List<Country> countryList = new ArrayList<>();
	//Add countries from Asia
	countryList.add(new Country("China", "Asia", 9596961));
	countryList.add(new Country("Japan", "Asia", 377975));
	countryList.add(new Country("India", "Asia", 3287263));
	countryList.add(new Country("Russia", "Asia", 17098246));
	
	//Add countries from Europe
	countryList.add(new Country("Belgium", "Europe", 30528));
	countryList.add(new Country("Denmark", "Europe", 43094));
	countryList.add(new Country("Germany", "Europe", 357168));
	countryList.add(new Country("Norway", "Europe", 385203));
	
	//Add countries from Africa
	countryList.add(new Country("Egypt", "Africa", 1010408));
	countryList.add(new Country("Morocco", "Africa", 446300));
	countryList.add(new Country("South Africa", "Africa", 1221037));
	countryList.add(new Country("Kenya", "Africa", 580367));
	
	Scanner sc = new Scanner(System.in);
	int choice = -1;
	 List<Country> filterArea=new ArrayList();
	
	do {
		System.out.println("1. By Area Range");
		System.out.println("2. By content in country name");
		System.out.println("3. By continent name");
		System.out.println("4. Clear Filter ");	
		System.out.println("5. Print Country List");
		System.out.println("0. Exit");
		System.out.print("Enter selection ");
		choice = sc.nextInt();
		sc.nextLine();
		 
		switch(choice) {
		case 1:
			System.out.println("enter minimum range");
			double x = sc.nextInt();
			sc.nextLine();
			System.out.println("enter maximum range");
			double y = sc.nextInt();
			sc.nextLine();
		    Predicate<Country> pre = s-> s.getArea()>=x && s.getArea()<=y;
		  
			   for(Country cl : countryList) {
			    	if(pre.test(cl)) {
			    		filterArea.add(cl);
			    	}
			   }
			 
			   break;
		case 2:
			System.out.println("enter Character");
			String ch =sc.nextLine();
			ListIterator<Country> litr= filterArea.listIterator();
			if(filterArea.size()>0) {
	
		     while(litr.hasNext()) {
		    	
		    	 if(litr.next().countryName.contains(ch)) {
		    		
		    	 }
		    	 else {
		    		 litr.remove();
		    	 }
		     }
		    break;
			}
			else {
				
				for(Country f:countryList) {
			    	 if(f.countryName.contains(ch)) {
			    		 filterArea.add(f);
			    	 }
			     }
	 break;
			}
		
		case 3 :
			System.out.println("enter Continent Name");
			String co =sc.nextLine();
			ListIterator<Country> lit=(ListIterator<Country>) filterArea.listIterator();

			if(filterArea.size()>0) {
				 while(lit.hasNext()) {
				    	
			    	 if(lit.next().countryName.contains(co)) {
			    		
			    	 }
			    	 else {
			    		 lit.remove();
			    	 }
			     }
			     
			    break;
				}
				else {
					
					for(Country f:countryList) {
				    	 if(f.continentName.contains(co)) {
				    		
				    		 filterArea.add(f);
				    	 }
				    	 
				     }
					
		 break;
				}
			
		case 4:
			filterArea=null;
			break;
		case 5:
			   PredicateConsumerDemo.displayCountryList(filterArea);
			   break;
		}
	}while(choice != 0);
	sc.close();
}

}
