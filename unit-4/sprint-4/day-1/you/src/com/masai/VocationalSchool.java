
package com.masai;
import java.util.*;
import java.time.*;
import java.text.*;
public class VocationalSchool {
	public static long getCourseDurationinDays(String start,String end) throws ParseException {
		SimpleDateFormat sdf= new SimpleDateFormat("dd-MM-yyyy");
		Date st = sdf.parse(start);
		Date ed= sdf.parse(end);
		
		return ed.getTime()/1000/3600/24-st.getTime()/1000/3600/24;
	}
	public static long getMedicalLeavesDurationinDays(String start,String end,long courseDurationInDays) throws ParseException {
		SimpleDateFormat sdf= new SimpleDateFormat("dd-MM-yyyy");
		Date st = sdf.parse(start);
		Date ed= sdf.parse(end);
		
		return ed.getTime()/1000/3600/24-st.getTime()/1000/3600/24;
	}
	public static double getAttendancePercentage(long cd, long ml, long at) {
		return at/cd*100;
	}
	public static String getRemark(double atper) {
		if(atper>10) {
			return "good";
		}
		else {
			return "bad";
		}
	}
	
	  public static void main(String args[]){
	    Scanner sc = new Scanner(System.in);
	    try{
	      System.out.print("Enter course start date of course ");
	      String courseStartDate = sc.next();
	      System.out.print("Enter course end date of course ");
	      String courseEndDate = sc.next();
	      long courseDurationInDays = getCourseDurationinDays(courseStartDate, courseEndDate);
	      System.out.println("Total course duration is " + courseDurationInDays + " days");
	      System.out.print("Have you taken medical leaves? (y/n) ");
	      char takenMedicalLeave = sc.next().toLowerCase().charAt(0);
	      long medicalLeavesInDays = 0;
	      if(takenMedicalLeave == 'y'){

	        System.out.print("Enter medical leave start date ");
	        String medicalStartDate = sc.next();
	        System.out.print("Enter medical leave end date ");
	        String medicalEndDate = sc.next();
	       medicalLeavesInDays = getMedicalLeavesDurationinDays(medicalStartDate,medicalEndDate, courseDurationInDays);
	        System.out.println("Total medical leave duration is " + medicalLeavesInDays + " days");
	      }
	      System.out.print("Enter number of days you attended this course ");
	      long attendanceInDays = sc.nextLong();
	      double attendancePercentage = getAttendancePercentage(courseDurationInDays,
	      medicalLeavesInDays, attendanceInDays);
	      System.out.println(getRemark(attendancePercentage));
	    }catch(Exception ex){
	      System.out.println(ex.getMessage());
	    }
	    sc.close();
	  }
	}

	

