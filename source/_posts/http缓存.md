---
title: http缓存
date: 2018-06-03 18:32:23
tags: [http, cache]
---

## 强制缓存

- Expires (HTTP 1.0）
- Cache-Control (HTTP 1.1)
```
- Cache-Control 可取值：

  private      - 客户端可以缓存(默认)
  public       - 客户端和代理服务器都可缓存
  max-age=xxx  - 缓存的内容将在 xxx 秒后失效
  no-cache     - 需要使用对比缓存来验证缓存数据（后面介绍）
  no-store     - 所有内容都不会缓存，强制缓存，对比缓存都不会触发
```

## 对比缓存

- Etag / If-None-Match
- Last-Modified  /  If-Modified-Since

## 流程图
![http-cache-image](https://raw.githubusercontent.com/niuDazhuang/niudazhuang.github.io/master/images/http-cache.png)
