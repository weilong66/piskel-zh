Piskel
======

[[E2E 测试](https://github.com/piskelapp/piskel/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/piskelapp/piskel/actions/workflows/ci.yml)

Piskel 是一个易于使用的精灵图编辑器。可用于创建游戏精灵、动画、像素艺术等。
它也是 **[piskelapp.com](https://www.piskelapp.com)** 网站所使用的编辑器。

<img
  src="https://screenletstore.appspot.com/img/95aaa0f0-37a4-11e7-a652-7b8128ce3e3b.png"
  title="Piskel 编辑器截图"
  width="500">

## 关于 Piskel

### 技术栈

Piskel 编辑器完全由 **JavaScript、HTML 和 CSS** 构建而成。

我们还使用了以下 **库**：
* [spectrum](https://github.com/bgrins/spectrum)：出色的独立颜色选择器
* [gifjs](https://jnordberg.github.io/gif.js/)：使用 Web Workers 在 JavaScript 中生成动态 GIF
* [supergif](https://github.com/buzzfeed/libgif-js)：修改版的 SuperGif，用于解析和导入 GIF 图像
* [jszip](https://github.com/Stuk/jszip)：使用 JavaScript 创建、读取和编辑 .zip 文件
* [canvas-toBlob](https://github.com/eligrey/canvas-toBlob.js/)：canvas toBlob 方法的兼容补丁
* [jquery](https://jquery.com/)：在应用中零星使用
* [bootstrap-tooltip](https://getbootstrap.com/javascript/#tooltips)：美观的提示框
* [playwright](https://playwright.dev/)：端到端测试

此外，部分 **图标** 来自 [Noun Project](https://thenounproject.com/)：
* 文件夹图标由 The Noun Project 的 Simple Icons 提供
* （可能还有一两个其他图标）

### 浏览器支持

Piskel 支持以下浏览器：
* **Chrome**（最新版）
* **Firefox**（最新版）
* **Edge**（最新版）
* **Brave**（最新版），但**必须禁用画布指纹识别功能**（[更多信息](https://github.com/piskelapp/piskel/wiki/About-canvas-based%E2%80%90browser-fingerprinting-and-Brave-browser)）

### 移动设备/平板

目前不支持移动设备。

### 离线版本

提供离线版本。更多详情请参见[专门的 Wiki 页面](https://github.com/piskelapp/piskel/wiki/Desktop-applications)。

## 帮助
- [开发部署](./wiki/zh/development-environment.md)

## 如何参与贡献？

我们始终欢迎帮助！

* **问题反馈**：在使用应用时发现了问题，或希望请求新功能？请[提交一个 issue](https://github.com/piskelapp/piskel/issues)。
* **开发贡献**：请查看[ Wiki 页面](https://github.com/piskelapp/piskel/wiki)以设置开发环境。

## 许可

Copyright 2017 Julian Descottes

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.


