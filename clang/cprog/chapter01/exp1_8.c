/**
 * 练习1-8 编写一个统计空格、制表符与换行符个数的程序
 * 
 */

#include <stdio.h>

void main()
{
    long ns, nt, nl;
    int c;
    ns = nt = nl = 0;

    while ((c = getchar()) != EOF)
    {
        if (c == ' ')
          ns++;
        if (c == '\t')
          nt++;
        if (c == '\n')
          nl++;
    }

    printf("ns = %ld\nnt = %ld\nnl = %ld\n",ns, nt,nl);

}