# 🤝 Contributing to JavaScript GuideBook

Thank you for your interest in contributing to JavaScript GuideBook! This document provides guidelines and instructions for contributing to our project.

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Documentation Guidelines](#-documentation-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Style Guide](#-style-guide)
- [Contact](#-contact)

## 📜 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). Please be respectful and considerate of others.

## 🚀 Getting Started

1. **Fork the Repository**

   - Click the 'Fork' button on the top right of the repository page
   - Clone your forked repository:
     ```bash
     git clone https://github.com/your-username/javascript-guidebook.git
     cd javascript-guidebook
     ```

2. **Set Up Development Environment**

   ```bash
   npm install
   npm run dev
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📁 Project Structure

```
javascript-guidebook/
├── pages/           # Main pages and documentation
│   ├── en/         # English documentation
│   └── bn/         # Bengali documentation
├── components/      # Reusable UI components
├── public/         # Static assets
├── styles/         # CSS and styling files
└── docs/           # Documentation content
```

## 📝 Documentation Guidelines

### File Structure

- Create new documentation files with `.mdx` extension
- Place files in the appropriate language directory (`en/` or `bn/`)
- Follow the existing naming convention

### Metadata Configuration

Each documentation section requires a `_meta.json` file. Here's an example:

```json
{
  "title": "JavaScript Basics",
  "sections": [
    {
      "title": "Variables",
      "path": "/javascript-basics/variables"
    },
    {
      "title": "Data Types",
      "path": "/javascript-basics/data-types"
    }
  ]
}
```

### Writing Style

- Use clear, concise language
- Include code examples where relevant
- Add comments to explain complex concepts
- Maintain consistent formatting
- Use proper headings hierarchy

## 🔄 Pull Request Process

1. **Before Creating a PR**

   - Ensure your branch is up to date with `main`
   - Run tests and linting
   - Verify all changes work as expected

2. **Creating a PR**

   - Use a descriptive title
   - Provide detailed description of changes
   - Reference related issues
   - Include screenshots if applicable

3. **PR Review Process**
   - Address review comments promptly
   - Make necessary changes
   - Keep the PR updated with `main`

## 🎨 Style Guide

### Markdown Formatting

- Use proper heading levels
- Include code blocks with language specification
- Use tables for structured data
- Add links to related resources

### Code Examples

```javascript
// Good example
const calculateSum = (a, b) => a + b;

// Bad example
function sum(a, b) {
  return a + b;
}
```

### Documentation Structure

1. Introduction
2. Prerequisites
3. Main Content
4. Examples
5. Best Practices
6. Common Pitfalls
7. Additional Resources

## 📧 Contact

- **Issues**: [GitHub Issues](https://github.com/md-sohrab-hossain/javascript-guidebook/issues)
- **Email**: [md.soharubhossen@gmail.com](mailto:md.soharubhossen@gmail.com)
- **Discord**: [Join our community](your-discord-link)

---

<div align="center">

Thank you for contributing to JavaScript GuideBook! 🎉

</div>
