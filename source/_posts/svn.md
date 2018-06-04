---
title: svn仓库搭建（待完善）
date: 2018-04-30 14:58:20
tags: [shell, svn]
---
## centos
```
$ yum install svn
$ svn help
$ svnadmin help
```

## 创建svn仓库
```
$ svnadmin create ~/svnwww
```

## 配置相关
```
$ cd ~/svnwww/conf

```

- authz          - 权限控制文件
- passwd         - 帐号密码文件
- svnserve.conf  - SVN服务配置文件

## 配置修改
```
$ vi svnserve.conf
```

- anon-access = none    # 匿名用户可读 
- auth-access = write   # 授权用户可写 
- password-db = passwd  # 使用哪个文件作为账号文件 
- authz-db = authz      # 使用哪个文件作为权限文件 
- realm = /data/www     # 认证空间名，版本库所在目录

```
$ vi passwd
```

- 在[users]块中添加用户和密码，格式：帐号=密码，如meng=123456

```
$ vi authz
```

- 在末尾添加如下代码：
```
[/] 
meng=rw
```

## 启动
```
$ svnserve -d -r /var/svn/svnrepos
```
