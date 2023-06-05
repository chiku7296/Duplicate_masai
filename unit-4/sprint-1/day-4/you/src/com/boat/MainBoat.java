package com.boat;
import java.util.*;
import com.boat.*;
public class MainBoat {
static void printTicketDetails(Passenger ps, MotorBoat mb , SpeedBoat sb) {
	System.out.println("passenger id "+ps.getPassengerId());
	System.out.println("passenger name "+ps.getPassengerName());
	if(mb!=null) {
		System.out.println("moterBoat number is  "+ps.getMotorBoat().getMoterBoatNumber());	
	}else {
		System.out.println("speedBoat number is  "+ps.getSpeedBoat().getSpeedBoatNumber());	
	}
		
}
public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	MotorBoat mb = new MotorBoat("MB001");
	mb.setCapacity(5);
	SpeedBoat sb = new SpeedBoat("SB001");
	sb.setCapacity(3);
	int counter = 1;
	Passenger ps =null;
	
	do {
		System.out.println("enter name of Passenger");
		ps=new Passenger(sc.next());
		System.out.println("enter 1 to motorboat or enter 2 speedboat");
		int choice=sc.nextInt();
		if(choice==1) {
			boolean isAlloted=BookTicketIssue.issueTicket(ps,mb);
			if(isAlloted==true) {
				printTicketDetails(ps,mb,null);
			}	
			else {
				System.out.println("seat not available wait for next round");
			}
		}
		else if (choice==2) {
			boolean isAlloted=BookTicketIssue.issueTicket(ps,sb);
			if(isAlloted==true) {
				printTicketDetails(ps,null,sb);
			}
			else {
				System.out.println("seat not available wait for next round");
			}
		}
		System.out.println();
		
	}while(++counter<=10);
	sc.close();
}
}
