/**
 * 1.5.3 行计数
 */

#include <stdio.h>

void main()
{
    long nl;
    int c;
    nl = 0;

    while ((c = getchar()) != EOF)
    {
        if (c == '\n')
            nl++;
    }

    printf("%ld", nl);
}