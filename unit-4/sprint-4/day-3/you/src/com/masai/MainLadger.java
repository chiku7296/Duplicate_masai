package com.masai;
import java.util.*;
import java.time.*;
import java.lang.*;
public class MainLadger {
    public static void main(String[] args){
   Entry exone= new Entry("grocry",4000.0,LocalDate.parse("2022-04-01"),'E');
   Entry extwo= new Entry("sal",5000.0,LocalDate.parse("2022-05-01"),'E');
   Entry exthree= new Entry("rent",6000.0,LocalDate.parse("2022-06-01"),'E');
   Entry inone= new Entry("room",4000.0,LocalDate.parse("2022-04-01"),'I');
   Entry intwo= new Entry("grow",5000.0,LocalDate.parse("2022-05-01"),'I');
   Entry inthree= new Entry("satta",6000.0,LocalDate.parse("2022-04-01"),'I');
   
   Ledger ledger = new Ledger();
   ledger.addExpense(exone);
   ledger.addExpense(extwo);
   ledger.addExpense(exthree);
   
   ledger.addIncome(inone);
   ledger.addIncome(intwo);
   ledger.addIncome(inthree);
   
   double totalIncome = ledger.getTotalIncome();
   double totalExpense = ledger.getTotalExpense();
     System.out.println(ledger.getRemarkOnHealth());
   
    
    }
}
