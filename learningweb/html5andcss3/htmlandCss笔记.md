# 学习web前段编程

[TOC]

## HTML5 学习

### 1.1 HTML5的目标

能够创建更简单的HTML代码 ,为此，提供许多APIb、新属性和新元素。

### 1.2 HTML5中的标记方法

* 内容类型（ContentType) "text/html"  
* DOCTYPE声明：声明不区分大小写和单双引号

```html
<!DOCTYPE html>
```

* 指定字符编码: html4声明也能用，但不能混合。  

```html
<meta charset="utf-8">
```

### 1.3 Html5兼容性

#### 1.3.1 可省略标记的元素

* 不允许写结束标记：area,base,br,col,command,embed,hr,img,input,keygen,link,meta,param,source,track,wbr  
* 可以省略结束标记的元素：li,dt,dd,p,rt,rp,optgroup,thead,tbody,tfoot,tr,td,th.  
* 可以省略全部标记的元素：html,head,body,colgroup,tbody.  

### 1.3.2 具有boolean值的属性

* 只写属性不写属性值表示true,如：

```html {.lineNo}
<input type="checkbox" checked>
```

* 不写属性表示false,如：

```html
<input type="checkbox" >
```  

* 属性值=属性/空字符串，表示true,如：

```html {.lineNo}
<input type="checkbox" checked="checked">
<input type="checkbox" checked="">
```

* 属性值两边可以用单引号，也可以用双引号，html5中如果属性值不包括空字符、'<'、'>'、'='、单引号和双引号等字符，引号可省略。

```html

<input type="text">
<input type='text'>
<input type=text>
```  

### 1.4 HTML5新增元素和废除元素

#### 1.4.1 新增结构元素

* section 元素：表示页面中的一个内容区块。比如：章节、页眉、页脚或页面中其他部分。

```html

<section> 内容.....</section>
```

* article 元素：表示页面中与上下文无关的独立内容，如，报纸中的文章。

```html
<article>文章....</article>
```

* header元素：表示一个内容区块或整个页面的标题。

```html
<header>内容....</header>
```

* hgroup元素：对整个页面或一个内容块的标题进行组合。

```html
<hgroup>标题。。。</hgroup>
```

* footer元素：表示整个页面或一个内容块的标题脚注。

```html
<footer>作者信息。</footer>
```  

* nav元素：表示页面导航部分

```html
<nav>导航链接</nav>
```

* figure元素：表示文档主体内容中一个独立流内容,figcation元素为此添加标题.

```html
<figure>
<figcation>PRC</figcation>
<P>中华人民共和国</p>
</figure>
```

#### 1.4.2 新增其他元素

* video元素：定义视频

```html
<video src="示例视频" controls>video元</video>
```

* audio元素：定义音频

```html

<audio src="音频示例">audio元素</audio>
```

* embed元素：插入各种多媒体

```html
<embed src="多媒体文件" />
```

* mark元素：主要是呈现需要显示或高亮显示的文字。

```html
<mark>关键字</mark>
```

* progress元素：表示运行中的进程。无法在html4中表示

```html
<progress>耗费时间的函数的进程</progress>
```

* meter元素：表示度量衡。无法在html4中表示

```html
<meter></meter>
```

* time元素：表示日期与时间

```html
<time>2015-11-17</time>
```

* ruby、rt、rp元素：表示ruby注释。

```html
<ruby><rt><rp></rp></rt>/ruby>
```

* wbr元素：表示软换行，br 元素强制换行。

* canvas元素：表示图形。本身没有行为，仅提供画布，但把绘图API提供给javascript客户端。

```html
<canvas id="mycanvas" height="200" width="200"></canvas>
```

* command元素：表示命令按钮。chrome不支持

```html
<command onclick=cc()>click </command>
```

* details元素:表示用户要求并可以得到的细节信息，与summary元素配合使用，summary元素提供标题，并且可见。点击标题，细节可见。

```html
<details>
<summary>Copyright 2011.</summary>
<p>All pages and graphics on this web site are the property of W3School.</p>
</details>
```

* datalist元素： 标签定义选项列表。请与 input 元素配合使用该元素，来定义 input 可能的值

```html
<input id="myCar" list="cars" />
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```

* keygen元素：表示生成密钥
* output元素：表示不同类型输出
* source元素：标签为媒介元素（比如'video' 和'audio'）定义媒介资源。标签允许您规定可替换的视频/音频文件供浏览器根据它对媒体类型或者编解码器的支持进行选择。

```html
<audio controls>
   <source src="horse.ogg" type="audio/ogg">
   <source src="horse.mp3" type="audio/mpeg">
 Your browser does not support the audio element.
</audio>
```

* menu元素：表示菜单列表

#### 1.4.3 新增input元素的类型

email、url、number、range、date、month、week、time等。

### 1.5 主体结构元素

#### 1.5.1 article元素

代表文档、页面或应用程序中独立的、完整的、可以独自被外部引用的内容。通常article元素有header、footer。

#### 1.5.2 section元素

对网站或应用程序中页面上的内容分块。当一个容器需要直接定义样式或通过脚本定义行为时，推荐使用div。section元素中的内容可以单独储存在数据库中或输出到word文档中。通常section元素有标题。
