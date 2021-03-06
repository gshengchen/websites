# C程序设计语言

[toc]

## 第一章 导言

### 1.1 入门

一个C语言程序都有函数与变量组成，函数中包含一些语句，以指定所要执行的计算操作；变量则用于存储计算过程中使用的值。
每个程序从main函数的起点开始执行，main函数通常调用其他函数来帮助完成某些工作。
函数之间进行数据交换的一种方法四调用函数向被调用函数提供参数列表。

### 1.2 变量与算术表达式

在C语言中，所有变量都必须先声明后使用。声明通常放在函数开始处，在任何可执行的语句之前。声明用于说明变量的属性，它由一个类型名和一个变量表组成。 如：

~~~c
int fachr,celsius;
int lower,upper,step;
~~~

基本数据类型：int、float、char、short、long、double。
语句以分号结束。

### 1.3 for语句

for语句是一种循环语句，第一部分是初始化，第二部分是控制循环的测试或条件部分，第三部分表达式求值，在对第二部分条件再次，true循环，false循环终止，这三部分用分号分隔。
C语言中一个通用规则：在允许某个类型变量的场合，都可以使用该类型的更复杂的表达式。

### 1.4 符号常量

指令\#define可以把符号名（符号常量）定义为一个特定字符串。

~~~c
#define 名字 替换文本
~~~

替换文本可以是任何字符序列。符号常量通常用大写字母拼写。

### 1.5 字符输入/输出

标准库提供输入、输出模型都是按照字符流的方式处理，文本流是由多行字符构成的字符序列，而每行字符由0个或多个字符组成，行末是一个换行符。
标准库提供了一次读/写一个字符的函数，其中最简单的就是getchar和putchar函数。  

* getchar函数，每次调用时，从文本流中读入下一个字符，并将其作为结果值返回。  
* putchar函数 把整型变量c的内容以字符的形式打印出来。  

#### 1.5.1 文件复制

EOF 文件结束标志，值为 -1；
结束文件输入CTRL+D

#### 1.5.2 字符计数

单独的分号就是空语句。

#### 1.5.3 行计数

行计数等价与统计换行符的个数

#### 1.5.4 单词计数

这里的单词就是不包含空格、制表符或换行符的字符序列。

### 1.6 数组

c语言中数组的下标是从0开始。
下标是任何整型表达式，包括变量和常量。
char类型其实是小的整型。
