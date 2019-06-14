/**
 * 1.5.2 字符计数
 */

#include <stdio.h>

void main(){

    long nc;
    nc = 0 ;
    while (getchar() != EOF)
           nc++;
    printf("%ld\n",nc);
    
}