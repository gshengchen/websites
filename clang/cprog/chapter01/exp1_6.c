/**
 * 练习1-6 验证getchar() != EOF 的值是0 还是 1
 * 
 */

#include <stdio.h>

void main(){

    int c;

    if(c=getchar() != EOF)
           printf("%d",c);
      else
        printf("%d",c);
}