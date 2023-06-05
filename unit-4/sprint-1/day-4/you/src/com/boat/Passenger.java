package com.boat;
import com.boat.*;
public class Passenger {
	private String PassengerId;
	private String PassengerName;
	private SpeedBoat speedBoat;
	private MotorBoat motorBoat;
	private static int passengerCounter=0;
	
	public Passenger(String PassengerName) {
		this.PassengerName=PassengerName;
	}
	//getter setter

	public String getPassengerId() {
		return "Ps00"+getPassengerCounter();
	}

	

	public SpeedBoat getSpeedBoat() {
		speedBoat=new SpeedBoat("SB001");
		return speedBoat;
	}

	public MotorBoat getMotorBoat() {
		motorBoat=new MotorBoat("MB001");
		return motorBoat;
	}

	public String getPassengerName() {
		return PassengerName;
	}

	

	public static int getPassengerCounter() {
		return passengerCounter;
	}

	public static void setPassengerCounter(int passengerCounter) {
	Passenger.passengerCounter = passengerCounter;
	}
}
