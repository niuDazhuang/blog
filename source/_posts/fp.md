---
title: 函数式编程
date: 2018-05-03 09:19:07
tags: [fp]
---

## pure

- 返回结果只依赖于它的参数
- 执行过程没有副作用

## Functor

```js
class Container {
  constructor (x) {
    this.__value = x
  }
  static of (x) {
    return new Container(x)
  }
  map (f) {
    return Container.of(f(this.__value))
  }
}
```

## Maybe

```js
class Maybe extends Container {
  static of (x) {
    return new Maybe(x)
  }
  map (f) {
    return [null, undefined].includes(this.__value)
      ? Maybe.of(null)
      : Maybe.of(f(this.__value))
  } 
}
```

## Either

```js
class Left {
  constructor (x) {
    this.__value = x
  }
  static of (x) {
    return new Left(x)
  }
  map (f) {
    return this
  }
}
class Right {
  constructor (x) {
    this.__value = x
  }
  static of (x) {
    return new Right(x)
  }
  map (f) {
    return Right.of(f(this.__value))
  }
}
```

## IO

```js
class IO {
  constructor (f) {
    this.__value = f
  }
  static of (x) {
    return new IO(() => x)
  }
  map (f) {
    return new IO(compose(f, this.__value))
  }
}
```
