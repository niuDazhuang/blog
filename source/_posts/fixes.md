---
title: 非常见问题记录
date: 2018-05-04 10:49:49
tags: [fix]
---

## npm
- windows
- npm install 报错 ：stack Error: Can't find Python executable "python"

```
- 安装python，设置环境变量 ：cmd --> path='%path%';E:\Python27
- npm config set python "E:\Python27\python.exe"
- 注意反斜杠
```

## yum
- yum 源下找不到需要安装的软件包

```bash
$ yum install epel-release
$ yum update
```