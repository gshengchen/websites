/**
 * 练习1—10 输入复制到输出，并将制表符、回退符和反斜杠以课件方式显示
 */

#include <stdio.h>

void main()
{
    int c;

    while ((c = getchar()) != EOF)
    {
        if (c == '\\')
        {
            //putchar('\\');
           // putchar('\\');
           printf("\\\\");
        }
        else if (c == '\b')
        {
            putchar('\\');
            putchar('b');
        }
        else if (c == '\t')
        {
            putchar('\\');
            putchar('t');
        }
        else
        putchar(c);
    }
}