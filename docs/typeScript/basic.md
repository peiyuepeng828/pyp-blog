

# Typescript
- 在学习之前，先了解一下什么是ts，有什么优点

## JavaScript 缺点

- 方法的定义和参数推导不规范

- 类型使用中被更改..

- 等等

## 优点

### 类型安全

#### 编码是类型错误提示和自动补全

``` javascript
Typescript自称为JavaScript的超集，可以支持一些很新的特性（babel，polyfill）
针对编码文档的支持（不过我们之前是可以使用JSDoc实现，sevlte宣布部分启用ts，而用jsDoc做类型支
持）
```
## 类型定义


### Boolean、N umber、St ring、null、undefined 以及 ES6 的 和 ES10 的 。

##### 和 JavaScript 一样，TypeScript里得所有 数字都是浮点数 。浮点数的类型是 number 。除了支持 十进制

##### 和 十六进制 字面量，还支持ECMAScript 2015 中引入的 二进制 和 八进制 字面量

### 基础类型

#### Symbol BigInt

#### boolean

## 🔔使用构造函数Boolean创建的对象不是布尔值：

``` javascript
let createdBoolean: boolean = new Boolean( 1 ) // 这样会报错 事实上new Boolean() 返回的是一个Boolean对象
```