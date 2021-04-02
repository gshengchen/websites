/**
 * 垃圾回收过程
 */
//package com.breoe.thinking.ch04;

class Chair{
    static boolean gcrun = false;
    static boolean f = false;
    static int created  = 0;
    static int filnalized = 0;
    int i;
    Chair(){
        i = ++ created;
        if(created == 47)
          System.out.println("Created 47");
    }

    protected void finalize(){
        if(!gcrun){
            gcrun = true; 
            System.out.println("Beginning to finalize after" + created 
                                + "  Chairs have been created");

        }
        if(i == 47){
            System.out.println("Finalizing chair #47, " + 
                               "Setting flag to stop Chair creation");
            f = true;
        }
        filnalized++;

        if(filnalized >= created){
            System.out.println("All " + filnalized + " filnalized");

        }
    }
}

public class Garbage {
    public static void main(String[] args) {
      if( args.length == 0){
          System.err.println("brfore Or after");
          return;
      }
     while(!Chair.f){
         new Chair();
         new String("To take up space");

     }
     
     System.out.println("After all Chairs have been created: \n" +
                         "total created = " + Chair.created +
                         " , total finalized = " + Chair.filnalized);
    if (args[0].equals("before")){
        System.out.println("gc():");
        System.gc();
        System.out.println("runFinalization():");
        System.runFinalization();

    }

    System.out.println("bye!");

    if(args[0].equals("after"))
      System.runFinalization();
        }
    
}
