---
title: 一些函数实现
date: 2018-07-24 19:18:46
tags: [function]
---


## bind

```js

Function.prototype.bind = function (thisArgs){
  var fn = this,
    slice = Array.prototype.slice,
    args = slice.call(arguments, 1);
  return function (){
    return fn.apply(thisArgs, args.concat(slice.call(arguments)));
  }
}

```

## curry

```js

const curry = (f, arr = []) =>
  (...args) =>
    (a => a.length === f.length ? f(...a) : curry(f, a)
    )([...arr, ...args])

```