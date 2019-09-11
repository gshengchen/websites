/**
 * 1.5 for 语句练习
 * 降序打印华氏温度到摄氏温度转化表
 * 公式：C=（5/9）（F-32）
 * F : 0 ~ 300 间隔 20
 * out：转化表
 * 
 **/

#include <stdio.h>

void main(){

    int fahr;

    for (fahr = 300; fahr >= 0; fahr = fahr - 20)
    {
        printf("%3d\t%6.1f\n", fahr, (5.0/9.0)*(fahr - 32));
        /* code */
    }
    
}