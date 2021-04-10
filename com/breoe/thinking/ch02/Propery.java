/**
 * 这是Thinking for java 第一个运行程序
 */

package com.breoe.thinking.ch02;

import java.util.*;

public class Propery{
    public static void main(String[] args){
        System.out.println(new Date());

        Properties p = System.getProperties();
        p.list(System.out);
        System.out.println("----- Memory Usage:");
        Runtime rt = Runtime.getRuntime();
        System.out.println("Total memory =" + rt.totalMemory()
                            + "  Free Memory = " 
                            + rt.freeMemory());

    }

}