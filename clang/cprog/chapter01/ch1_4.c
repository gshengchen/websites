/**
 * 1.4 符号常量
 * 打印华氏温度到摄氏温度转化表
 * 公式：C=（5/9）（F-32）
 * F : 0 ~ 300 间隔 20
 * out：转化表
 * 
 **/

#include <stdio.h>
#define LOWER 0
#define UPPER 300
#define STEP 20

void main(){

    int fahr;

    for (fahr = LOWER; fahr <= UPPER; fahr = fahr + STEP)
    {
        printf("%3d\t%6.1f\n", fahr, (5.0/9.0)*(fahr - 32));
        /* code */
    }
    
}