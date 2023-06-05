package com.masai;
import java.sql.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws SQLException {
		Connection con = connect.createConnection();
	
		int choice = 23;
		Scanner sc = new Scanner(System.in);
		
		do {
		
		System.out.println("1.ADD Medicine");
		System.out.println("2.Update Medicine with all details using Med_id");
		System.out.println("3.Delete medicine using med_id");
		System.out.println("4.View all medicine");
		System.out.println("5.View medicine with med_id");
		System.out.println("0.Exit");
	    choice = sc.nextInt();
		switch(choice){
		case 1: 
			Add_medicine.addmedicine(sc);
			break;
		case 2 : 
			updateMed.update(sc);
			break;
		case 3:
			Delete.delete(sc);
			 break;
		case 4: 
			ViewAll.view();
			break;
		}
		
		}while(choice!=0);
		
	}
}
