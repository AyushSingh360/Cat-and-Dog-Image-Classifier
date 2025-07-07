# 🤝 Contributing to Cat & Dog Classifier

<div align="center">

![Contributing](https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop)

**Thank you for your interest in contributing to the Cat & Dog Classifier project!**

We welcome contributions from developers of all skill levels. This guide will help you get started.

[![Contributors](https://img.shields.io/github/contributors/AyushSingh360/cat-dog-classifier.svg)](https://github.com/AyushSingh360/cat-dog-classifier/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/AyushSingh360/cat-dog-classifier.svg)](https://github.com/AyushSingh360/cat-dog-classifier/issues)
[![Pull Requests](https://img.shields.io/github/issues-pr/AyushSingh360/cat-dog-classifier.svg)](https://github.com/AyushSingh360/cat-dog-classifier/pulls)

</div>

---

## 📋 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [🎯 Ways to Contribute](#-ways-to-contribute)
- [🛠️ Development Setup](#️-development-setup)
- [📝 Contribution Guidelines](#-contribution-guidelines)
- [🔄 Pull Request Process](#-pull-request-process)
- [🐛 Bug Reports](#-bug-reports)
- [💡 Feature Requests](#-feature-requests)
- [📚 Documentation](#-documentation)
- [🎨 Design Guidelines](#-design-guidelines)
- [🧪 Testing](#-testing)
- [📦 Code Style](#-code-style)
- [🏷️ Commit Guidelines](#️-commit-guidelines)
- [🌟 Recognition](#-recognition)
- [❓ Getting Help](#-getting-help)

---

## 🚀 Quick Start

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/AyushSingh360/cat-dog-classifier.git`
3. **Install** dependencies: `npm install`
4. **Create** a branch: `git checkout -b feature/your-feature-name`
5. **Make** your changes
6. **Test** your changes: `npm run test` (when available)
7. **Commit** your changes: `git commit -m "feat: add amazing feature"`
8. **Push** to your fork: `git push origin feature/your-feature-name`
9. **Create** a Pull Request

---

## 🎯 Ways to Contribute

### 🔧 Code Contributions

| Area | Description | Skill Level |
|------|-------------|-------------|
| **🐛 Bug Fixes** | Fix existing issues and improve stability | Beginner-Advanced |
| **✨ New Features** | Add new functionality to the application | Intermediate-Advanced |
| **🎨 UI/UX Improvements** | Enhance the user interface and experience | Beginner-Intermediate |
| **⚡ Performance** | Optimize loading times and responsiveness | Intermediate-Advanced |
| **🧠 ML Model** | Improve the machine learning model | Advanced |
| **♿ Accessibility** | Make the app more accessible | Beginner-Intermediate |

### 📚 Non-Code Contributions

- **📖 Documentation**: Improve README, guides, and code comments
- **🎨 Design**: Create mockups, icons, or visual assets
- **🧪 Testing**: Manual testing and reporting bugs
- **🌍 Translation**: Help translate the interface (future feature)
- **📢 Community**: Help answer questions and support users

---

## 🛠️ Development Setup

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**
- **Modern browser** (Chrome, Firefox, Safari, Edge)

### Local Development

```bash
# Clone the repository
git clone https://github.com/AyushSingh360/cat-dog-classifier.git
cd cat-dog-classifier

# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Project Structure

```
cat-dog-classifier/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # React components
│   ├── 📁 contexts/           # React contexts
│   ├── 📁 types/              # TypeScript definitions
│   ├── 📁 utils/              # Utility functions
│   └── 📄 main.tsx            # Entry point
├── 📄 package.json            # Dependencies
├── 📄 tailwind.config.js      # Styling config
├── 📄 tsconfig.json           # TypeScript config
└── 📄 vite.config.ts          # Build config
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 📝 Contribution Guidelines

### 🎯 Focus Areas

We're particularly interested in contributions that:

- **Improve user experience** and interface design
- **Enhance accessibility** for users with disabilities
- **Optimize performance** and loading times
- **Add useful features** that align with the project goals
- **Improve code quality** and maintainability
- **Expand documentation** and examples

### 🚫 What We Don't Accept

- Changes that break existing functionality without good reason
- Features that significantly increase bundle size without clear benefit
- Code that doesn't follow our style guidelines
- Contributions without proper testing
- Plagiarized or copyrighted content

---

## 🔄 Pull Request Process

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Create an issue** for major changes to discuss the approach
3. **Fork the repository** and create a feature branch
4. **Keep changes focused** - one feature/fix per PR

### PR Checklist

- [ ] **Branch naming**: Use descriptive names (`feature/add-batch-upload`, `fix/memory-leak`)
- [ ] **Code quality**: Follow TypeScript and React best practices
- [ ] **Testing**: Ensure your changes work as expected
- [ ] **Documentation**: Update relevant documentation
- [ ] **Responsive design**: Test on different screen sizes
- [ ] **Accessibility**: Ensure proper contrast ratios and keyboard navigation
- [ ] **Performance**: Check that changes don't significantly impact performance

### PR Template

When creating a PR, please include:

```markdown
## 📝 Description
Brief description of changes

## 🎯 Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## 🧪 Testing
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Tested in dark mode
- [ ] Tested with screen reader (if applicable)

## 📸 Screenshots
Include screenshots for UI changes

## 📋 Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes
```

---

## 🐛 Bug Reports

### Before Reporting

1. **Search existing issues** to avoid duplicates
2. **Try the latest version** to see if the bug is already fixed
3. **Reproduce the bug** consistently

### Bug Report Template

```markdown
## 🐛 Bug Description
Clear description of the bug

## 🔄 Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## 🎯 Expected Behavior
What should happen

## 📱 Environment
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 96, Firefox 95]
- Device: [e.g., Desktop, iPhone 12]
- Screen size: [e.g., 1920x1080, Mobile]

## 📸 Screenshots
Add screenshots if applicable

## 📋 Additional Context
Any other relevant information
```

---

## 💡 Feature Requests

### Before Requesting

1. **Check existing issues** for similar requests
2. **Consider the scope** - does it fit the project goals?
3. **Think about implementation** - is it technically feasible?

### Feature Request Template

```markdown
## 🚀 Feature Description
Clear description of the proposed feature

## 🎯 Problem Statement
What problem does this solve?

## 💡 Proposed Solution
How should this feature work?

## 🔄 Alternatives Considered
Other solutions you've considered

## 📋 Additional Context
Mockups, examples, or references
```

---

## 📚 Documentation

### Documentation Standards

- **Clear and concise** writing
- **Code examples** for technical concepts
- **Screenshots** for UI features
- **Step-by-step instructions** for processes
- **Proper markdown formatting**

### Areas Needing Documentation

- [ ] API documentation for utility functions
- [ ] Component usage examples
- [ ] Deployment guides
- [ ] Troubleshooting guides
- [ ] Architecture decisions

---

## 🎨 Design Guidelines

### Visual Design Principles

- **Consistency**: Use established patterns and components
- **Accessibility**: Maintain WCAG 2.1 AA compliance
- **Responsiveness**: Design for all screen sizes
- **Performance**: Optimize images and animations
- **Brand alignment**: Follow the established color scheme and typography

### Color Palette

| Theme | Primary | Secondary | Accent | Background |
|-------|---------|-----------|--------|------------|
| **Light** | `#667eea` | `#764ba2` | `#f59e0b` | `#f8fafc` |
| **Dark** | `#667eea` | `#764ba2` | `#f59e0b` | `#0f172a` |

### Typography

- **Font**: Inter, system fonts
- **Headings**: 600-700 weight
- **Body**: 400-500 weight
- **Line height**: 1.5 (body), 1.2 (headings)

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] **Functionality**: All features work as expected
- [ ] **Responsive design**: Test on mobile, tablet, desktop
- [ ] **Dark mode**: Verify theme switching works correctly
- [ ] **Accessibility**: Test with keyboard navigation
- [ ] **Performance**: Check loading times and responsiveness
- [ ] **Cross-browser**: Test on Chrome, Firefox, Safari, Edge

### Testing Guidelines

1. **Test your changes** thoroughly before submitting
2. **Include edge cases** in your testing
3. **Document any testing steps** in your PR
4. **Report any issues** you discover during testing

---

## 📦 Code Style

### TypeScript Guidelines

```typescript
// ✅ Good: Use descriptive names
interface PredictionResult {
  class: 'cat' | 'dog';
  confidence: number;
}

// ✅ Good: Use proper typing
const handlePrediction = (result: PredictionResult): void => {
  // Implementation
};

// ❌ Bad: Avoid any types
const handleData = (data: any) => {
  // Implementation
};
```

### React Guidelines

```tsx
// ✅ Good: Use functional components with hooks
const ImageUploader: React.FC<Props> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);
  
  return (
    <div className="upload-container">
      {/* Component content */}
    </div>
  );
};

// ✅ Good: Use proper prop types
interface Props {
  onUpload: (file: File) => void;
  maxSize?: number;
}
```

### CSS/Tailwind Guidelines

```tsx
// ✅ Good: Use semantic class names and consistent spacing
<div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
  <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
    Title
  </h2>
</div>

// ✅ Good: Group related classes
<button className="
  px-4 py-2 
  bg-blue-500 hover:bg-blue-600 
  text-white font-medium 
  rounded-lg transition-colors
">
  Button
</button>
```

### File Organization

- **One component per file**
- **Descriptive file names** (PascalCase for components)
- **Logical folder structure**
- **Proper imports/exports**
- **Remove unused imports**

---

## 🏷️ Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

| Type | Description |
|------|-------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation changes |
| `style` | Code style changes (formatting, etc.) |
| `refactor` | Code refactoring |
| `perf` | Performance improvements |
| `test` | Adding or updating tests |
| `chore` | Maintenance tasks |

### Examples

```bash
# Good commit messages
git commit -m "feat(upload): add drag and drop functionality"
git commit -m "fix(theme): resolve dark mode toggle issue"
git commit -m "docs(readme): update installation instructions"
git commit -m "style(components): improve button hover states"

# Bad commit messages
git commit -m "fix stuff"
git commit -m "update"
git commit -m "changes"
```

---

## 🌟 Recognition

### Contributors

We recognize all contributors in our README and maintain a contributors list. Contributors are acknowledged for:

- **Code contributions** (features, fixes, improvements)
- **Documentation** improvements
- **Bug reports** and testing
- **Design** contributions
- **Community support**

### Contribution Levels

| Level | Criteria | Recognition |
|-------|----------|-------------|
| **🌱 First-time** | First merged PR | Welcome badge |
| **🔧 Regular** | 3+ merged PRs | Contributor badge |
| **⭐ Core** | 10+ PRs + ongoing involvement | Core contributor status |
| **🏆 Maintainer** | Significant contributions + community involvement | Maintainer access |

---

## ❓ Getting Help

### 💬 Communication Channels

- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: [your.email@example.com] for private matters

### 📚 Resources

- **[React Documentation](https://reactjs.org/docs)**
- **[TypeScript Handbook](https://www.typescriptlang.org/docs)**
- **[TensorFlow.js Guide](https://www.tensorflow.org/js/guide)**
- **[Tailwind CSS Docs](https://tailwindcss.com/docs)**
- **[Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)**

### 🤝 Mentorship

New contributors can request mentorship for:

- **First-time contributions**
- **Complex features**
- **Best practices guidance**
- **Code review feedback**

---

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

## 🙏 Thank You

Thank you for taking the time to contribute! Every contribution, no matter how small, helps make this project better for everyone.

**Happy coding!** 🚀

---

<div align="center">

**Questions? Feel free to reach out!**

[📧 Email](ayushsingh21109@gmail.com) • [🐙 GitHub](https://github.com/AyushSingh360) • [🐦 Twitter](#)

</div>
