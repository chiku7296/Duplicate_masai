package com.masaischool.Lawyer;
import java.sql.*;
import java.util.ResourceBundle;
import java.util.*;

public class App 
{
	static String url ;
	static String user;
	static String pass;
	
	static {
		ResourceBundle rb = ResourceBundle.getBundle("dbdetails");
		url = rb.getString("URL");
		user = rb.getString("USER");
		pass= rb.getString("PASSWORD");
		
	}
	static Connection createConnection() throws SQLException {
		return DriverManager.getConnection(url,user,pass);
	}
	
    public static void main( String[] args ) throws SQLException {
    	Connection con = createConnection();
    	Scanner sc = new Scanner(System.in);
    	Service ser = new Service();
      int choice;
         do {
        	 System.out.println("1. For get lawyer List ");
        	 System.out.println("2.find lawyer with id ");
        	 System.out.println("3.Add lawyer");
        	 System.out.println("4.delete lawyer with id");
        	 System.out.println("5. update lawyer experience with id");
        choice = sc.nextInt();
        	 switch(choice) {
        	 case 1:
        		List<Lawyer> ls =ser.getLawyerList();
        		show.showList(ls);
        		break;
        	 case 2:
        		 System.out.println("Enter lawyer Id");
        		int  lw_id= sc.nextInt();
        		
        		show.showlawyer(ser.findLawyerById(lw_id));
        		break;
        	 case 3:
        		System.out.println("Enter lawyer Id must be unique");
        	int id = sc.nextInt();
        		System.out.println("Enter lawyer name");
        		 String name = sc.next();
        		 System.out.println("Enter lawyer email");
        		  String email = sc.next();
        		  System.out.println("Enter lawyer address");
        	    String address = sc.next();
        	    System.out.println("Enter lawyer experience");
        			int experience= sc.nextInt();
        		 Lawyer lw = new Lawyer(id,name,email,address,experience);
        		 System.out.println(ser.saveLawyer(lw));
        		 break;
        	 case 4:
        		 System.out.println("Delete lawyer with id Enter id");
        		 int lwid = sc.nextInt();
        		 System.out.println(ser.deleteLawyerById(lwid));
        		 break;
        	 case 5:
        		 System.out.println("enter lawyer id");
        		 int lwUid = sc.nextInt();
        		 System.out.println("Enter new experience");
        		 int newExp = sc.nextInt();
        		System.out.println(ser.updateLawyerExperience(lwUid,newExp));
        		
        		 break;
        	 case 0:
        		 System.out.println("thank you ");
        		 break;
        		 default:
        			 System.out.println("enter vaild selection");
        			 break;
        		 
        	 }
        	 
         }while(choice!=0);
    }
   
}
