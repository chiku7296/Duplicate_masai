package com.masai;

import java.sql.*;

public class Main {
   public static void main(String[] args) {
	   Connection con= null;
try {
	   
Class.forName("com.mysql.cj.jdbc.Driver");
   con = DriverManager.getConnection("jdbc:mysql://localhost/sb101_sp3_day_1","root","Apsharmaj@123");
   System.out.println("connection established");
   String tablequery = "create table if not exists mobile(id int primary key auto_increment,"
   		+ "model_no varchar(4) unique not null,"
   		+ "company varchar(4) not null,"
   		+ "price Int(6) not null,"
   		+ "MFGdate date  )";
   Statement statement = con.createStatement();
   statement.execute(tablequery);
   String addMobile = "insert into mobile(model_no,company,price,MFGdate) values(7296,'app',100,'2020-01-01')";
//   statement.execute(addMobile);
   String update = "update mobile Set company='sam',price=99,MFGdate = '2011-01-01' where model_no=7296";
   statement.execute(update);
   String delete = "delete from mobile where model_no=7296";	
   statement.execute(delete);
} catch (Exception e) {
   e.printStackTrace();
}

}
}