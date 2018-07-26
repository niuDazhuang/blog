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

## 惰性函数

```js

function foo () {
  if (a !== b) {
    foo = () => console.log('a')
  } else {
    foo = () => console.log('b')
  }
  return foo()
}

```

## 一次性函数

```js

var fn = function () {
  console.log('仅执行一次')
  fn = function () {
    console.log('函数被覆写')
  }
}

```

## 过滤非真

```js

const xs = [1, 0, false, , undefined, null, '0', [], {}];

xs.filter(Boolean)

```

## 保留指定小数位数

```js
const round = (n, d) => Number(`${Math.round(`${n}e${d}`)}e-${d}`)

const a = 12.3456
const b = a.toFixed(2) // string "12.34"
const c = round(a, 2)  // number 12.34

```
