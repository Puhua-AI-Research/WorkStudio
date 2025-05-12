
<h1 align="center">WorkStudio</h1>
<h1 align="center">

  <a href="https://github.com/Puhua-AI-Research/WorkStudio/releases">
    <img src="https://github.com/Puhua-AI-Research/WorkStudio/blob/main/build/icon.png?raw=true" width="150" height="150" alt="WorkStudio Logo" />
  </a>
</h1>
<div align="center">
  <a href="../README.md">English</a> | 中文 | <a href="./README.ja.md">日本語</a>
</div>



<div align="center">
  <h3>强大的生产力AI助手</h3>

  <div>
    <a href="https://github.com/Puhua-AI-Research/WorkStudio/stargazers">
      <img src="https://img.shields.io/github/stars/Puhua-AI-Research/WorkStudio?style=for-the-badge" alt="GitHub stars"/>
    </a>
    <a href="https://github.com/Puhua-AI-Research/WorkStudio/network/members">
      <img src="https://img.shields.io/github/forks/Puhua-AI-Research/WorkStudio?style=for-the-badge" alt="GitHub forks"/>
    </a>
    <a href="https://github.com/Puhua-AI-Research/WorkStudio/issues">
      <img src="https://img.shields.io/github/issues/Puhua-AI-Research/WorkStudio?style=for-the-badge" alt="GitHub issues"/>
    </a>
    <a href="https://opensource.org/licenses/Apache-2.0">
      <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=for-the-badge" alt="License"/>
    </a>
  </div>
  
</div>

## 📸 屏幕截图

<div align="center">
  <h4>💬 智能多模型对话</h4>
  <img src="media/chat.gif" width="80%" alt="WorkStudio Chat Interface" />

  <h4>⚙️ 高级模型设置</h4>
  <img src="media/model-settings.gif" width="80%" alt="WorkStudio Model Settings" />
  
  <h4>📚 知识处理与管理</h4>
  <img src="media/knowledge.gif" width="80%" alt="WorkStudio Knowledge Processing" />
  
  <h4>🎨 AI图像生成</h4>
  <img src="media/image-gen.gif" width="80%" alt="WorkStudio Image Generation" />
  
  <h4>🔤 智能翻译</h4>
  <img src="media/translate.gif" width="80%" alt="WorkStudio Translation" />
</div>

## 🌟 主要特性

### 1. 多样化大语言模型服务支持
- 💻 通过auto_openai llm和ph8-llm支持本地模型部署
- 🔒 为企业安全和数据合规提供私有部署选项

### 2. 智能助手与对话
- 📚 内置300多个预配置AI助手
- 🤖 支持创建自定义个性化助手
- 💬 多模型同时对话，获取多样化观点

### 3. 文档与数据处理
- 📄 支持文本、图像、Office文档、PDF等多种格式
- ☁️ WebDAV文件管理和数据备份
- 📊 Mermaid图表可视化
- 💻 代码高亮显示

### 4. 实用工具集成
- 🔍 全局搜索功能
- 📝 话题管理系统
- 🔤 AI驱动的翻译功能
- 🎯 拖拽排序
- 🔌 小程序支持

### 5. 优质用户体验
- 🖥️ Windows、Mac、Linux跨平台支持
- 📦 开箱即用，无需配置环境
- 🎨 支持明暗主题与透明窗口
- 📝 完整的Markdown渲染
- 🤲 便捷的内容分享功能

## 📋 安装

```bash
# 使用Yarn安装依赖
yarn

# 开发模式
yarn dev

# Windows构建
yarn build:win

# macOS构建
yarn build:mac

# Linux构建
yarn build:linux
```

## 💻 开发

### 项目设置

1. 克隆仓库
   ```bash
   git clone https://github.com/Puhua-AI-Research/WorkStudio.git
   cd WorkStudio
   ```

2. 安装依赖
   ```bash
   yarn
   ```

3. 启动开发服务器
   ```bash
   yarn dev
   ```

### 大模型支持

WorkStudio提供灵活的大语言模型集成选项：
   
- **本地部署**：通过以下方式以最小设置运行模型：
   - 使用Ollama进行容器化部署
   - 使用LM Studio进行用户友好的GUI管理
   
- **ph8-llm集成**：原生支持ph8-llm，实现：
   - 高性能推理
   - 自定义模型微调
   - 参数高效适配

- **企业私有部署**：在组织基础设施内部署模型，用于：
   - 数据隐私合规
   - 自定义模型托管
   - 与现有企业系统集成

## 🚀 私有部署

要在自己的环境中部署WorkStudio：

1. 为目标平台构建应用程序
   ```bash
   # Windows
   yarn build:win

   # macOS
   yarn build:mac

   # Linux
   yarn build:linux
   ```

2. 从`dist`目录分发生成的安装包


## 📄 许可证

本项目采用[Apache License 2.0](https://github.com/Puhua-AI-Research/WorkStudio/blob/main/LICENSE)授权，附加以下条款：

- **免费商业使用**：用户可以在不修改代码的情况下将软件用于商业目的
- **需要商业许可的情况**：
  - 修改应用程序（名称、标志、代码、功能）时
  - 向拥有10+用户的企业客户提供多租户服务时
  - 预装或与硬件设备或产品捆绑时
  - 政府或教育机构大规模采购时

## 💬 技术讨论群

<div align="center">
  <img src="media/group.png" alt="技术讨论群二维码" width="200"/>
  <p>扫描二维码加入我们的技术讨论群</p>
</div>

## ⭐ Star历史

[![Star History Chart](https://api.star-history.com/svg?repos=Puhua-AI-Research/WorkStudio&type=Timeline)](https://star-history.com/#Puhua-AI-Research/WorkStudio&Timeline)

<div align="center">
  <p>由<a href="https://github.com/Puhua-AI-Research">普华AI研究院</a>用❤️制作</p>
  <p>© 2025 WorkStudio. 保留所有权利。</p>
</div>
