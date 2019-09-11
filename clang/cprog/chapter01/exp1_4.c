/**
 * 
 * 1.4 练习
 * 打印摄氏温度到华氏温度转化表
 * 公式：F=（9/5）C+32
 * C : 0 ~ 300 间隔 20
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

    printf("摄氏温度-华氏温度对照表\n");

    while (celsius <= upper)
    {
        fahr = 9.0/5.0 * celsius + 32.0 ;
        printf("%3.0f\t%6.1f\n", celsius,fahr);
        celsius += step;
    }
}