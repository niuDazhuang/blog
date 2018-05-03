---
title: sinopia
date: 2018-05-02 09:48:46
tags: [node, npm]
---
## info

- windows
- [github](https://github.com/rlidwka/sinopia)
- 已停止维护, 请使用 [verdaccio](https://github.com/verdaccio/verdaccio)

## install

```
$ npm i -g sinopia
```

- windows 环境需要
- 到sinopia安装目录删除node_modules里的fs-ext和crypt3相关的包
- 否则执行npm添加用户和登陆验证时会报错

## start

```
$ sinopia

- http://localhost:4873/
```


## config

- config.yaml (start后终端会打印所在地址)

```bash
storage: /usr/local/sinopia/storage # 这是资源存储目录

auth:
  htpasswd:
    file: /usr/local/sinopia/htpasswd # 这是授权文件，里面存放用户和密码
    # Maximum amount of users allowed to register, defaults to "+inf".
    # You can set this to -1 to disable registration.
    #max_users: 1000

# a list of other known repositories we can talk to
uplinks:
  npmjs:
    url: https://registry.npmjs.org/

packages: # 是资源控制
  '@*/*':
    # scoped packages
    access: $all
    publish: $authenticated

  '*':
    # allow all users (including non-authenticated users) to read and
    # publish all packages
    #
    # you can specify usernames/groupnames (depending on your auth plugin)
    # and three keywords: "$all", "$anonymous", "$authenticated"
    # 访问权限，三种："$all"所有人, "$anonymous"匿名, "$authenticated"授权人
    access: $all

    # allow all known users to publish packages
    # (anyone can register by default, remember?)
    # 发布权限
    publish: $authenticated

    # if package is not available locally, proxy requests to 'npmjs' registry
    proxy: npmjs

# log settings
logs:
  - {type: stdout, format: pretty, level: http}
  #- {type: file, path: sinopia.log, level: info}
# 把之前localhost:4873改0.0.0.0:4873，开发访问
listen: 0.0.0.0:4873
# 绑定域名，不然只通过nginx会报错未设置www啥的
url_prefix: http://npm.bjnja.com
```

## nrm

```
$ npm i -g nrm
$ nrm add <storename> http://<ip>:4873
$ nrm use <storename>
```

## signup & signin

```
$ npm adduser
```

## publish

```
$ npm publish
```