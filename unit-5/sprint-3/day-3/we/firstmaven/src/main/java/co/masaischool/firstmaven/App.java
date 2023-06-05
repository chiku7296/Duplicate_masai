package co.masaischool.firstmaven;

import java.sql.*;
import java.time.LocalDate;
import java.util.ResourceBundle;

public class App 
{
	static String URL ;
	static String user;
	static String pass;
	static {
	    ResourceBundle bundle = ResourceBundle.getBundle("dbdetails");
	    URL = bundle.getString("URL");
	     user = bundle.getString("USERNAME");
	     pass = bundle.getString("PASSWORD");
	    
	}
	static Connection createConnection() throws SQLException{
		
		return DriverManager.getConnection(URL,user,pass);
	}
    public static void main( String[] args ) {
          try {
        	 
        	  Connection con = createConnection();
        	 
        		con.setAutoCommit(false);
        	
        	 String query = "Insert into emeployee values(?,?,?)";
            PreparedStatement ps = con.prepareStatement(query);
               ps.setString(1,"pra");
               ps.setDouble(2, 40);
               ps.setDate(3, Date.valueOf(LocalDate.now()));
           
               if(ps.executeUpdate()>0) {
            	   System.out.println("sss");
               }else {
            	   System.out.println("somting went wrong");
               }
               con.commit(); 
  		} catch (Exception e) {
			// TODO: handle exception
		}
   
    }
}
