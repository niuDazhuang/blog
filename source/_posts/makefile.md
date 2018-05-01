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
    @<commond2> # 抑制命令在控制台打印
    
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

- 最终目标
```
$ make
```

- 伪目标
```
$ make <phony_name>
```
