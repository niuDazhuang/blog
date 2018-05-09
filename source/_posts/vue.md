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

```
<router-view :key="$route.fullpath"></router-view>
```

## 4_render

```js
functional: true,
render(h, { props }) {
  return props.routes.map(route =>
    <li key={route.name}>
      <router-link to={route}>
        {route.title}
      </router-link>
    </li>
  )
}
```

## 5_inset

```

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
