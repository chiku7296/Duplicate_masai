package com.masaischool.Lawyer;

import java.util.List;
import java.util.*;
public class show {
  static void showList(List<Lawyer> ls){
	  
   for(Lawyer lr : ls) {
	  System.out.println(lr.toString());
   }
  }
  static void showlawyer(Lawyer l) {
	  System.out.println(l.toString());
  }
}
