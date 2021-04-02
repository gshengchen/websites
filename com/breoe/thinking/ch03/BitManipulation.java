/**
 * 按位操作的运算符应用
 */
// package com.breoe.thinking.ch03;
import java.util.*;

public class BitManipulation {
    static void pBinInt(String s, int i){
        System.out.println(s + ", int: " + i + ", binary: ");
        System.out.print("   ");
        for(int j = 31; j >= 0; j--)
          if(((1 << j) & i) != 0)
            System.out.print("1");
            else 
            System.out.print("0");
        System.out.println();
    }

    static void pBinLong(String s, long i){
        System.out.println(s + ", long: " + i + ", binary: ");
        System.out.print("   ");
        for(int j = 63; j >= 0; j--)
          if(((1L << j) & i) != 0)
            System.out.print("1");
            else 
            System.out.print("0");
        System.out.println();
    }


    public static void main(String[] args){
        Random rand = new Random();
        int i = rand.nextInt();
        int j = rand.nextInt();

        pBinInt("-1", -1);
        pBinInt("+1", +1);

        int maxpos = 2147483647;
        int maxneg = - maxpos;

        pBinInt("maxpos", maxpos);
        pBinInt("maxneg", maxneg);

        pBinInt("i", i);
        pBinInt("~i", ~i);
        pBinInt("-i", -i);

        pBinInt("i", i);
        pBinInt("j", j);
        pBinInt("i & j", i & j);
        pBinInt("i | j", i | j);
        pBinInt("i ^ j", i ^ j);

        pBinInt("i", i);
        pBinInt("i << 5", i << 5);
        pBinInt("i >> 5", i >> 5);
        pBinInt("i >>> 5", i >>>5);

        pBinInt("i", i);
        pBinInt("~i >> 5", (~i) >> 5);
        pBinInt("~i >>> 5", (~i) >>> 5);

        long l = rand.nextLong();
        long m = rand.nextLong();

        pBinLong("-1L", -1L);
        pBinLong("1L", 1L);

        pBinLong("l", l);
        pBinLong("m", m);
        pBinLong("-l", -l);
        pBinLong("~M", ~m);

        pBinLong("l & m ", l & m );
        pBinLong("l | m ", l | m );
        pBinLong("l ^ m ", l ^ m );




    }
    
}
