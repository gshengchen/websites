/**
 * 1.5.2 字符计数，例2用for语句 
 */

#include <stdio.h>

void main(){
    double nc;
    for(nc = 0; getchar() != EOF; nc++);
    printf("%.0f\n", nc);
}