---
title: shell颜色相关速查
date: 2018-05-02 00:10:26
tags: [linux, shell]
---

## start
```
$ echo -e "\033[32mHello, world!\033[0m"
```

## background [40, 49]
```
40:黑
41:深红
42:绿
43:黄
44:蓝
45:紫
46:深绿
47:白
```

## color [30, 39]
```
30:黑
31:红 
32:绿
33:黄
34:蓝
35:紫
36:深绿 
37:白
```

## 其他
```
33[0m 关闭所有属性
33[1m 设置高亮度
33[4m 下划线
33[5m 闪烁
33[7m 反显
33[8m 消隐
33[30m 至 33[37m 设置前景色
33[40m 至 33[47m 设置背景色
33[nA 光标上移n行 
33[nB 光标下移n行
33[nC 光标右移n行
33[nD 光标左移n行
33[y;xH 设置光标位置
33[2J 清屏
33[K 清除从光标到行尾的内容
33[s 保存光标位置 
33[u 恢复光标位置
33[?25l 隐藏光标
33[?25h 显示光标
```
