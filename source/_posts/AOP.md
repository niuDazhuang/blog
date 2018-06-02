---
title: 面向切面编程
date: 2018-06-02 19:56:42
tags: [aop]
---

## exp

```js

function test (word){
  console.log(word)
}

Function.prototype.before = function (fn) {
  var __self = this
  return function () {
    fn.apply(this, arguments)
    return __self.apply(this, arguments)
  }
}
Function.prototype.after = function (fn) {
  var __self = this
  return function () {
    var rst = __self.apply(this, arguments)
    fn.apply(this, arguments)
    return rst
  }
}
test.before(() => {
  console.log('before')
}).after((a) => {
  console.log('after')
})('test worked!')

```
