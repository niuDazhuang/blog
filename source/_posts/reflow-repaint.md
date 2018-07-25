---
title: 重排、重绘
date: 2018-07-25 16:42:34
tags: [dom]
---

## 浏览器的运行机制

- 构建DOM树（parse）：渲染引擎解析HTML文档，首先将标签转换成DOM树中的DOM node（包括js生成的标签）生成内容树（Content Tree/DOM Tree）；

- 构建渲染树（construct）：解析对应的CSS样式文件信息（包括js生成的样式和外部css文件），而这些文件信息以及HTML中可见的指令（如<b></b>），构建渲染树（Rendering Tree/Frame Tree）；

- 布局渲染树（reflow/layout）：从根节点递归调用，计算每一个元素的大小、位置等，给出每个节点所应该在屏幕上出现的精确坐标；

- 绘制渲染树（paint/repaint）：遍历渲染树，使用UI后端层来绘制每个节点

## 创建图层条件
 
* 3D或透视变换（perspective transform）CSS属性 
* 使用加速视频解码的 video 节点 
* 拥有3D（WebGL）上下文或加速的2D上下文的 canvas 节点 
* 混合插件（如Flash） 
* 对自己的opacity做CSS动画或使用一个动画webkit变换的元素 
* 拥有加速CSS过滤器的元素 
* 元素有一个包含复合层的后代节点（一个元素拥有一个子元素，该子元素在自己的层里） 
* 元素有一个z-index较低且包含一个复合层的兄弟元素（换句话说就是该元素在复合层上面渲染）

## 触发重排操作

- 页面渲染初始化；(无法避免)
- 添加或删除可见的DOM元素；
- 元素位置的改变，或者使用动画；
- 元素尺寸的改变——大小，外边距，边框；
- 浏览器窗口尺寸的变化（resize事件发生时）；
- 填充内容的改变，比如文本的改变或图片大小改变而引起的计算值宽度和高度的改变；
- 读取某些元素属性：
  offsetLeft/Top/Height/Width
  clientTop/Left/Width/Height
  scrollTop/Left/Width/Height
  width/height,　getComputedStyle(),　currentStyle(IE)

## 如何避免重排

- 综： 减少对渲染树的操作，合并多次的DOM和样式的修改。减少对style样式的请求：
- 直接改变元素的className
- display：none；先设置元素为display：none；然后进行页面布局等操作；设置完成后将元素设置为display：block；这样的话就只引发两次重绘和重排；
- 不要经常访问浏览器的flush队列属性；如果一定要访问，可以利用缓存。将访问的值存储起来，接下来使用就不会再引发回流；
- 使用cloneNode(true or false) 和 replaceChild 技术，引发一次回流和重绘；
- 将需要多次重排的元素，position属性设为absolute或fixed，元素脱离了文档流，它的变化不会影响到其他元素；
- 如果需要创建多个DOM节点，可以使用DocumentFragment创建完后一次性的加入document；
- 尽量不要使用table布局。
- requestAnimationFrame