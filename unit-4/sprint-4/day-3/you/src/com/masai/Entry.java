package com.masai;
import java.util.*;
import java.time.*;
import java.lang.*;
public class Entry {
String desc;
Double amount;
LocalDate date;
char ie;
  Entry(String desc, Double amount, LocalDate date,char ie){
	  this.desc=desc;
	  this.amount=amount;
	  this.date=date;
	  this.ie =ie;
  }

  
  
  public String getDesc() {
	return desc;
}



public void setDesc(String desc) {
	this.desc = desc;
}



public Double getAmount() {
	return amount;
}



public void setAmount(Double amount) {
	this.amount = amount;
}



public LocalDate getDate() {
	return date;
}



public void setDate(LocalDate date) {
	this.date = date;
}



public char getIe() {
	return ie;
}



public void setIe(char ie) {
	this.ie = ie;
}



@Override
  public String toString() {
	if(getIe()=='E') {
	  return ""+getDate()+" "+"-"+getAmount()+" "+getDesc();
	}
	else {
		return ""+getDate()+" "+getAmount()+" "+getDesc();
	}
  }


}
