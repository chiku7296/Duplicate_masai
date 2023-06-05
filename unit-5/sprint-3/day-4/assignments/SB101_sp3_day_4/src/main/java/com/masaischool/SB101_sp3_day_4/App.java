package com.masaischool.SB101_sp3_day_4;
import java.sql.*;
import java.util.ResourceBundle;
import java.util.*;
public class App 
{
	static String url;
	static String user;
	static String pass;
	
	static {
	    ResourceBundle bundle = ResourceBundle.getBundle("dbdetails");
	    url = bundle.getString("URL");
	    user  = bundle.getString("USER");
	    pass = bundle.getString("PASSWORD");
	    
	}
	static Connection createConnection() throws SQLException {
		Connection con = DriverManager.getConnection(url,user,pass);
		return con;
	}
	static void createtable(Connection con) throws SQLException {
		  Statement st  = con.createStatement();
	       String query = "create table if not exists employee(emp_id int primary key,"
	       		+ "name varchar(255),"
	       		+ "salary double)";
	       st.execute(query);
	}
    public static void main( String[] args ){
    	try {
    		   Connection con = createConnection();     
    	        createtable(con);
    	        Scanner sc = new Scanner(System.in);
    	    	int choice ;
    	    	do {
    	    		System.out.println("Enter selection");
    	    		System.out.println("1.For Add employee");
    	    		System.out.println("2.Update Salary");
    	    		System.out.println("3.Delete employee");
    	    		System.out.println("4.View employee Details");
    	    		System.out.println("0.for exits");
    	    		choice = sc.nextInt();
    	    		switch(choice) {
    	    		case 1: 
    	    			
    	    			Service.AddEmploye(con,sc);
    	    			break;
    	    		case 2 : 
    	    			Service.Updateemp(con,sc);
    	    			break;
    	    		case 3 :
    	    		  Service.Delete(con,sc);
    	    		case 4 : 
    	    			Service.View(con,sc);
    	    			break;
    	    			default:
    	    				System.out.println("enter vaild input ");
    	    		}
    	    		
    	    	}while(choice!=0);
		} catch (Exception e) {
		System.out.println(e.getMessage());
		}
    	
     
    }
}
