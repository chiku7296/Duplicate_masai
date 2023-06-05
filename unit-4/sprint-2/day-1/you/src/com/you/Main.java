package com.you;

public class Main {

	public static void main(String args[]) {
//		1 2 3 4
//		5 6 3 1
//		7 1 2 3
//		5 8 4 6
		int[][] arr= new int[4][4];
		arr[0][0]=1;
		arr[0][1]=2;
		arr[0][2]=3;
		arr[0][3]=4;
		
		arr[1][0]=5;
		arr[1][1]=6;
		arr[1][2]=3;
		arr[1][3]=1;
		
		arr[2][0]=7;
		arr[2][1]=1;
		arr[2][2]=2;
		arr[2][3]=3;
		
		arr[3][0]=5;
		arr[3][1]=8;
		arr[3][2]=4;
		arr[3][3]=6;
		int sum=0;
		int sum1=0;
		for(int i=0;i<arr.length;i++) {
			for(int j=0;j<arr[i].length;j++) {
				
				if(i==j) {
					sum+=arr[i][j];
				}
				else if (i+j==arr.length-1) {
					sum1+=arr[i][j];
				}
			}
		}
//		System.out.println(sum);
//		System.out.println(sum1);
		System.out.println(sum-sum1);
		
		
}
}
