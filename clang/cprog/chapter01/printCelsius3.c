#include <stdio.h>

/* 当fahr = 0 ，20 ，40 ，60,...,300时，分别打印华氏温度与摄氏温度对照表。
*/
int main(){
    float fahr, celsius;
     
    printf("华氏\t摄氏\n");
    printf("=================\n");
     
    for(fahr = 0 ; fahr <= 300 ;fahr += 20 ){
        celsius = 5.0 * (fahr - 32.0 ) / 9.0;
        printf("%3.0f\t%5.1f\n", fahr, celsius);
    }
}