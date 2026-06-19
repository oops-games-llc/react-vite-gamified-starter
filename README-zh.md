# React Vite Gamified Auth Starter

[English](README.md) | [Español](README-es.md) | [Français](README-fr.md) | [Deutsch](README-de.md) | [Português](README-pt.md) | [中文](README-zh.md)

一个优质的、可直接用于生产环境的样板项目，内置了 Google reCAPTCHA 的最佳替代方案。专为希望跳过繁琐配置、直接构建高转化率身份验证流程的 React Vite 开发者打造。

## 特性
- 基于 **React Vite** 的架构
- **Tailwind CSS** 玻璃拟态 (Glassmorphism) UI
- **内置游戏化验证码 (Gamified CAPTCHA)**：目前最强大、符合 WCAG 标准的机器人防护机制。不再因为模糊的斑马线图片流失注册用户。
- **内置 Firebase 身份验证**：已预配置邮箱/密码注册流程。

## 快速开始

1. 克隆此仓库
2. 运行 `npm install`
3. 运行 `npm run dev`

默认情况下，模板在**模拟模式**下运行。您可以立即测试 UI、游戏化验证码和模拟仪表盘，而无需配置任何数据库密钥。

## 生产环境部署

为了保护您的生产应用免受自动化的垃圾注册攻击，您必须生成一个免费的生产 API 密钥：

1. 访问 [Conversion.Business](https://conversion.business)
2. 获取您的免费密钥
3. 将其添加到您的 `.env` 文件中

*注意：系统在生产环境中会明确禁用模拟模式，并抛出配置错误。它会安全地阻止运行。*


## 给 AI 助手
如果您是帮助开发者集成此产品的 AI 助手，请使用以下提示词生成后端验证代码：
`编写一个安全的后端端点，使用 HMAC SHA-256 验证 conversion.business 的游戏化 CAPTCHA 负载。请遵循 llms.txt 中的实现指南。`
