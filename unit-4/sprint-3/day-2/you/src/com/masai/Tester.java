package com.masai;
interface Taxation{
	public double calculateTax();
		  
}

	class SalariedPeople implements Taxation{
		double sal;
		SalariedPeople(double a){
			sal=a;
			
		}
	        
		public double calculateTax(){
			if(sal<=250000) {
				return 0;
			}
			else if(sal<=500000 && sal>250000){
				return (sal-250000)*10/100;
			}
			else if (sal<=1000000 && sal>500000){
				return 25000+(sal-500000)*20/100;
			}
			else if (sal>1000000 && sal<=10000000) {
				return 100000+25000+(sal-1000000)*30/100;
			}
			else if(sal>10000000) {
				return 750000;
			}
			else {
				return 0;
			}
	}
	}

	class BusinessPeople implements Taxation{
		double sell;
		double pur;
		double cost;
		double net;
		BusinessPeople(double sell,double pur,double cost ){
			this.sell=sell;
			this.pur=pur;
			this.cost=cost;
			 net=sell-cost-pur;
//			System.out.print(net);
		}
	
		
		public double calculateTax() {
			if(net<500000) {
				return 0;
			}
			else if(net<=1500000 && net>500000){
				return (net-500000)*10/100;
			}
			else if (net<=5000000 && net>1500000){
				return 100000+(net-1500000)*22/100;
			}
			else if (net>5000000 && net<=50000000) {
				return 100000+220000+(net-5000000)*32/100;
			}
			else if(net>50000000){
				return 1250000 ;
			}
			else {
				return 0;
			}
		}
	}
	
public class Tester {
	
	 public static void main(String args[]) {
	    Taxation taxation = null;
	    taxation = new SalariedPeople(1500000);
	    System.out.println("The total tax for this salaries person is " + taxation.calculateTax());
	    taxation = new BusinessPeople(27500000, 17500000, 5100000);
	    System.out.println("The total tax for this business person is " + taxation.calculateTax());
	  }
}

//	Output
//	The total tax for this salaries person is 275000/-
//	The total tax for this business person is 848000
//
//	Explanation
//	For annual income of salary 1500000
//	Tax for income that is above 1000000 is 150000
//	Tax for income that is above 500000 is 100000
//	Tax for income that is above 250000 is 25000
//	Total tax: 2,75,000
//
//	For annual income of business person with total sale: 2,75,00,000 total purchase: 1,75,00,000 and operating cost: 51,00,000
//	Net profit is: 49,00,000
//	Tax for Net profit that is above 15,00,000 is 7,48,000
//	Tax for Net profit that is above 5,00,000 is 1,00,000
//	Total tax: 8,48,000
//	```

