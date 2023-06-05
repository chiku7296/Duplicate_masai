package com.you;
class FeeExpenses{
	  double  tutionfee;
	  double taxinper;
	FeeExpenses(double a, double b){
	    tutionfee=a;
         taxinper=(100+b)/100;
	}
      
	double getTotalFee(){

		return Math.round(taxinper*tutionfee);
	}
	}

	class FeeWithCess extends FeeExpenses{
		double css;
		FeeWithCess(double a, double b,double c){
			super(a,b);
			css=(100+c+b)/100;
			
		}
		@Override
		double getTotalFee(){
		
			return Math.round(tutionfee*css);
		}
	}

	class Main{
	  public static void main(String args[]){
	    FeeExpenses fe = new FeeExpenses(45000.0, 10.0);
	    System.out.println("Total fee is " + fe.getTotalFee());
	    FeeWithCess fc = new FeeWithCess(50000.0, 11.5, 2.5);
	    System.out.println("Total fee is " + fc.getTotalFee());
	  }
	}

