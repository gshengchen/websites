/**
 * 练习1-12 编写每行一个单词的形式打印其输入
 */

#include <stdio.h>
#define IN 1
#define OUT 0

void main()
{
    int c, state;
    state = OUT;

    while ((c = getchar()) != EOF)
    {
        if (c == ' ' || c == '\t' || c == '\n')
        {
            if (state == IN)
                putchar('\n');
            state = OUT;
        }
        else
        {
            //  if (state == OUT)
            state = IN;
            putchar(c);
        }
    }
}