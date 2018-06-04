---
title: mock数据相关js库
date: 2018-04-30 20:35:52
tags: [node, npm, mock]
---

## [mockjs](http://mockjs.com/examples.html)
### install
```
$ npm install mockjs
```

### start
- mock.js
```js
const Mock = require('mockjs')
const { mock, Random } = Mock
mock('api/controller/action', {
  'list|1-10': [{
    'id|+1': 1
  }]
})
```
- dev.js
```js
if (process.env.NODE_ENV === 'development') {
  require('@/mock.js')
}
```

## [json-sever](https://www.npmjs.com/package/json-server)

### install
```
$ npm i -g json-server
```
### start
#### db.json
```
{
  "news":[
    {
      "id": 1,
      "title": "曹县宣布昨日晚间登日成功",
      "date": "2016-08-12",
      "likes": 55,
      "views": 100086
    },
    {
      "id": 2,
      "title": "长江流域首次发现海豚",
      "date": "2016-08-12",
      "likes": 505,
      "views": 9800
    }
  ],
  "comments":[
    {
      "id": 1,
      "news_id": 1,
      "data": [
        {
          "id": 1,
          "content": "支持党中央决定"
        },
        {
          "id": 2,
          "content": "抄写党章势在必行！"
        }
      ]
    }
  ]
}
```

#### run
```
$ json-server db.json -p 3003
```

#### GET
```
http://localhost:3003/news
http://localhost:3003/comments
```

#### POST
```js
$.ajax({
    type: 'post',
    url: 'http://localhost:3003/news',
    data: {
      "id": 3,
      "title": "我是新加入的新闻",
      "date": "2016-08-12",
      "likes": 0,
      "views": 0
    }
  }
)
```

#### PUT
```js
$.ajax({
    type: 'put',
    url: 'http://localhost:3003/news/1',
    data: {
      "title": "曹县宣布昨日晚间登日失败",
      "date": "2016-08-12",
      "likes": 55,
      "views": 100086
    }
  }
)
```
#### PATCH
#### DELETE

### dynamic data
#### db.dynamic.js
```js
module.exports = function() {
  let data = { users: [] }
  for (var i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: 'user' + i })
  }
  return data
}
```
