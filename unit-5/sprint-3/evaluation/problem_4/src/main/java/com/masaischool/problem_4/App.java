package com.masaischool.problem_4;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ResourceBundle;
import java.util.*;
import com.mysql.cj.conf.PropertyDefinitions.DatabaseTerm;

public class App {
	static String url;
	static String user;
	static String pass;
	static {
		ResourceBundle bundle = ResourceBundle.getBundle("dbdetails");
		url=bundle.getString("URL");
		user=bundle.getString("USER");
		pass=bundle.getString("PASS");
		
	}
    static Connection createConnection() throws SQLException {
    	return DriverManager.getConnection(url,user,pass);
    }
    public static void main( String[] args ) throws SQLException {
    Connection con =createConnection();
    Scanner sc = new Scanner(System.in);
    int choice;
     do {
    	 System.out.println("1.ADD Bike");
    	 System.out.println("2.Update Bike");
    	 System.out.println("3.Get list of bike");
    	
    	 
    	 System.out.println("0. for exit");
    	 choice =sc.nextInt();
    	 switch(choice) {
    	 case 1: 
    		 BikeService.AddBike(con);
    		break;
    	 case 2 : 
    		BikeService.updateBike(con); 
    		break;
    	 case 3:
    		 BikeService.show(BikeService.getList(con));
    		 break;
    		 default:
    			 System.out.println("enter vaild details");
    			 break;
    	 }
     }while(choice!=0);
      
    }
}
