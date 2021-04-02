/**
 * 算术运算符的用法
 */
// package com.breoe.thinking.ch03;
import java.util.*;

public class MathOps {
    static void prt(String s){
        System.out.println(s);
    }
    
    static void pInt(String s, int i){
        prt(s + " = " +i);
    }

    static void pFlt(String s, float f){
        prt(s + " = " + f );
    }

    public static void main(String[] args){
         Random rand = new Random();
         int i, j , k;
         j = rand.nextInt() % 100;
         k = rand.nextInt() % 100;
         pInt("j", j);
         pInt("K", k);

         i = j + k;
         pInt("j + K", i);

         i = j - k;
         pInt("j - K", i);

         
         i = j * k;
         pInt("j * K", i);
         
         i = j / k;
         pInt("j / K", i);
         
         i = j % k;
         pInt("j % K", i);

         j %= k;
         pInt("j %=K", j);

         float u, v, w;
         v = rand.nextFloat();
         w = rand.nextFloat();

         pFlt("V", v);
         pFlt("w", w);

         u = v + w;
         pFlt("v + w", u);

         u = v - w;
         pFlt("v - w", u);

         u = v * w;
         pFlt("v * w", u);

         u = v / w;
         pFlt("v / w", u);

         u = v % w;
         pFlt("v % w", u);



    }
}
