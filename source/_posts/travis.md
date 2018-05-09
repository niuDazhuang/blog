---
title: travis
date: 2018-04-30 23:45:52
tags: [ci]
---

## install
```
$ brew install ruby
$ gem install travis
$ travis encrypt-file ~/.ssh/id_rsa --add
```

## encrypt
```bash
# ssh外网
$ travis encrypt-file ~/.ssh/id_rsa --add
# git 采用token 或者在 www.travis-ci.org 配置 GH_TOKEN
$ travis encrypt 'GH_TOKEN=<GIT_TOKEN>' --add
```
- more: https://docs.travis-ci.com/user/deployment/

## .travis.yml
```
language: node_js
node_js:
- '8.11.1'
branchs:
  only:
  - master
before_install:
- git config --global user.name niuDazhuang
- git config --global user.email dengwm666@icloud.com
- sed -i''
  "s~git@github.com:${GH_HOME}~https://${GH_TOKEN}:x-oauth-basic@github.com/${GH_HOME}~"
  _config.yml
install:
- npm i
script:
- chmod 600 ~/.ssh/id_rsa
- hexo g -d
- mv public blog && tar zcvf blog.tar.gz blog
addons:
  ssh_known_hosts:
  - 101.132.193.88
after_success:
- scp blog.tar.gz root@101.132.193.88:/www
- ssh root@101.132.193.88 -o StrictHostKeyChecking=no 'cd /www && tar zxvf blog.tar.gz'
env:
  global:
    GH_HOME: niuDazhuang/niudazhuang.github.io.git
```

## _config.yml

```
deploy:
  type: git
  repository: git@github.com:niuDazhuang/niudazhuang.github.io.git
  branch: master
```

## 其他
- 问题： push上去git上主题为空
- 原因： .git冲突
