/**c 
 * 1.5.1 文件复制 代码1
 * in：键盘输入
 * out：屏幕输出
 */

#include <stdio.h>

void main(){
    int c;
    c = getchar();

    while(c != EOF){
        putchar(c);
        c = getchar();
    }
}