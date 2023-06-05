package com.masai;
import java.util.*;
import java.sql.*;
import java.time.LocalDate;
public class ViewAll {
     static void view() throws SQLException {
    	 Connection con = connect.createConnection();
    	 String main = "Select * from medicine order by name";
    	 PreparedStatement ps = con.prepareStatement(main);
//    
    ResultSet rs =	ps.executeQuery();
     while(rs.next()){
    String id = rs.getString("med_id");
    String name = rs.getString("name");
    String com = rs.getString("company");
    double price = rs.getDouble("price_per_unit");
    LocalDate date1 = LocalDate.parse(rs.getString("Mfgdate"));
    LocalDate date2 = LocalDate.parse(rs.getString("Expdate"));
    	 System.out.println("["+ id+" "+ name +" " + com + "  "+ price + " "+ date1+" "+date2+"]");
     }

	   
     }  
     
}
