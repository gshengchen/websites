/**
 * 1.5.1 代码1 改进
 * 键盘输入，屏幕输出
 */

#include <stdio.h>

void main(){
    int c;

    while((c = getchar()) != EOF){
        putchar(c);
    }
}