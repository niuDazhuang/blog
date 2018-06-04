---
title: 数据库备份shell
date: 2018-05-01 23:14:57
tags: [linux, sh, mysql]
---

## mysql_backup

```bash
#! /bin/bash
# 自动备份mysql

BAK_DIR=~/Desktop/data/backup/`date +%Y%m%d`
SQLDB=mydb
SQLUR=root
SQLPW=''
SQLCMD=/Applications/XAMPP/bin/mysqldump

if [ $UID -ne 0 ];then
    echo '没有权限'
    exit
fi

if [ ! -d $BAK_DIR ];then
    mkdir -p $BAK_DIR
    echo -e "\033[32m创建目录： $BAK_DIR\033[0m"
else
    echo "已存在: $BAK_DIR"
fi

$SQLCMD -u$SQLUR -p$SQLPW -d $SQLDB >$BAK_DIR/$SQLDB.sql

if [ $? -eq 0 ];then
    echo -e "\033[32m备份成功\033[0m"
else
    echo -e "\033[41m备份失败\033[0m"
fi
```
