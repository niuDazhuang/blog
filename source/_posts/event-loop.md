---
title: 事件循环机制
date: 2018-07-26 17:20:58
tags: [js]
---

## 简介

- js在执行过程中会产生执行环境，顺序的加入到环境栈中，遇到的异步代码会被挂起并加入到 Task队列 中
- 一旦执行栈为空，EventLoop会从 Task队列 只能拿出代码放入环境栈中执行

## Task 队列

- 微任务(microtask)
```
process.nextTick
promise
Object.observe
MutationObserver
```

- 宏任务(macrotask)
```
script
setTimeout
setInterval
setImmediate
I/O
UI rendering
```

## 浏览器的EventLoop

```
- 1.执行同步代码 （宏任务）
- 2.执行栈为空，查询微任务队列
- 3.执行微任务
- 4.渲染UI
- 5.执行宏任务中的异步代码，下一轮
```

## Node中的EventLoop

```
- timers          // setTimeout,setInterval
- idle, prepare   // process.nextTick
- I/O callback    // 执行除了close事件，定时器，setImmediate外的回调
- poll            // 发现setImmediate则进入check阶段
- check           // setImmediate
- close callback  // 执行close事件
```