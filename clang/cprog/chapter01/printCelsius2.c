#include <stdio.h>

/* 当fahr = 0 ，20 ，40 ，60,...,300时，分别打印华氏温度与摄氏温度对照表。
*/
int main(){
    float fahr, celsius;
    float lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

    for(fahr = lower ; fahr <= upper ;fahr += step ){
        celsius = 5.0 * (fahr - 32.0 ) / 9.0;
        printf("%3.0f\t%6.1f\n", fahr, celsius);
    }
}