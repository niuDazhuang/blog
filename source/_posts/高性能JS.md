---
title: 高性能JS
date: 2019-06-25 19:53:27
tags: [book]
---

## 高性能JS

第一单元：JS编程技术 （30分钟）
1.	加载和执行
2.	数据访问
- 数据存储的方式： 直接量、变量、数组项、对象成员
- 每一次函数执行都会创建一个独一无二的运行期上下文（execution context），它有自己的作用域链用来标识符解析, 解析过程为沿着作用域链搜索，这里会产生性能问题
- [[scope]] 活动对象（activition object）  全局对象（Global object）
```js
function add (num1, num2) {
	var sum = num1 + num2
	return sum
}
var total = add(5, 10)
```
- 改变作用域链： with, try catch(exception)

3.	算法流程
4.	字符串和正则
第二单元：DOM编程 （30分钟） 
1.	DOM的访问与修改
- 通常在浏览器中，DOM 和 JavaScript是独立实现的，他们通过接口彼此连接，这个连接过程会产生消耗
2.	重绘与重排

- 利用display:none不渲染的特点


通过一次完整的web请求和渲染过程以及如何优化网页，我们可以知道页面渲染的时候，会忽略掉display: none这一类的不占布局的元素。

所以，我们可以将元素先display:none，然后用JS对该元素进行操作。等操作完成在会后，再将它display:block，这样只会触发2次的reflow。


- 利用innerHTML
当然上述的写法也可以利用innerHTML进行修改。

const ul = document.getElementById('content')

const lists = ['a', 'b', 'c', 'd']

const childElementString = lists.map(list=>`<li>${list}</li>`).join('')

ul.innerHTML = ul.innerHTML + childElementString
复制代码这里只进行了一次reflow。


- 使用DocumentFragment

上面的写法显然不够好，无法复用。我们可以使用DocumentFragment进行优化。
DocumentFragments是DOM节点，但不是DOM tree的一部分。它存在于内存中，可以理解为虚拟DOM。
const parentNode = document.getElementById('content')
const lists = ['a', 'b', 'c', 'd']
const fragment = document.createDocumentFragment
lists.forEach(text=>{
	const li = document.createElement('li')
	li.textContent = text
	fragment.appendChild(li)
})
parentNode.appendChild(fragment)

如果不使用DocumentFragment的话，会造成4次reflow，随着需要修改的dom次数变多，还会造成更多次的reflow，但是通过fragment，只需要一次就够了。

- 
CSS 层面的优化

不只是DOM tree的改变会触发reflow，CSSOM的改变同样会触发。
这里我们可以用替代的CSS属性替代会造成reflow的属性。

3.	事件委托
第三单元：快速响应的用户界面 (30分钟)
1.	浏览器的UI线程
2.	定时器
3.	Web Workers
4.	ajax
第四单元：编程实践（20分钟）
1.	避免双重求值
2.	原生方法与可维护之间的权衡
3.	避免重复工作
4.	使用直接量创建对象与数组
第五单元：构建部署（20分钟）
1.	合并、压缩JS
2.	缓存
3.	CDN
第六单元：相关工具 （20分钟）
1.	性能分析工具
2.	IE工具
3.	Chrome工具
第七单元: 总结（10分钟）
1.	知识点总结：流程图展示
2.	书单推荐：
《JavaScript高级程序设计》 
《高性能JavaScript》
《编写可维护的JavaScript》
《webkit技术内幕》

技术开发挑战赛复盘