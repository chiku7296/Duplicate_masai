package com.youact;

public interface Intr {
void meth();
 default void teeth() {
	 System.out.println("inside intr");
}
}
