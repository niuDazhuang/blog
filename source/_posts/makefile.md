---
title: makefile
date: 2018-05-01 14:45:08
tags: [shell, ci]
---

## 格式
```bash
# 最终目标（仅有一个，且必须是第一条规则）
<target>:<dependent_file1> <dependent_file2>
    <commond1> # 必须使用tab换行，没有分号
    @<commond2> # 抑制命令终端显示
    
# 辅助规则集合(生成目标任务所依赖文件)
<helpToTarget1>:<dependent_file3>
    <commonds to gen dependent_file1>
<helpToTarget2>:<dependent_file4>
    <commonds to gen dependent_file2>

# 伪目标(不生成目标任务所依赖文件)
.PHONY:clean rebuild
clean:
    rm <filename>
rebuild:clean
```

## 执行

### 最终目标
```
$ make
```

### 伪目标
```
$ make <phony_name>
```

## 变量

### 定义
```bash
VAR=VALUE
VAR:=value  # 常用
```

### 使用
```bash
$(VAR)=???  # 赋值
???=$(VAR)  # 引用
```

### 自动变量
```bash
$@     # 当前规则的目标文件
$<     # 当前规则的第一个依赖文件
$^     # 当前规则的所有依赖文件
$?     # 规则中日期新于目标文件的所有相关文件列表
$(@D)  # dirname
$(@F)  # basename
```

### 预定义变量&环境变量
```bash
# export的变量
RM # rm -f
# ...
```

## 模式匹配
- % - 匹配1或多任意字符串

```bash
# 目标依赖文件与目标文件同名
%.o:%.cpp
```

## 其他
- makefile文件名不是'makefile'

```
$ make -f <makefilename>
```

- 目标项可以有多个

```bash
help1 help2 help3:<filename>
    <commonds>
```
