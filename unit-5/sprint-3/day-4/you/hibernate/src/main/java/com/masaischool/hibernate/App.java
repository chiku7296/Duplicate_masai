package com.masaischool.hibernate;

import jakarta.persistence.EntityManagerFactory;
import jakarta.persistence.*;

public class App 
{
    public static void main( String[] args ) {
    EntityManagerFactory emf = Persistence.createEntityManagerFactory("abc");
    EntityManager em = emf.createEntityManager();
    Student st = em.find(Student.class,4);
    System.out.println(st);
    em.close();
    
    }
}
