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
```js
// 主线程
var worker = new Worker('worker.js')
worker.postMessage([10, 24])
worker.onmessage = function(e) {
  console.log(e.data)
}

// Worker 线程
onmessage = function (e) {
  if (e.data.length > 1) {
    postMessage(e.data[1] - e.data[0])
  }
}
```
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

```js
function add (num1, num2) {
	var sum = num1 + num2
	return sum
}
var total = add(5, 10)
```

```js
function initUI () {
	var bd = document.body
	var links = document.getElementsByTagName('a')
	var i = 0
	var len = links.length
	while (i < len) {
		update(links[i++])
	}
	document.getElementById('go-btn').onclick = function () {
		start()
	}
	bd.className = 'active'
}
```

```js
function assignEvents () {
	var id = 'xdi9592'
	document.getElementById('save-btn').onclick = function (event) {
		saveDocument(id)
	}
}
```

```js
// bad
// 共6次属性查找
const query = window.location.href.substring(window.location.href.indexOf('?'))

// good
// 共4次属性查找
const url = window.location.href
const query = url.substring(url.indexOf('?'))
```

```js
var garbage = {
	name: 'Paper',
	classification: 'Recyclable Waste'
}
alert(garbage.toString()) // '[object Object]'
```

```js
var garbage = {
	name: 'Paper',
	classification: 'Recyclable Waste'
}
alert(garbage.hasOwnProperty('name')) // true
alert(garbage.hasOwnProperty('toString')) // false
alert('name' in garbage) // true
alert('toString' in garbage) // true
```

```js
for (var i = 0; i < 10; i++) {
	// do something
}

[1, 2].forEach(function(value, index, array))
```

```js
document.getElementById('menu').onclick = function(e) {
	// x-browser target
	e = e || window.event
	var target = e.target || e.srcElement
	var pageid, hrefparts
	// only interesed in hrefs
	// exit the function on non-link clicks
	if (target.nodeName !== 'A') {
		return
	}
	// figure out page ID from the link
	hrefparts = target.href.split('/')
	pageid = hrefparts[hrefparts.length - 1]
	pageid = pageid.replace('.html', '')
	// update the page
	ajaxRequest('xhr.php?page=' + id, updatePageContents)
	// x-browser prevent default action and cancel bubbling
	if (typeof e.preventDefault === 'function') {
		e.preventDefault()
		e.stopPropagation()
	} else {
		e.returnValue = false
		e.cancelBubble = true
	}
}
```

```js
let count = 0
let handleId = null

function callback (time) {
	console.log(time)

	if (count < 50) {
		count++
		handleId = requestAnimationFrame(callback)
	}
}

requestAnimationFrame(callback)
```

```js
const time = 100

setTimeout(() => {

	const task = queue.shift()
	handle(task)

	if (queue.length > 0) {
		setTimeout(arguments.callee, time)
	}
}, time)
```

```js
const a = true
let getA: any = () => {
	if (a) {
		console.log('--11--') // 只执行一次
		getA = () => {
			return 1
		}
	} else {
		getA = () => {
			return 2
		}
	}
	return getA()
}
console.log(getA())
console.log(getA())
console.log(getA())
```

```js
// 普通递归
function fac (n) {
	if (n === 1) return 1;
	return n * fac(n - 1);
}

// 尾递归
function fac (n, total) {
	if (n === 1) return total;
	return fac(n - 1, n * total);
}
```

```js
function throttle (method, context) {
	clearTimeout(method.tId)

	method.tId = setTimeout(function () {
		method.call(context)
	}, 100)
}

function handleClick () {
	console.log('clicked')
}
// 快速重复点击 在100ms内只会执行一次handleClick
<button onClick={throttle(handleClick)}/>
```

```js
// bad
class Example extends React.Component<IProps, IState> {

	public constructor (props: IProps) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	public handleClick (e) { // ... }

	public render () {
		return (
			<Button onClick={this.handleClick}/>
		)
	}
}

// good
class Example extends React.Component<IProps, IState> {

	public handleClick (e) { // ... }
	
	public render () {
		return (
			<Button onClick={this.handleClick}/>
		)
	}
}
```

```js
new Vue({
	data: {
		// vue不会对list里的object做getter、setter绑定
		list: Object.freeze([
			{ value: 1 },
			{ value: 2 }
		])
	}
	mounted () {
		// 界面不会有响应
		this.list[0].value = 100

		// 下面两种都会响应
		this.list = [
			{ value: 100 },
			{ value: 200 }
		]
		this.list = Object.freeze([
			{ value: 100 },
			{ value: 200 }
		])
	}
})
```

```js
function foo () {
	bar = '...大量数据...';
}

// 或
function foo () {
	this.bar = '...大量数据...';
}

// 等同于
function foo () {
	window.bar = '...大量数据...';
}
```