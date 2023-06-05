package com.masai;
import java.sql.*;
public class connect {
    static Connection createConnection() {
    	Connection con =null;
    	try {
    		Class.forName("com.mysql.cj.jdbc.Driver");
    		con = DriverManager.getConnection("jdbc:mysql://localhost:3306/SB101_Sp3_day_2","root","Apsharmaj@123");
   String createTable = "create table if not exists medicine(med_id varchar(4) primary key,"
   		+ "name varchar(20)unique not null,"
   		+ "company varchar(20)not null,"
   		+ "price_per_unit Decimal(6,2) not null,"
   		+ "Mfgdate date, "
   		+ "Expdate date )";
    	 Statement st = con.createStatement();
    	 st.execute(createTable);
    		
			
		} catch (Exception e) {
		        System.out.println(e.getMessage());
		}
    	return con;
    	
    }
}
