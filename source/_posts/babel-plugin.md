---
title: babel-plugin
date: 2018-08-01 17:30:07
tags: [js, babel]
---

```js

const babel = require('babel-core');
const t = require('babel-types');
const fs = require('fs')

fs.readFile('./test.js', (a,b) => {
  const rst = babel.transform(b, {
    plugins: [babel => ({
      visitor: {
        BinaryExpression(path) {
          const node = path.node;
          let result;
          // 判断表达式两边，是否都是数字
          if (t.isNumericLiteral(node.left) && t.isNumericLiteral(node.right)) {
            switch (node.operator) {
              case "+":
                result = node.left.value + node.right.value;
                break
              case "-":
                result = node.left.value - node.right.value;
                break;
              case "*":
                result =  node.left.value * node.right.value;
                break;
              case "/":
                result =  node.left.value / node.right.value;
                break;
              case "**":
                let i = node.right.value;
                while (--i) {
                  result = result || node.left.value;
                  result =  result * node.left.value;
                }
                break;
              default:
            }
          }
          if (result !== undefined) {
            // 把表达式节点替换成number字面量
            path.replaceWith(t.numericLiteral(result));
            let parentPath = path.parentPath;
            // 向上遍历父级节点
            parentPath && this.plugin.visitor.BinaryExpression.enter[0].call(this, parentPath);
          }
        }
      }
    })]
  })
  console.log(rst.code)
})

```