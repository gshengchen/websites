/**
 *
 * 1.2 程序x修改代码1.2_2
 * 打印华氏温度到摄氏温度转化表
 * 公式：C=（5/9）（F-32）
 * F : 0 ~ 300 间隔 20
 * out：转化表
 * 
 */
#include <stdio.h>

void main()
{
    float fahr, celsius;
    int lower, upper, step;

    lower = 0;
    upper = 300;
    step = 20;

     fahr = lower;

    while (fahr <= upper)
    {
        celsius = 5.0 * (fahr - 32.0) / 9.0;
        printf("%3.0f\t%6.1f\n", fahr, celsius);
        fahr += step;
    }
}