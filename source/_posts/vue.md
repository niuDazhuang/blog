---
title: vue
date: 2018-05-09 09:45:01
tags: [vue, skills]
---

## 1_watcher

```js
watch: {
  keys: {
    handler: 'init',
    deep: true,
    immediate: true
  }
}
```

## 2_component-reg

- https://github.com/niuDazhuang/vue-auto-register/blob/master/index.js


## 3_key

```tpl
<router-view :key="$route.fullpath"></router-view>
```

## 4_render

- babel-plugin-transform-vue-jsx

```
{
  methods: {
    showNotify() {
      const h = this.$createElement
​
      this.$notify({
        title: 'GitHub',
        message: (
          <div>
            <p>[GitHub] Subscribed to ElemeFE/element notification</p>
            <el-button>已读<el-button>
          <div>
        )
      })
    }
  }
}
```

## 5_inset

```vue

<input
  :value="value"
  v-bind="$attrs"
  v-on="listeners"
>

computed: {
  listeners() {
    return {
      ...this.$listeners,
      input: event =>
        this.$emit('input', event.target.value)
    }
  }
}
```
