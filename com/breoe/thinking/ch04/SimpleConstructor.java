/**
 * 简单的构造器
 */
// package com.breoe.thinking.ch04;

class Rock{
    Rock(){
        System.out.println("creating Rock!");
    }
}
public class SimpleConstructor {
    public static void main(String[] args){
        for(int i = 0; i < 10; i++)
           new Rock();
    }
    
}
