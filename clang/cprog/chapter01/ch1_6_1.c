/**
 * 1.6 数组 统计数字、空白符 以及其他字符的次数
 */

#include <stdio.h>

void main()
{
    int c, i, nwhite, nother;
    int ndigit[10];

    nwhite = nother = 0;
    for (i = 0; i < 10; i++)
        ndigit[i] = 0;

    while ((c = getchar()) != EOF)
    {
        if (c >= '0' && c <= '9')
            ndigit[c - '0']++;
        else if (c == ' ' || c == '\t' || c == '\n')
            nwhite++;
        else
            nother++;
    }

    printf("digits = ");
    for (i = 0; i < 10; i++)
        printf(" %d", ndigit[i]);
    printf(", white space = %d, others = %d \n", nwhite, nother);
}