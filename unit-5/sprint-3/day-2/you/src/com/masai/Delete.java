package com.masai;
import java.time.LocalDate;
import java.util.Scanner;
import java.sql.*;
public class Delete {
	static void delete(Scanner sc ) throws SQLException {
		Connection con = connect.createConnection();
		System.out.println("Enter Med_id");
		String med_id = sc.next();
		
 		String main = "delete from  Medicine  where Med_id=?";
		  PreparedStatement ps = con.prepareStatement(main);
		
		  ps.setString(1, med_id);
	if(ps.executeUpdate()>0) {
		System.out.println("succefully Update");
	}else {
		System.out.println("unable to Update");
	}
		  
 }
}
