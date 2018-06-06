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

## 斐波那契

```js
/**
1 1 2 3 5 8 13 ...
*/

const fq = (pre, next, n) => n === 0 ? pre : fq(next, pre + next, --n)
const getFbnq = curry(fq)(1, 1)
```

## 杨辉三角

```js
/**
1
1 1
1 2 1
1 3 3 1
1 4 6 4 1
1 5 10 10 5 1
...
*/

const point = (row, col) => (col === 0 || row === col)
    ? 1
    : (point(row - 1, col - 1) + point(row - 1, col))

const getYH = n => Array.apply(null, {length: n})
    .map((v, i) => Array.apply(null, {length: i + 1}))
    .map((row, i) => row.map((v, j) => point(i, j)))

```
