#include<stdio.h>
int main()
{
 int arr[2][3]= {{1,2,3},{4,5,6}};
 int i;
 arr[1]=arr[2];
 for (i=0;i<2;i++)
 printf("%d",arr[i]);
 return 0;
}
