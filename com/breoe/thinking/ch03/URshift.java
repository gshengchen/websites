/**
 * 测试无符号右移
 */
// package com.breoe.thinking.ch03;

public class URshift {
    public static void main(String[] args){
        int i = -1;
        i >>>= 10;
        System.out.println(i);
        
        long l = -1;
        l >>>= 10;
        System.out.println(l);
        
        short s = -1;
        s >>>= 10;
        System.out.println(s);

        byte b = -1;
        b >>>= 10;
        System.out.println(b);
    }
    
}
