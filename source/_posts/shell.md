---
title: shell学习笔记
date: 2018-04-30 14:42:13
tags: [linux, shell]
---
## 备忘
```bash
# 别名
$ alias ll='ls -laF'

# 一个输入，两个输出
$ date | tee datefile

# 标准输入
$ less < {filename}

# 查看端口占用进程信息
$ netstat -pntl

# 查看pid并找出路径
$ ps -ef
# mac
$ lsof -i tcp:{port}

# tar 打包/解包
$ tar czvf {name}.tar {dirname}
$ tar zxvf {name}.tar

# gz 压缩/解压
$ gzip {filename}
$ gzip -d {name}.gz

# tar + gz 压缩/解压
$ tar zcvf {name}.tar.gz {dirname1} {dirname2} ...
$ tar zxvf {name}.tar.gz

# bz2 压缩/解压
$ bzip2 -z {filename}
$ bzip2 -d {name}.bz2

# tar + bz2 压缩/解压
$ tar jcvf {name}.tar.bz2 {dirname}
$ tar jxvf {name}.tar.bz2

# 查看磁盘空间
$ df -h

# grep是过滤带#号的行 - 过滤以；号为开头的行 - 过滤掉所有的空行
$ cat smb.conf | grep -v "#" | grep -v "^;" | grep -v "^$"

# 查看命令所在目录
$ which sinopia
```

## .sh
```
- 声明
#！/bin/bash

- 函数库
# source {filename} <=> . {filename}

- 命令行参数
$0 - 程序名
$1 - $9
${10} ...
var=`basename $0`
```

## 环境变量
```bash
# 设置
$ PATH=$PATH:~/Desktop/sh

# 全局
$ env

# 局部
$ set

# 导出为全局（生存期：会话）
# 若要永久 见 生存期
$ export var
```

## 生存期
```
# bash初始化时调用
- /etc/profile
  - /etc/bash.bashrc
  - /etc/profile.d/*.sh
  
- $HOME/.bash_profile
- $HOME/.bash_login
- $HOME/.ptofile
  - $HOME/.bashrc
  
# 修改立即生效
$ source /etc/profile
```


## 变量
```bash
# 赋值
$ var=hello
$ var='gh woody'

# 输出
$ echo $var

# 传递变量
$ var="hi, $var"

# 传递命令输出
$ var=`date`
$ var=`date +%Y%m%d`

# 字符串相关
$ expr length "$var"
$ expr expr index "$var" {s}   # from 1, (not found: 0)
$ expr substr "$var" {i} {length}
$ expr "$var" : '{REGEXP}'  <=>  expr match "$var" '{REGEXP}'  # return match length
```

## 运算
```
# 整型
$ expr 1 = 1
$ expr 1 \> 1
$ expr 1 \< 1
$ echo $[1==1]
$ echo $[1<1]

# 浮点型
$ echo "scale=4;10/3" | bc
- 常用：
$ var = `bc << EOF
{options}
{statements}
{expressions}
EOF
`
例:
$ echo `bc << EOF
> scale=4
> a = 10
> b = 3
> a/b
> EOF
> `
```

### 文件比较运算符

```
-e filename 	存在
-d filename 	为目录
-f filename 	为常规文件
-L filename 	为符号链接
-r filename 	可读
-w filename 	可写
-x filename 	可执行
```

### 字符串比较运算符

```
-z string           长度为零，则为真 	[ -z "$myvar" ]
-n string           长度非零，则为真 	[ -n "$myvar" ]
string1 = string2    string1与 string2相同，则为真 	[ "$myvar" = "one two three" ]
string1! = string2 	string1与 string2不同，则为真 	[ "$myvar" != "one two three" ]
```

### 算术比较运算符

```
num1 -eq num2 	等于	[ 3 -eq $mynum ]
num1 -ne num2 	不等于	[ 3 -ne $mynum ]
num1 -lt num2 	小于	[ 3 -lt $mynum ]
num1 -le num2 	小于或等于	[ 3 -le $mynum ]
num1 -gt num2 	大于	[ 3 -gt $mynum ]
num1 -ge num2 	大于或等于	[ 3 -ge $mynum ]
```


## if判断
```
if commond
then # return 0
  commonds
elif test commond
then
  commands
elif [ condition ]
then
  commands
else # return !0
  commonds
fi

# 高级判断
- 数学判断
(( expression ))
- 字符串比较
[[ expression ]]

# while & until
while/until [ expression ]
do
  echo "done!"
done

# continue/break
```

### if示例
```bash
#! /bin/bash

if date
then
  echo "done!"
fi

echo "input a number:"
read num
if [ $num -gt 10 ]
then
  echo "greater than 10"
elif [ $num -lt 10 ] && [ $num -gt 5 ]
then
  echo "5<$num<10"
fi
```

## case判断
```
case $var in
pattern1 | pattern2) commonds1 ;;
pattern3) commonds3 ;;
*) default commonds ;;
esac
```

## for循环
```bash
# 指定分隔符
# IFS=$";"
 
list='Sun Mon Tus Wes Thr Fri Sat'

for var in $list
do
  echo "$var "
done

# 读取目录
for var in {dirname}/*
do
  echo "$var "
done

# 类c
for((i=0; i<10; i++))
do
  commonds
done
```

## 重定向
```bash
# 输入 - 文件描述符：0
$ {commond} < << {outputfile}

# 输出 - 文件描述符：1
$ {commond} > >> {outputfile}

# 错误 - 文件描述符：2
$ {commond} 2> {outputfile}

# 分别重定向
$ cat fileExit fileNotExit 1> {ofin} 2> {oferr}
```

### stdout
```bash
#! /bin/bash

# 永久重定向 - 指定重定向输出文件 - exec {fd}>{filename}
exec 1>output
exec 2>errlog

# 临时重定向 - 区分标准错误和标准输出 - echo {str} >&{fd}
echo "error msg1" >&2
echo "error msg2" >&2
echo "normal msg1"
echo "normal msg2"
```

### stdin
```bash
#! /bin/bash
exec 0< errlog
count=1
while read line
do
  echo "line #$count : $line"
  count=$[ $count+1 ]
done
```

## 函数
```bash
#! /bin/bash
  
echo $PATH # 全局变量
echo $var2 # 局部变量

function lok {
  echo "$*" # 所有参数作为一个参数
  echo "$@" # 所有参数以列表形式，遍历
  echo "$1" # 第一个参数
  echo "$2" # 第二个参数
  echo "$#" # 参数长度
}

sum () {
  local rst=0  # 限定作用域为函数内部
  for v in $@
  do
    rst=$[ $rst+$v ]
  done
  echo "sum is $rst"
}

# 数组
xs=(1 2 3 4 5 6 7 8 9)

# 调用
lok arg1 arg2
lok ${xs[*]}
sum ${xs[*]}

# 退出码（返回值）
echo "$?"
```