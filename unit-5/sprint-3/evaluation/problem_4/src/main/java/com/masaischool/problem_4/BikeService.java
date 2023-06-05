package com.masaischool.problem_4;
import java.sql.*;
import java.sql.Date;
import java.time.LocalDate;
import java.util.*;
public class BikeService {
      static void AddBike(Connection con) throws SQLException {
    	      Scanner sc = new Scanner(System.in);
    	     System.out.println("Enter bike_id");
    	     String id = sc.next();
    	     System.out.println("Enter brand");
    	     String brand =sc.next();
    	     System.out.println("Enter model");
    	     String model  = sc.next();
    	     System.out.println("Enter price");
    	     int price = sc.nextInt();
    	     System.out.println("Enter reg_date YYYY MM DD");
    	     String date = sc.next();
    	  
    	    String qurey = "Insert into bike(bike_id ,brand ,model,price ,registration_date) values(?,?,?,?,?)";
    	       PreparedStatement ps = con.prepareStatement(qurey);
    	       ps.setString(1,id);
    	       ps.setString(2,brand);
    	       ps.setString(3,model);
    	       ps.setInt(4,price);
    	       ps.setDate(5, Date.valueOf(date));
    	       if(ps.executeUpdate()>0) {
    	    	   System.out.println("bike added");
    	       }else {
    	    	   System.out.println("something went wrong");
    	       }
      }
      static void updateBike(Connection con) throws SQLException {
    	  
    	  
    	   Scanner sc = new Scanner(System.in);
  	     System.out.println("Enter bike_id");
  	     String id = sc.next();
  	     System.out.println("new  brand");
  	     String brand =sc.next();
  	     System.out.println("new model");
  	     String model  = sc.next();
  	     System.out.println("new price");
  	     int price = sc.nextInt();
  	     System.out.println("new reg_date YYYY MM DD");
  	     String date = sc.next();
  	  
          String update = "update bike set brand=?,model=?,price=? ,registration_date=? where bike_id=?";
             PreparedStatement us = con.prepareStatement(update);
            
             us.setString(1, brand);
             us.setString(2, model);
             us.setInt(3, price);
             us.setDate(4, Date.valueOf(date));
             us.setString(5,id);
             if(us.executeUpdate()>0) {
          	   System.out.println("bike updated");
             }else {
          	   System.out.println("something went wrong");
             }
      }
      static List<Bike> getList(Connection con) throws SQLException{
    	  List<Bike> ls = new ArrayList();
    	  String qu = "Select * from Bike";
    	  PreparedStatement us = con.prepareStatement(qu);
    	  ResultSet rs = us.executeQuery();
    	  while(rs.next()) {
    		  String bike_id = rs.getString("bike_id");
    		  String brand = rs.getString("brand");
    		  String model = rs.getString("model");
    		 int price = rs.getInt("price");
    	      Date registration_date = rs.getDate("registration_date");
    		
    		  
    		  ls.add(new Bike(bike_id,brand, model, price, registration_date));

    	  }
    	  return ls;
      }
      static void show(List<Bike> ls) {
          
    	  ls.forEach(t->System.out.println(t.toString()));
    	  Scanner sc = new Scanner(System.in);
    	  int choice;
    	 do {
    		 System.out.println("1. search by price range");
    		 System.out.println("2.sort by price desc order");
    		 System.out.println("3. display distinct brand");
    		 choice = sc.nextInt();
    		 switch(choice) {
    		 case 1:
    			 System.out.println("enter min price");
    			int min = sc.nextInt();
    			System.out.println("enter max price");
    			int max = sc.nextInt();
    			BikeService.search(ls,min,max); 
    			break;
    		 case 2:
    			 BikeService.sort(ls);
    			 break;
    		 }
    		 
    	 }while(choice!=0);
    	  
      }
      static void search(List<Bike> ls , int min, int max) {
    	  ls.stream().filter(t->t.getPrice()>=min & t.getPrice()<=max).forEach(t->System.out.println(t.toString()));
      }
      static void sort(List<Bike> ls) {
    	  ls.stream().sorted((t1,t2)->t1.getPrice()>t2.getPrice() ? -1 : 1).forEach(t->System.out.println(t.toString()));
      }
      
}
