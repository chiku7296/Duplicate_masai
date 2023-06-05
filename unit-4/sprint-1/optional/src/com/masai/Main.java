package com.masai;

public class Main {

	       String name;
	       int count;
		  static int getVowelCount(String name) {
            Main r= new Main();
//            r.name=name;
//            System.out.println(name);
            String[] arr =name.split("");
           
            for(int i=0;i<arr.length;i++) {
      if(arr[i].equalsIgnoreCase("a")||arr[i].equalsIgnoreCase("e")||arr[i].equalsIgnoreCase("i")||arr[i].equalsIgnoreCase("o")||arr[i].equalsIgnoreCase("u") ) {
        	r.count++;
        	
        
        }
            }
            return r.count;
		
		  }

		  public static void main(String[] args) {
		    System.out.println("Total vowel in Rajesh is " + getVowelCount("Rajesh"));
		    System.out.println("Total vowel in Yogita is " + getVowelCount("Yogita"));
		  }
		}


  


