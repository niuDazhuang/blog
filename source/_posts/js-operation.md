---
title: JS操作符
date: 2018-06-14 20:15:01
tags: [js]
---

## primitive(obj)

```bash
1. obj.valueOf()
2. obj.toString()
3. [] => [].join(',') # == [].toString()

- {}.toString() => "[object, Object]"
```

## +

```
- 'a' + 'b'  : 字符串连接符
- 1 + 2      : 计算

# 作为一元操作符 Number(Primitive(sth))
- +[]     => +''                 => 0
- +[1]    => +1                  => 1
- +['1a'] => +'1a'               => NaN
- +{}     => +"[object Object]"  => NaN
```

## ==

```
0. NaN == any          => false
1. null == undefined   => true
2. str == num          => Number(str) == num
3. bool == num/str     => Number(bool) == num/str
4. obj == num/str      => Primitive(obj) == num/str
```
