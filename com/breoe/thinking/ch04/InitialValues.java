/**
 * 类的数据类型成员都会有一个初始值
 */
package com.breoe.thinking.ch04;

class Mesurement{
    boolean t;
    char c;
    byte b;
    short s;
    int i;
    long l;
    float f;
    double d;

    void print(){
        System.out.println("Date type Inital value\n" + 
                           "boolean " + t + "\n" + 
                           "char     " + c + "\n" +
                           "byte     " + b + "\n" + 
                           "short    " + s + "\n" + 
                           "int      " + i + "\n" +
                           "long     " + l + "\n" + 
                           "float    " + f + "\n" +
                           "double   " + d + "\n");
    }
}
public class InitialValues {
 public static void main(String[] args) {
    new Mesurement().print();  
 }   
}
