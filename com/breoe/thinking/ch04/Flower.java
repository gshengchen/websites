/**
 * this如果有参数就是都符合参数的构造函数进行调用,
 * 只能用在构造函数中并只能用一次
 */
//package com.breoe.thinking.ch04;

public class Flower {
    private int petalCount = 0;
    private String s = new String("null");

    Flower(int petals){
        petalCount = petals;
        System.out.println("constructor w/ intarg only, petalCount = " + petalCount);

    }

    Flower(String ss){
        s = ss;
        System.out.println("constructor w/ String only, s = " + s);
    }     

    Flower(String s, int petals){
        this(petals);
        //! this(s);
        this.s = s;
        System.out.println("constructor  String && int ");
    }

    Flower(){
        this("hi",47);
        System.out.println("default construct no arg");
    }

    void print(){
        //! this(11);
       System.out.println("petalCount = " + petalCount 
                           + " s = " + s);
    }

    public static void main(String[] args){
        Flower x = new Flower();
        x.print();
    } 
     
    
}
