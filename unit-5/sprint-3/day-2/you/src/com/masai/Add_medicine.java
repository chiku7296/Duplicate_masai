package com.masai;

import java.time.LocalDate;
import java.util.Scanner;
import java.sql.*;
public class Add_medicine {
     static void addmedicine(Scanner sc ) throws SQLException {
    		Connection con = connect.createConnection();
    		System.out.println(" Enter Med_id");
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
     
     		String main = "Insert Into Medicine values(?,?,?,?,?,?)";
    		  PreparedStatement ps = con.prepareStatement(main);
    		  ps.setString(1, med_id);
    		  ps.setString(2, name);
    		  ps.setString(3, company);
    		  ps.setDouble(4, price);
    		  ps.setDate(5,dd);
    		  ps.setDate(6, ddE);
    	if(ps.executeUpdate()>0) {
    		System.out.println("succefully Added");
    	}else {
    		System.out.println("unable to add");
    	}
    		  
     }
}
