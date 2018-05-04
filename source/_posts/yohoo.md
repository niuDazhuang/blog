---
title: yohoo 35 rules
date: 2018-05-04 09:18:32
tags: [performance optimization]
---

## content
- 1.尽量减少HTTP请求数
- 2.减少DNS查找
- 3.避免重定向
- 4.让Ajax可缓存
- 5.延迟加载组件 
- 6.预加载组件
- 7.减少DOM元素的数量
- 8.跨域分离组件
- 9.尽量少用iframe
- 10.杜绝404

## css
- 11.避免使用CSS表达式
- 12.选择link舍弃@import
- 13.避免使用滤镜
- 14.把样式表放在顶部

## js
- 15.去除重复脚本
- 16.尽量减少DOM访问
- 17.用智能的事件处理器
- 18.把脚本放在底部

## javascript, css 
- 19.把JavaScript和CSS放到外面
- 20.压缩JavaScript和CSS

## image
- 21.优化图片
- 24.用小的可缓存的favicon.ico

## cookie
- 25.给Cookie减肥
- 26.把组件放在不含cookie的域下

## mobile
- 27.保证所有组件都小于25K
- 28.把组件打包到一个复合文档里

## server
- 29.Gzip组件
- 30.避免图片src属性为空
- 31.配置ETags
- 32.对Ajax用GET请求
- 33.尽早清空缓冲区
- 34.使用CDN（内容分发网络）
- 35.添上Expires或者Cache-Control HTTP头