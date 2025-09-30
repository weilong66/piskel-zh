# 开发环境

> Julian Descottes 最后于 2017年1月15日 编辑 · 11 次修订

## 先决条件

要构建 Piskel，你需要：

*   安装 [node](https://nodejs.org/zh-cn) 和 grunt-cli `npm install grunt-cli -g`
*   克隆仓库 https://github.com/juliandescottes/piskel.git
*   运行 `npm install`
*   安装 CasperJS（集成测试需要）

## Grunt 构建目标

### default（默认）

`grunt` 将会在仓库根目录下的 `/dest` 文件夹中构建 Piskel。
- 或者使用 `grunt build`

### serve

`grunt serve` 将会：

*   构建应用程序
*   在 9001 端口启动一个服务器（服务 dest 文件夹）
*   在浏览器中打开 http://localhost:9001
*   监视文件变化，并在需要时重新构建应用程序

### play

`grunt play` 将会：

*   在 9901 端口启动一个服务器（服务 /src 文件夹）
*   在浏览器中打开 http://localhost:9901/?debug

使用 `?debug` 参数，Piskel 将使用未打包且未压缩的文件。

### test

`grunt test` 将会：

*   执行前导缩进验证
*   执行 jshint 代码检查
*   运行单元测试
*   运行集成测试

## 持续集成

Travis 已经设置好，用于在每个 Piskel 的 Pull Request 上运行 `grunt test` 任务。