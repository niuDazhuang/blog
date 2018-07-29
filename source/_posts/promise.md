---
title: promise实现
date: 2018-07-29 21:40:27
tags: [js]
---

## 待完善

```js
function P (executor) {
  var self = this
  self.status = 'pending'
  self.value = undefined
  self.reason = undefined
  self.rscbs = []
  self.rjcbs = []

  function resolve (value) {
    if (self.status === 'pending') {
      self.value = value
      self.status = 'resolved'
      self.rscbs.forEach(fn => fn(self.value))
    }
  }

  function reject (reason) {
    if (self.status === 'pending') {
      self.reason = reason
      self.status = 'rejected'
      self.rjcbs.forEach(fn => fn(self.reason))
    }
  }

  try {
    executor(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

P.prototype.then = function (onFulfilled, onRejected) {
  var self = this
  if (self.status === 'resolved') {
    onFulfilled(self.value)
  }
  if (self.status === 'rejected') {
    onRejected(self.reason)
  }
  if (self.status === 'pending') {
    self.rscbs.push(onFulfilled)
    self.rjcbs.push(onRejected)
  }
}

var a = new P((r, j) => {
  r('a')
})
a.then(d => {
  console.log(d)
}, e =>{
  console.log(e)
})
```