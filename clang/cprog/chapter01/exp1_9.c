/**
 * 练习1-9 将输入复制到输出，并将连续多个空格用一个空格代替
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
        if (c == ' ' || c == '\t')
        {
            if (state == IN)
                putchar(' ');
            state = OUT;
        }
        else 
        {
            state = IN;
            putchar(c);
        }
    }
}