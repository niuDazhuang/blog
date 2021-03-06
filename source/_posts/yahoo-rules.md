---
title: 雅虎军规
date: 2018-05-04 09:18:32
tags: [performance optimization]
---

## content
- 1. 尽量减少HTTP请求数
- 2. 减少DNS查找次数
- 3. 避免重定向
- 4. 缓存Ajax
- 5. 延迟加载不重要的文件
- 6. 预加载文件
- 7. 减少DOM元素的数量
- 8. 利用不同域名分离页面内容
- 9. 尽量少用iframe
- 10. 杜绝404

## js/css
- 11. 避免使用CSS表达式
- 12. 选择link舍弃@import
- 13. 避免使用滤镜
- 14. 把样式表放在顶部
- 15. 去除重复脚本
- 16. 尽量减少DOM访问
- 17. 事件代理
- 18. 把脚本放在底部
- 19. 分离成单独文件
- 20. 压缩

## source
- 21. 优化图片
- 22. 优化CSS Sprite
- 23. 不缩放
- 24. 避免图片src属性为空
- 25. 用小的可缓存的favicon.ico
- 26. 给Cookie减肥
- 27. 把组件放在不含cookie的域下
- 28. 保证所有组件都小于25K
- 29. 把组件打包到一个复合文档里

## server
- 30. Gzip组件
- 31. 配置ETags
- 32. 对Ajax用GET请求
- 33. 尽早清空缓冲区
- 34. 使用CDN（内容分发网络）
- 35. 添上Expires或者Cache-Control HTTP头