---
title: swig
date: 2018-04-30 19:37:17
tags: [tpl]
---

## swig的安装

```
$ npm i -S swig
```

## 搭配express

### app.js
```js
const express = require('express')
const swig = require('swig')
const path = require('path')

const app = express()
const port = process.env.PORT || 4000

//设置swig页面不缓存
swig.setDefaults({
  cache: false
})
app.set('view cache', false)

app.set('views','./views/pages/')
app.set('view engine','html')
app.engine('html', swig.renderFile)

app.listen(port)

console.log('server is started at http://localhost:'+port)
```

### index.js
```js
app.get('/',function(req, res){
  res.render('index',{
    title:'首页 ',
    content: 'hello swig'
  })
})
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>{{ title }}</title>
</head>
<body>
    {{ content }}
</body>
</html>
```

## 基本用法

### 变量
```
{{ name }}
```


### 属性
  ```
  {{ student.name }}
  ```

### 模板继承
#### 定义一个模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{% block title %}{% endblock  %}</title>
  {% block head %}{% endblock  %}
</head>
<body>
  {% block content %}{% endblock  %}
</body>
</html>
```

#### 继承这个模板
```html
{% extends './layout.html' %}
{% block title %} index {% endblock %}
{% block content %}
  <div>
    <h1>hello swig</h1>
  <div>
{% endblock %}
```

#### 包含模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{% block title %}{% endblock  %}</title>
  {% include "./includes/head.html" %}
  {% block head %}{% endblock  %}
</head>
<body>
  {% include "./includes/header.html" %}
  {% block content %}{% endblock  %}
</body>
</html>
```

#### if

```
{ % if name === '郭靖' % }
  hello 靖哥哥
{ % endif % }
```

#### if-else

```tpl
{ % if name === '郭靖' % }
  hello 靖哥哥
{ % elseif name === '黄蓉' % }
  hello 蓉妹妹
{ % else % }
  hello 欧阳峰
{ % endif % }
```

#### for

```html
<!-- arr = [1, 2, 3] -->
{ % for key, val in arr % }
  <p>{ { key } } -- { { val } }</p>
{ % endfor % }
```

- for循环内置变量：
```
loop.index：当前循环的索引（1开始）
loop.index0：当前循环的索引（0开始）
loop.revindex：当前循环从结尾开始的索引（1开始）
loop.revindex0：当前循环从结尾开始的索引（0开始）
loop.key：如果迭代是对象，是当前循环的键，否则同 loop.index
loop.first：如果是第一个值返回 true
loop.last：如果是最后一个值返回 true
loop.cycle：一个帮助函数，以指定的参数作为周期
```

- 使用方法：
```html
<!-- arr = [1, 2, 3] -->
{ % for key, val in arr % }
  <p>{{ loop.index }} -- {{ key }} -- {{ val }}</p>
{ % endfor % }
```

### 内置过滤器
```
add(value)：使变量与value相加，可以转换为数值字符串会自动转换为数值。
addslashes：用 \ 转义字符串
capitalize：大写首字母
date(format[, tzOffset])：转换日期为指定格式
format：格式
tzOffset：时区
default(value)：默认值（如果变量为undefined，null，false）
escape([type])：转义字符
默认： &, <, >, ", '
js: &, <, >, ", ', =, -, 
first：返回数组第一个值
join(glue)：同[].join
json_encode([indent])：类似JSON.stringify, indent为缩进空格数
last：返回数组最后一个值
length：返回变量的length，如果是object，返回key的数量
lower：同''.toLowerCase()
raw：指定输入不会被转义
replace(search, replace[, flags])：同''.replace
reverse：翻转数组
striptags：去除html/xml标签
title：大写首字母
uniq：数组去重
upper：同''.toUpperCase
url_encode：同encodeURIComponent
url_decode：同decodeURIComponemt
```

- 使用：
```
{{ birthday|date('Y-m-d') }}
```

- 大写首字母
```
{{ name|title }}
```

### set命令
- 用来设置一个变量，在当前上下文中复用
```html
{% set foo = [0, 1, 2, 3, 4, 5] %}
  {% for num in foo %}
    <li>{{ num }}</li>
{% endfor %}
```
