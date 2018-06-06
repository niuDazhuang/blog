---
title: 递归
date: 2018-06-06 16:27:36
tags: [算法, 递归]
---

## 汉诺塔

```c
#include <stdio.h>

void fn (int, char, char, char);

int main (void)
{
    int n;
    
    printf("请输入盘子个数：");
    scanf("%d", &n);
    fn(n, 'A', 'B', 'C');
    
    return 0;
}

void fn (int n, char A, char B, char C)
{
    if (n == 1)
    {
        printf("将%c上的%d号盘子移到%c\n", A, n, C);
    }
    else
    {
        fn(n-1, A, C, B);
        printf("将%c上的%d号盘子移到%c\n", A, n, C);
        fn(n-1, B, A, C);
    }
    return;
}
```
