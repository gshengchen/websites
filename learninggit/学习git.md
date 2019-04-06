# 精通GIT

[TOC]

## 入门

版本控制分为：

* 本地版本控制（VCS）

~~~ plantuml
@startuml
rectangle "本地计算机"{
rectangle "版本数据库"{
[版本3]-down-[版本2]
[版本2]-down-[版本1]
}
[文件]-版本数据库
}

@enduml
~~~

* 集中式版本控制（CVCS）

~~~ plantuml
@startuml
rectangle "中央VCS服务器"{
rectangle "版本数据库"{
[版本3]-down-[版本2]
[版本2]-down-[版本1]
}
rectangle "计算机A"{
[文件1]<-left-版本数据库
}

rectangle "计算机B"{
[文件2]<-left-版本数据库
}

}

@enduml

~~~

* 分布式版本控制（DVCS）

~~~ plantuml
@startuml
rectangle "服务器计算机"{
    rectangle "版本数据库"{
[版本3]-[版本2]
[版本2]-[版本1]
    }
}
rectangle "计算机A"{
  rectangle "版本数据库a"{
  [版本3a]-[版本2a]
  [版本2a]-[版本1a]
  }
  [文件a]<-down-版本数据库a
}

rectangle "计算机B"{
  rectangle "版本数据库b"{
  [版本3b]-[版本2b]
  [版本2b]-[版本1b]
  }
  [文件b]<-down-版本数据库b
}

服务器计算机<->计算机A
服务器计算机<->计算机B
计算机B<->计算机A

@enduml
~~~

## git基础

* git保存的是快照，而不是差异
* 几乎所有操作在本地进行
* git所有数据在存储前都进行校验与计算
* git 通常只增加数据
* 文件的三种状态，在git中，文件可以处于以下三种状态：
  * 已提交（commited），表示数据安全存入本地数据库中；
  * 已修改（modified），表示改动了文件，但未提交到数据库；
  * 已暂存（staged）， 表示对已修改文件的当前版本做出标识并将其加入下一次要提交的快照中。
* Git项目的区域：Git目录（仓库）、工作目录及暂存区

~~~ plantuml
@startuml
工作目录->暂存区:暂存修改
暂存区->Git目录:提交
Git目录->工作目录:检出项目
@enduml
~~~

* Git工作流程：
  1. 修改工作目录中文件；
  2. 暂存文件，将文件快照加入暂存区；
  3. 提交暂存区中文件，将文件的快照永久地保存在Git目录中。
* Git配置
  * /etc/gitconfig 包含系统中所有用户及其仓库的值，使用下面命令：

   ~~~ code
    git config --system
   ~~~  

  * \~/.gitconfig或~/.config/git/config 针对用户自己的，使用命令：

   ~~~ code
   git config --global
   ~~~

  * 当前仓库git目录中的config，针对单个仓库。

* 用户身份设置，使用--global参数，设置一次就行：

  ~~~ code
    git config --global user.name "ygitourname"
    git config --global user.email youremail
    git config --global core.editor "editor"
  ~~~

* 检查个人设置

 ~~~ code
  git config --list
  git config <key>
 ~~~

* 获得帮助

 ~~~ code
   git help <verb>
   git <verb> --help
 ~~~

## 获取Git仓库

建立Git项目方法主要有两种:

* 在现有目录中初始化Git仓库

~~~ code
  git init //进入目录执行
  git add * //跟踪需要的文件
  git commit -m 'init' //提交
~~~

* 克隆现有的仓库

~~~ code
  git clone [url]
  git clone [url] 新文件夹
~~~

## Git仓库中记录变更

工作目录下文件都是两种状态之一：已跟踪（tracked）或者未跟踪（untracked）。已跟踪文件是指上一次快照中包含的文件，这些文件分为未修改、修改或者已暂存三种状态；其他就称之为未跟踪文件。
文件状态生命周期：

~~~plantuml
@startuml
未跟踪<-未修改:移除文件
未修改->已修改:编辑文件
已修改->已暂存:暂存文件
已暂存->未修改:提交
未跟踪->已暂存:添加文件
@enduml
~~~

* 查看当前文件状态

~~~ code
git status
~~~

* 跟踪新文件

用git add 命令开始跟踪新文件

~~~ code
git add <filename>
~~~

* 暂存已修改的文件

git add是一个多功能文件，既可以用来跟踪新文件，也可以用来暂存文件，还可以有其他功能。把git add 命令理解成“添加内容到下一次提交中”。

* 显示跟简洁的状态信息

~~~ code
git status -s
~~~

文件列表旁的标记分两列，左列表明文件是否暂存，右列表明文件是否修改。A标记已暂存的新文件，M标记一个已修改的文件，？？标记一个未跟踪的文件。

* 忽略文件

如果不希望某一类文件被git自动添加，可以创建.gitignore文件。匹配规则如下：
  
  1. 空行或者以#开始的行被忽略
  2. 支持标准glob模式(简化版正则表达式)
  3. 以斜杠（/）开头的模式可用于禁止递归匹配
  4. 以斜杠（/）结尾的模式表示目录
  5. 以感叹号（！）开始的模式取反

glob 模式就是简化版正则表达式：（*）匹配0个或者更多字符，[abc]匹配方括号内任意单字符，（？）匹配任意单字符，[0-9]能够匹配两个范围内任何单字符，可以用两个*匹配嵌套目录。

* 查看已暂存和为暂存的变更

git diff 会显示出你具体添加和删除了哪些行，也就是输出补丁。

~~~ code
git diff
git diff --staged //查看哪些已暂存的内容会进入下一次提交

~~~

* 提交变更

所有未暂存的变更不会进入提交内容，提交的方式git commit。
可以在命令行加上提交信息，这就需要-m参数：

~~~ code
  git commit
  git commit -m "messge"
~~~

* 跳过暂存区

给git commit 加入-a参数，就能自动把已跟踪的文件添加到暂存区，然后再提交。

* 删除文件

要从git中删除文件，需要把它先从已跟踪的文件列表中删除，然后再提交，该命令会把文件从工作目录中删除。

~~~ code

git rm <filename>
git rm -f <filename>
~~~

如果用删除了工作目录的文件，一样可以用git rm 从git删除。
如果想把文件保留在工作目录，但从暂存区删除该文件，使用--cached选项

~~~ code

git rm --cached <filename> //可以用glob模式匹配
~~~

* 移动文件

git 如果使用mv 命令，其实是一个重命名命令。

~~~ code
git mv file-from file-to
// 相当于执行以下三条命令
mv file-from file-to
git rm file-from
git add file-to

~~~

## 查看提交历史

~~~ code
git log

~~~

默认不加参数，按照时间顺序列出仓库中所有提交。
参数 -p 显示每次提交所引入的差异，- n 输出最近的n次提交

~~~ code
git log -p -2
~~~

参数列表：
|选项|描述|
|:----|:----|
|-p|按补丁格式显示每个提交引入的变更|
|--stat|显示被更改的文件统计信息|
|--shortstat|显示包含“更改/新增/删除”行的统计信息|
|--name-only |在每个提交信息后显示被更改的文件列表|
|--abbrev-commit|只显示完整的SHA-1 40位校验和字符串中前几个字符|
|--relative-date|显示相对日期|
|--graph|在提交历史信息旁显示ASCII图表，用于展示分支和合并的历史信息|
|--pretty|用一种可选的格式显示提交。选项有oneline、short、full、fuller和format|

git log pretty=format 参数列表

|格式选项|输出格式描述|
|:--:|:----:|
|%H|提交对象的散列值|
|%h|提交对象的简短散列值|
|%T|树对象的散列值|
|%t|树对象的简短散列值|
|%P|父对象的散列值|
|%p|父对象的简短散列值|
|%an|作者名字|
|%ae|作者的电子邮件|
|%ad|创作日期|
|%ar|相对当前日期的创作日期|
|%cn|提交者名字|
|%ce|提交者email|
|%cd|提交日期|
|%cr|相对当前日期的提交日期|
|%s|提交信息的主题|

~~~ code
git log --stat
git log --pretty=oneline
git log --pretty=format:"%an,%as,%s"
~~~

* 限制提交历史的输出范围

用于限制git log输出范围的选项：
|选项|描述|
|:--:|:--:|
|-(n)|显示最新的n次提交|
|--since，--after|输出指定日期后的提交|
|--until，--before|输出指定日期前的提交|
|--author|输出作者与指定字符串匹配的提交|
|--committer|输出提交者与指定字符串匹配的提交|
|--grep|输出提交信息包含指定字符串的提交|
|-S|输出包含“添加/删除指定字符串”的更改的提交|

~~~ code
git log --since="2018-08-19"
git log --author=gsheng

~~~

## 撤销操作

如果忘记添加某些文件，或者更改提交信息，可以用--amend选项：

~~~ code
git commit --amend
~~~

* 撤销已暂存的文件

~~~ code
git reset HEAD <finename>

~~~

* 撤销对文件的修改

~~~ code
git checkout -- <file>
~~~

该命令比较危险，小心使用。

## 远程仓库的使用

* 显示远程仓库

使用git remote 命令，可以列出远程仓库名称，加上-v 可以每个远程仓库的URL。

* 添加远程仓库

显示添加远程仓库，可以执行git remote add [shortname] [url]。

* 从远程仓库获取和拉取数据

使用git fetch [shortname]获得远程仓库包含分支全部数据，该命令只会把数据拉到本地仓库，不会修改当前工作目录的任何数据；
使用git clone url 命令，自动添加远程仓库的地址，并取名origin ，并自动设置你本地的master分支，使其跟踪远程分支。
git pull 命令自动获取远程数据，并将远程分支合并入当前本地分支。

* 将数据推送到远程仓库

使用命令：git push [remote-name][branch-name]
上述命令正常工作的前提是必须有克隆下来的远程仓库的写权限，并且克隆后没有其他任何人向远程仓库推送数据。

* 检查远程仓库

使用命令：git remote show [remote-name]

* 删除和重命名远程仓库

命令：git remote rename [oldname] [newname]
git remote fm [name]
