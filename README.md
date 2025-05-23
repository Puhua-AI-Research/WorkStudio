<div align="center">
  <img src="https://github.com/Puhua-AI-Research/WorkStudio/blob/main/build/icon.png?raw=true" width="150" height="150" alt="WorkStudio Logo" />
  <h3>A powerful AI assistant for producers</h3>
    <div align="center">
  English | <a href="./README.zh.md">中文</a>
</div>
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

  
## 📸 Screenshots

<div align="center">
  <h4>💬 Intelligent Multi-model Chat</h4>
  <img src="docs/media/chat.gif" width="80%" alt="WorkStudio Chat Interface" />

  <h4>⚙️ Advanced Model Settings</h4>
  <img src="docs/media/model-settings.gif" width="80%" alt="WorkStudio Model Settings" />
  
  <h4>📚 Knowledge Processing and Management</h4>
  <img src="docs/media/knowledge.gif" width="80%" alt="WorkStudio Knowledge Processing" />
  
  <h4>🎨 AI Image Generation</h4>
  <img src="docs/media/image-gen.gif" width="80%" alt="WorkStudio Image Generation" />
  
  <h4>🔤 Smart Translation</h4>
  <img src="docs/media/translate.gif" width="80%" alt="WorkStudio Translation" />
</div>

## 🌟 Key Features


### 1. Diverse LLM Service Support
- 💻 Support for local model deployment via auto_openai llm and ph8-llm
- 🔒 Private deployment options for enterprise security and data compliance

### 2. Intelligent Assistants & Conversations
- 📚 300+ pre-configured AI assistants built-in
- 🤖 Support for creating custom personalized assistants
- 💬 Multi-model simultaneous conversations for diverse perspectives

### 3. Document & Data Processing
- 📄 Support for text, images, Office documents, PDFs, and more
- ☁️ WebDAV file management and data backup
- 📊 Mermaid chart visualization
- 💻 Code highlighting

### 4. Practical Tools Integration
- 🔍 Global search functionality
- 📝 Topic management system
- 🔤 AI-powered translation
- 🎯 Drag-and-drop sorting
- 🔌 Mini-app support

### 5. Quality User Experience
- 🖥️ Cross-platform support for Windows, Mac, and Linux
- 📦 Ready to use out of the box, no environment setup needed
- 🎨 Light/dark themes and transparent window support
- 📝 Complete Markdown rendering
- 🤲 Convenient content sharing functions

## 📋 Installation

- Simply install using the provided offline desktop application packages

## 💻 Development

### Project Setup

1. Clone the repository
   ```bash
   git clone https://github.com/Puhua-AI-Research/WorkStudio.git
   cd WorkStudio
   ```

2. Install dependencies
   ```bash
   yarn
   ```

3. Start development server
   ```bash
   yarn dev
   ```

### Build Options

The project supports building for multiple platforms:

#### Windows
```bash
# Build for Windows
yarn build:win

# Build for Windows x64
yarn build:win:x64
```

#### macOS
```bash
# Build for macOS (Universal)
yarn build:mac

# Build for macOS ARM64
yarn build:mac:arm64

# Build for macOS x64
yarn build:mac:x64
```

#### Linux
```bash
# Build for Linux
yarn build:linux

# Build for Linux ARM64
yarn build:linux:arm64

# Build for Linux x64
yarn build:linux:x64
```

### Large Model Support

WorkStudio offers flexible options for large language model integration:
   
- **Local Deployment**: Run models locally with minimal setup using:
   - vllm for containerized deployment
   - LM Deployment for user-friendly GUI-based management
   
- **ph8-llm Integration**: Native support for ph8-llm, enabling:
   - High-performance inference
   - Custom model fine-tuning
   - Parameter-efficient adaptation

- **Enterprise Private Deployment**: Deploy models within your organization's infrastructure for:
   - Data privacy compliance
   - Custom model hosting
   - Integration with existing enterprise systems

## 🚀 Private Deployment

- For more information on private deployment, please join our technical discussion group below to communicate and get support.

## 🙏 Acknowledgments

We would like to express our sincere gratitude to Cherry Studio for their significant contributions. WorkStudio is based on the secondary development of Cherry Studio's product.

## 📄 License

This project is licensed under the [Apache License 2.0](https://github.com/Puhua-AI-Research/WorkStudio/blob/main/LICENSE) with additional terms:

- **Free Commercial Use**: Users can use the software for commercial purposes without modifying the code
- **Commercial License Required**:
  - When modifying the application (name, logo, code, functionality)
  - When providing multi-tenant services to enterprise customers with 10+ users
  - When pre-installing or bundling with hardware devices or products
  - For large-scale procurement by government or educational institutions

## 💬 Technical Discussion Group

<div align="center">
  <img src="docs/media/group.png" alt="Technical Discussion Group QR Code" width="200"/>
  <p>Scan the QR code to join our technical discussion group</p>
</div>

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Puhua-AI-Research/WorkStudio&type=Timeline)](https://star-history.com/#Puhua-AI-Research/WorkStudio&Timeline)

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/Puhua-AI-Research">Puhua AI Research</a></p>
  <p>© 2025 WorkStudio. All rights reserved.</p>
</div>



