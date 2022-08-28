#include<stdio.h>

int main()
{
    int ***r, **q, *p, i=8;
    // address of i is 1000, p is 1200, q is 1400, r is 1600
    p = &i;
    q = &p;
    r = &q;
    printf("%d %d %d", *p, **q, ***r);
    return 0;
}