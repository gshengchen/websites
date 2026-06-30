/**
 * 使用关系逻辑运算符
 */
package com.breoe.thinking.ch03;
import java.util.*;

public class Bool {
    public static void main(String[] args){
        Random rand = new Random();

        int i = rand.nextInt() % 100;
        int j = rand.nextInt() % 100;

        prt("i = " + i);
        prt("j = " + j);

        prt(" i > j is " + (i > j));
        prt(" i < j is " + (i < j));
        prt(" i >= j is " + (i >= j));
        prt(" i <= j is " + (i <= j));

        prt(" i == j is " + (i == j));
        prt(" i != j is " + (i != j));

        prt("(i < 10) && (j < 10)  is " + ((i < 10) && (j < 10)));
        prt("(i < 10) || (j < 10)  is " + ((i < 10) && (j < 10)));




    }

    static void prt(String s){
        System.out.println(s);
    }
    
}
