---
title: verdaccio
date: 2018-05-03 15:31:40
tags: [node, npm]
---

## info

- centos
- [github](https://github.com/verdaccio/verdaccio)

## install

```
$ npm i -g verdaccio
$ npm i -g pm2
```

- fix: sudo npm 找不到命令
```
$ sudo ln -s /usr/local/bin/node /usr/bin/node
$ sudo ln -s /usr/local/lib/node /usr/lib/node
$ sudo ln -s /usr/local/bin/npm /usr/bin/npm
```

## config

```
$ vi /root/.config/verdaccio/config.yaml
```

```yaml
listen:
  - 0.0.0.0:4873
```

## start

```
$ pm2 start verdaccio
```

## open

- http://192.168.1.205:4873
