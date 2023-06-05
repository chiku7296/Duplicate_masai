package com.Problem_5;
import java.util.*;
public class Main {
public static void main(String[] args) {
	
	List<Trainee> trainee= new ArrayList();
	trainee.add(new Trainee("T001", "Ajay", 4.75));
	trainee.add(new Trainee("T002", "Zakir", 4.25));
	trainee.add(new Trainee("T003", "Nayan", 2.25));
	trainee.add(new Trainee("T004", "Abhishek", 3.25));
	trainee.add(new Trainee("T005", "Neha", 3.75));
	
    List<Manager> manager= new ArrayList();
    for(Trainee train : trainee) {
    	if(train.getRating()>=4.5 ) {
    		String managerId= train.getTraineeId().replace('T','M');
    		String name= train.getName();
    	
    		manager.add(new Manager(managerId,name,"PeopleManager","Headquater"));
    	}else if (train.getRating()>=3.5 ) {
    		String managerId= train.getTraineeId().replace('T','M');
    		String name= train.getName();
    	
    		manager.add(new Manager(managerId,name,"Branch Manager","Branch office"));
    	}else if (train.getRating()>=3.0 ) {
    		String managerId= train.getTraineeId().replace('T','M');
    		String name= train.getName();
    	
    		manager.add(new Manager(managerId,name,"Junior Manager","Kiosk"));
    	}else {
    		System.out.println("Traine that not selected  "+train.getTraineeId());
    	}
    }
   for(Manager m : manager) {
	   if(m.getLocation().equals("Headquater")||m.getLocation().equals("Kiosk") ) {
		   System.out.println(m.getName());
	   }
   }
}
}
