package com.boat;
import com.boat.*;
public class BookTicketIssue {
static boolean issueTicket(Passenger passenger, SpeedBoat speedBoat) {
	int count=passenger.getPassengerCounter();
	count++;
	passenger.setPassengerCounter(count);
	
	if(passenger.getPassengerCounter()>speedBoat.getCapacity()) {
		return false;
	}
	else {
		return true;
	}
}
static boolean issueTicket(Passenger passenger, MotorBoat motorBoat) {
	int count=passenger.getPassengerCounter();
	count++;
	passenger.setPassengerCounter(count);
	
	if(passenger.getPassengerCounter()>motorBoat.getCapacity()) {
		return false;
	}
	else {
		return true;
	}
	
}
}
