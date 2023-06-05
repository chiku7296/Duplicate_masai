package com.masai;
import java.util.*;
import java.time.*;
import java.lang.*;
public class Ledger {
	static List li = new ArrayList();
	static List list = new ArrayList();
	static double sum1=0.0;
	static double sum2=0.0;
public static void addExpense(Entry s) {
	
	list.add(s);
}
public static void addIncome(Entry s) {
    
	li.add(s);
}
public static double getTotalIncome() {
	
    
	ListIterator<Entry>ltr = li.listIterator();
	while(ltr.hasNext()) {
		sum1+=ltr.next().getAmount();
	}
	return sum1;
}
public static double getTotalExpense() {
	
    
	ListIterator<Entry>ltr = list.listIterator();
	while(ltr.hasNext()) {
		sum2+=ltr.next().getAmount();
	}
	return sum2;
}
public static String getRemarkOnHealth() {
	if(sum1-sum2/sum1*100>=75.00) {
		
		return "You are good";
	}
	else {
		return "prevent from expensess";
	}
}
}
