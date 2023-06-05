

package com.mmasai;
import java.util.*;
public class Demo implements Comparable<Demo>{
int productId;
String productName;
int quantity;
int price;
public Demo(int productId, String productName, int quantity, int price) {
	super();
	this.productId = productId;
	this.productName = productName;
	this.quantity = quantity;
	this.price = price;
}

@Override
public String toString() {
	return "Demo [productId=" + productId + ", productName=" + productName + ", quantity=" + quantity + ", price="
			+ price + "]";
}

@Override
public int compareTo(Demo o1) {
	if(this.price>o1.price) {
		return 1;
	}
	else if(this.price<o1.price) {
		return -1;
	}
	else {
		return 0;
	}
	
}
}
