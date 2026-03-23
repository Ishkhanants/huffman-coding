#include "pch.h"
#include <iostream>

int main()
{
	int i, n, x;
	char str[100];
        
    printf("\nMutqagrvatz:\t");
	gets_s(str);
	
    printf("Banali:"); scanf_s("%d", &n);
	
	for (i = 0; (i < 100 && str[i] != '\0'); i++)
		str[i] = str[i] + n; 
        
    printf("\nVerapohvatz:%s\n", str);
}
