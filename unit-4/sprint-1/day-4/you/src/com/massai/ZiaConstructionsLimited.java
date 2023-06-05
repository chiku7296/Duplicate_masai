package com.massai;


	public class ZiaConstructionsLimited{
		
		double totalArea;
		double labourCharges;
		double materialCharges;
	 double getTotalCost(double totalArea, double labourCharges){
		
			this.totalArea=totalArea;
			this.labourCharges=labourCharges;
			return totalArea*labourCharges;
		}
		double getTotalCost(double totalArea, double labourCharges,
		double materialCharges){
			this.totalArea=totalArea;
			this.labourCharges=labourCharges;
			this.materialCharges=materialCharges;
			return totalArea*labourCharges+ totalArea*materialCharges;
		}
		
		
		}
	class ZiaConstructionsLimitedTester{
		public static void main(String args[]){
		ZiaConstructionsLimited zcl = new ZiaConstructionsLimited();
		System.out.println(zcl.getTotalCost(1500, 250));
		System.out.println(zcl.getTotalCost(1500, 250, 350));
		}
		}

