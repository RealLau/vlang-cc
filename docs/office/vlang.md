# V语言

V语言是为开发可维护的软件而创建的简单、快速、安全的编程语言

- [V语言官网](https://vlang.io)
- [官方代码](https://github.com/vlang)

从代码编译V语言：

- https://github.com/vlang/v#installing-v-from-source

### Docker环境

```shell
docker pull xena/vlang:0.0.12

docker run --rm -it xena/vlang:0.0.12 sh

docker run --rm -it xena/vlang:0.0.12 /root/code/v/compiler/v

docker run --rm -it xena/vlang:0.0.12 /root/code/v/compiler/v run /root/code/v/examples/hello_world.v
```

## Hello, world

在线运行：https://vlang.io/play

```rust
fn main() {
	areas := ['game', 'web', 'tools', 'science', 'systems', 'GUI', 'mobile'] 
	for area in areas {
		println('Hello, $area developers!')
	}
}
```

## 开发状态

V语言还处于非常早期的开发阶段。很多特性都标记为开发中状态（WIP，work in progress）。不过此页面相关的内容和代码都会在2019年6月22号开源。如果所有的WIP开发工作都完成，那么将是发布V1.0的时候。

## V语言的特色

### 快速编译

在Intel i5-7500 @ 3.40GHz, SM0256L SSD没有优化的环境，每秒钟可以编译120万行V代码。这是通过模块化和直接输出机器码来实现快速编译的。

V语言编译器也可以直接输出C语言代码，但是输出的性能将下降到10行每秒钟。

*注：直接输出机器码还处于非常早期的阶段，目前只支持X64环境的Mach-O格式的目标文件。因此目前必须先输出C代码再进行编译。*

### 安全

- 没有空值
- 没有全局变量
- 没有未定义的值
- 没有未定义的行为
- 没有变量屏蔽
- 边界检查
- Option/Result类型
- 泛型（WIP）
- 默认变量不可变
- 默认函数是纯函数
- 模式结构体不可变

## 性能

- 快如C语言
- 和C语言对接没有额外成本
- 最小化内存分配行为
- 内置的序列化没有基于运行时反射
- 输出的二进制没有外部依赖，一个Web服务才65KB

## 用于构建可维护程序的简洁语言

你可以在半个小时读完全部的自带文档。虽然简洁，但是不简单！你可以用V语言做任何其它语言可以做的事情！

## 编译器400KB，零依赖

语言的标准库小于400KB。V语言已经自举，用V语言编写，可以在0.4秒内构建（到今年地，时间继续降到0.15秒）。

时间对比：

```
语言     内存大小    编译时间
Go      525 MB     1m 33s
Rust    30 GB      45m
GCC     8 GB       50m
Clang   90 GB      25m
Swift   70 GB      90m
V       0.4 MB     0.4s
```

目前V语言只依赖C语言编译器，用于启动。一旦语言完备，就可以不再需要C语言编译器。

先在0.4秒内构建V，然后使用生成的编译器再次构建自己

## C/C++代码到V代码

V可以翻译整个C/C++代码到V代码，以享受带来的安全性、简单性和高达400x的编译速度。

比如C++代码：

```c++
std::vector<std::string> s;
s.push_back("V is ");
s.push_back("awesome");
std::cout << s.size();
```

将翻译为以下V代码：

```rust
mut s := []
s << 'V is '
s << 'awesome'
println(s.len)
```

关于翻译DOOM的博客文章即将发布。

*翻译几乎支持全部的C语言标准，但是对C++对支持还处于早期阶段。上面是简单的例子，复杂的C++代码可能有困难。C++是一个比较复杂的语言，我们希望今年年底能完成这个工作。*

DOOM从C代码翻译到V代码后，编译时间是0.7秒，提升了25倍。

![img](https://vlang.io/img/doom.png)

## 代码热加载

修改代码之后无需重新编译，直接查看修改后的结果，大大提升开发效率。

## 强大的图形库

基于GDI+/Cocoa Drawing构建的跨平台绘图库，以及基于OpenGL的图形库，用于构建更复杂的2D/3D应用程序，具有以特性：

- 加载复杂的3D纹理（WIP）
- 相机（移动和环顾四周）（WIP）
- 骨骼动画（WIP）

DirectX，Vulkan和Metal的支持已经在计划中。

![img](https://vlang.io/img/gg.png)

## 本机跨平台GUI库

使用本地窗口控件。跨平台开发不在需要嵌入一个巨大的浏览器引擎。V语言提供了一个ui模块用于本地GUI应用开发：Windows底层使用WinAPI/GDI+，macOS底层使用Cocoa。而Linux通过定制的绘图实现。

即将到来的特性：

- 类似Delphi的可视化编辑器用于本地GUI应用开发。
- 支持iOS/Android，使用本地窗口控件。
- 类似SwiftUI和React Native的声明式API。

下面是用V语言的ui包开发的Slack本地客户端Volt，只有300KB大小：

![](https://volt-app.com/img/screen3.png)

## 交叉编译更便捷

只要运行`v -os windows .`或`v -os linux .`就可以轻松实现跨平台交叉编译。即便是GUI应用开发，交叉编译也不需要额外的步骤！（目前编译macOS应用只能在macOS系统）

下面展示了先用macOS进行V语言应用开发，然后在使用Windows VM测试输出v.exe程序：

## 无痛部署和依赖管理

使用V语言构建应用，无论代码规模多大，只要简单运行`v .`命令。不需要配置任何构建环境、makfile文件等。因为采用精通链接，不会有任何其它动态库依赖，可以在任何同类型的操作系统运行。

例如只需要运行`v get sqlite`就可以获取sqlite库（WIP）。

## 到处可运行

V语言可以输出C代码，因此只有有C语言的地方都可以用V语言开发应用，同时可以借助GCC或Clang强大的优化能力。V语言可以没有代价地调用C函数，同时其它任何语言也可以像调用C函数那样调用V语言函数。

## REPL

```shell
$ v
>> data := http.get('https://vlang.io/utc_now')?
>> data 
'1551205308'
```

## V脚本（WIP）

```shell
#v 
for file in ls('build/') {
	rm(file) 
}  
mv('*.exe', 'build/')

v run deploy.v
```

## 内置Web框架

```rust
['/post/:id']
fn (b Blog) show_post(id int) vweb.Result {
  post := b.posts_repo.retrieve(id) or {
     return vweb.not_found()
  }
  return vweb.view(post)
}
```

V语言[论坛](https://blog.vlang.io/forum)和[博客](https://blog.vlang.io/)均采用内置的Web框架开发。

## V语言案例

- V：V语言用V语言实现。
- [Volt](https://volt-app.com/)：Slack/Skype/Matrix/Telegram/Twitch等本地客户端。
- Filey：跨平台的文件管理工具，支持于云同步文件。
- [Vid](https://github.com/medvednikov/vid)：200KB大小的编辑器，性能与Sublime Text相当。
- C/C++到V的转换器：目前已经支持C代码的转换，稍后会支持标准的C++到V代码的转换。生成的是码农可读的V代码。
- V ui：跨平台的窗口组建，底层使用本地API实现。
- [Gitly](http://gitly.org/)：GitHub/GitLab的开源山寨品。
- [V blog](https://blog.vlang.io/)：目前只有基础的博客功能，以后实现更多完善的功能。

# FAQ

## 已经有了Go、Rust、C++、Python这么多语言，已经学不动了，为何又要造一个轮子？

[V和其他语言的详细比较](https://vlang.io/compare)

*原文说的比较含蓄，翻译下：就是其它语言太烂了，V语言才是真NB。*

## V语言是什么语言写的？

V语言。V的编译器可以编译自身。原始版本是Go语言写的。

## V是不是又偷偷用了LLVM？

绝对没有！V编译器直接生成目标机器码。因此它才能这么飞快（潜台词就是LLVM的语言比较慢，好像是说那个什么Xust语言）。目前只有支持x64 Mach-O格式。但是当V开源后，其它的CPU平台和格式会飞快得到支持（这是指望大家来帮忙填坑吗）。

V还可以生成人类可读的C代码，因此可以编译到任何支持C的平台。但是这种方式速度要降低10倍。

## 性能是不是很烂？

目前V生成C代码，然后通过GCC和Clang来进行优化。通过这种方式可以使用复杂的优化技术。

不过这种方式构建的速度比V编译要慢150被（但是依然比C++的编译速度快一个数量级）。

如果在开发期间就需要终极的优化（例如游戏中的AAA问题），这可能是一个问题。对于这种情形，可以使用代码的热加载技术。

在未来的计划中，V将拥有自己的优化器。

## 有自动垃圾内存回收吗？

没有GC！V在编译时管理内容（和Rust类似）。目前只有基础部分被管理，复杂的场景需要手动管理内存。更多信息请参考：https://vlang.io/docs#memory

## 是否会有包管理？

必须的！V是模块化的语言，并且鼓励创建可复用的模块。会有一个中央仓库，安装模块就是这么简单：

```shell
$ v get sqlite
```

## 有并发吗？

将会和Go语言一样。并发调用一个`foo()`函数，只需要`go foo()`。目前一个并发基于一个系统线程。马上会实现类似goroutine的调度机制。

## 是否可以不依赖libc构建V程序？

必须的！

## 支持自定义分配器吗？

必须的。不过目前还没有实现，但是在6月正式开源之后会尽快实现。

## 在v1.0之前，V还会发生很大的变化吗？

应该不会，目前文档中的特性将保持不变。当然会有一些新的功能会加入（例如Goroutine）。

在设计V语言的时候，作者已经经过深思熟虑以确保在未来语法不会出现大的变化。

即使有语法变化发生，`vfmt`格式化工具也将会自动处理。

在v1.0发布之后也同样如此。

## 什么时候发布v1.0？

计划是在2019年底之前推出v1.0。

这个计划虽然听起来有点疯狂，但是V是一个短小而简单的语言。其中大部分特性已经实现。

为开发人员提供确定性和稳定的正式版本非常终于，我们不会让语言长时期处于Beta状态。

## 支持了几个平台？

Windows/macOS/Linux/*BSD已经支持，Android和iOS已经纳入明年的搬砖计划。

## V有豪华的团队支持吗？

就作者一个码农。是不是不敢用了:D

## 翻译C++代码的原理是什么？毕竟C++编译器不是人写的。

Clang编译器先进行语法解析，然后在翻译到V代码。

## 编辑支持V语言吗？

VSCode和Vim都有基本的插件。另可以试试Vid编辑器，该编辑器以V语言编写，它内置支持V语言。

Emacs的插件和其他主流的编辑器插件即将推出。

V是一种小而简单的语言，它不需要强大的IDE。

## V有什么梗吗?

语言最初的名字和用它来开发的产品同名，就是Volt。文件扩展名也是`.v`，我们不想串改git历史，因此我们将它命名为V语言。

这个简单的名字也反映来语言的简介，并且每个码农都容易说出正确读音。

请注意，V语言的名称是“V”，而不是“Vlang”或“V-Lang”等（不要再搞出Golang那种笑柄来）。

## 有没有使用GPL开源版权？

我们用的是MIT！
