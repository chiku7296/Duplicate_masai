package com.masaischool.SB101_sp3_day_4;
import java.sql.*;
import java.util.*;
public class Service {
   static void AddEmploye(Connection con,Scanner sc) {
	   
	   try {
		   System.out.println("Enter employee id it must be unique");
			  int emp_id = sc.nextInt();
			   System.out.println("Enter employee name");
			   String name = sc.next();
			   System.out.println("Enter employee salary");
			   double sal = sc.nextDouble();
			   String query = "insert into employee values(?,?,?)";
			  
			   PreparedStatement ps = con.prepareStatement(query);
			   ps.setInt(1,emp_id);
			   ps.setString(2,name);
			   ps.setDouble(3, sal);
			   if(ps.executeUpdate()>0) {
				   System.out.println("added successfully");
			   }else {
				   System.out.println("issue inside updating");
			   }
			
	} catch (Exception e) {
		
		System.out.println(e.getMessage());
	
	}
	 
   }
static void Updateemp(Connection con,Scanner sc) {
	   
	   try {
		   System.out.println("Enter employee id ");
			  int emp_id = sc.nextInt();
			
			   System.out.println("Enter employee new salary");
			   double sal = sc.nextDouble();
			   String query = "update employee Set salary=? where emp_id=?";
			  
			   PreparedStatement ps = con.prepareStatement(query);

			   ps.setDouble(1,sal );
			   ps.setInt(2,emp_id);
			 
			   if(ps.executeUpdate()>0) {
				   System.out.println("updated successfully");
			   }else {
				   System.out.println("issue inside updating");
			   }
			
	} catch (Exception e) {
		
		System.out.println(e.getMessage());
	
	}
}
	   static void Delete(Connection con,Scanner sc) {
		   
		   try {
			   System.out.println("Enter employee id ");
				  int emp_id = sc.nextInt();
				
				   String query = "delete from employee where emp_id=?";
				  
				   PreparedStatement ps = con.prepareStatement(query);

				   ps.setInt(1,emp_id);
				 
				   if(ps.executeUpdate()>0) {
					   System.out.println("Deleted successfully");
				   }else {
					   System.out.println("issue inside updating");
				   }
				
		} catch (Exception e) {
			
			System.out.println(e.getMessage());
		
		}
	 
   }
  static void View(Connection con,Scanner sc) {
		   
		   try {
			   System.out.println("Enter employee id ");
				  int emp_id = sc.nextInt();
				
				   String query = "Select * from employee where emp_id=?";
		
				   PreparedStatement ps = con.prepareStatement(query);
					  ps.setInt(1,emp_id);
            ResultSet rs = ps.executeQuery();
            rs.next();
           int em_id = rs.getInt("emp_id");
           String name = rs.getString("name");
            Double sal = rs.getDouble("Salary");
            System.out.println(em_id + " "+ name + " "+ sal);
				
		} catch (Exception e) {
			
			System.out.println(e.getMessage());
		
		}
  }
}
