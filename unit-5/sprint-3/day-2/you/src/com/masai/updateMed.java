package com.masai;
import java.time.LocalDate;
import java.util.Scanner;
import java.sql.*;
public class updateMed {
	

	     static void update(Scanner sc ) throws SQLException {
	    		Connection con = connect.createConnection();
	    		System.out.println("Enter Med_id");
	    		String med_id = sc.next();
	    		
	     		System.out.println(" Enter Name of medicine");
	     		String name = sc.next();
	     		
	     		System.out.println(" Enter Company");
	     		String company = sc.next();
	     		System.out.println("Price per unit");
	     		double price = sc.nextDouble();
	     		
	     		System.out.println("Mfg Date");
	     		String date = sc.next();
	     		Date dd = Date.valueOf(date);
	    		
	     		System.out.println("Exp date");
	     		
	     		String dateE = sc.next();
	     	Date ddE = Date.valueOf(dateE);
	     
	     		String main = "update Medicine Set name=?,company=?,price_per_unit=?,Mfgdate=?,Expdate=? where Med_id=?";
	    		  PreparedStatement ps = con.prepareStatement(main);
	    		
	    		  ps.setString(1, name);
	    		  ps.setString(2, company);
	    		  ps.setDouble(3, price);
	    		  ps.setDate(4,dd);
	    		  ps.setDate(5, ddE);
	    		  ps.setString(6, med_id);
	    	if(ps.executeUpdate()>0) {
	    		System.out.println("succefully Update");
	    	}else {
	    		System.out.println("unable to Update");
	    	}
	    		  
	     }
	}

