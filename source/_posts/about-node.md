---
title: about_node
date: 2018-06-01 17:56:11
tags: [node]
---

## 1 _ 解释nodejs适用于IO密集型不适用于CPU密集型

> 适用于IO密集型 ： 
```
    - node利用事件循环处理请求，而不是为每个请求开一个线程，占用资源极少
```
    
> 不适用于CPU密集型 ： 
```
    - 由于js单线程的原因，若有长时间运行的计算，将回导致CPU时间片不能释放，使得后续IO无法发起
```

> 解决：
```
    - 分解大型运算为多个小任务，计算耗时超过IO阻塞耗时的场景应采取多线程方式
    - 编写C/C++扩展
    - 通过子进程的方式，将部分node进程当作常驻服务进程用于计算，利用进程间的消息传递结果，将计算与IO分离
```      
      
## 2 _ nodejs的异步事件回调机制

- 事件循环

```flow
st=>start: 开始
ce=>condition: 还有事件?
op=>operation: 取出一个事件
cond=>condition: 有关联回调?
e=>end: 执行回调

st->ce->op->cond->e->ce
ce(yes)->op
ce(no)->e
cond(yes)->e
cond(no)->ce
```

- 观察者

```
    - 将事件分类，接收事件，传递给 事件循环
```

- 请求对象
- IO线程池

```
    - js -> node 核心模块 -> c++ 内建模块 -> 判断平台 -> libuv
    - 将 js 层传入的参数和当前方法封装到 请求对象
    - 回调函数被设置在oncomplete_sym属性上:
        req_wrap->object_->set(oncomplete_sym, callback)
    - 推入线程池：
        push(*fn, args, status)
    - js 异步调用第一阶段结束，IO操作在线程池中等待执行， js 任务继续
    - 线程池中有可用线程则执行上述IO操作
    - 执行结果存储在req->result，通知事件循环操作完成，归还线程给线程池
    - 事件循环每次 tick 找出线程池中执行完的请求加入到IO观察者队列，执行 complete_sym(req->result)
```

```
    - 向系统内核发送IO调用 及 从内核获取已完成的IO操作实现:
    - windows/IOCP     | linux/epoll     | ...
    - 线程池:
    - windows/IOCP 提供 | *nix/libuv 实现
```

## 3 _ 如何充分利用多核CPU服务器

```
    - require('child_process').fork(process)实现 Master-Worker 模式
    - 主进程将请求代理到不同端口的子进程上，做适当的负载均衡
    - cluster: child_process + net
```

## 4 _ 如何提升node应用健壮性和稳定性

```
    - 在 node 集群基础上利用进程事件实现平滑重启，新进程在异常进程退出前接替岗位
    - 记录日志、限量重启
    - 负载均衡：使用cluster模块启用 Round-Robin （论叫调度)
    - 通知进程：不负责业务，只轮询共享状态，采用TCP或UDP方案(跨服务器)通知工作进程
    - 监听进程数量和日志
    - cluster: child_process + net
```
