# Contributing to Design Studio

Thank you for your interest in contributing to Design Studio! This document provides guidelines and information for contributors.

---

## 🎯 How to Contribute

### 1. Report Bugs
If you find a bug, please open an issue with:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, browser, Node.js version)

### 2. Suggest Features
We welcome feature suggestions! Please open an issue with:
- Clear description of the feature
- Use case and motivation
- Mockups or examples if possible
- Research backing if available

### 3. Improve Documentation
Documentation improvements are always welcome:
- Fix typos or unclear explanations
- Add examples or tutorials
- Improve code comments
- Translate documentation

### 4. Add Research
Design Studio is research-backed. We welcome:
- User testing data
- Accessibility studies
- Performance benchmarks
- Conversion optimization research
- Eye-tracking studies

### 5. Create Examples
Help others learn by creating:
- Case studies (before/after transformations)
- Code examples
- Tutorials
- Best practices guides

### 6. Fix Issues
Look for issues labeled:
- `good first issue` - Great for new contributors
- `help wanted` - We need community help
- `bug` - Confirmed bugs
- `enhancement` - Feature requests

---

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Setup Steps

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/design-studio.git
   cd design-studio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Make your changes**
   - Follow the coding standards
   - Add tests if applicable
   - Update documentation

6. **Test your changes**
   ```bash
   npm test
   npm run lint
   ```

7. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   # or
   git commit -m "fix: fix your bug description"
   ```

8. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

9. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template

---

## 📝 Coding Standards

### Commit Messages
We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(dials): add WILD level for experimental designs
fix(lint): correct contrast ratio calculation
docs(readme): add installation instructions
research(colors): add color psychology data
```

### Code Style
- Use consistent indentation (2 spaces)
- Use meaningful variable names
- Add comments for complex logic
- Follow existing patterns in the codebase

### File Organization
```
feature/
├── index.ts          # Main entry point
├── types.ts          # TypeScript types
├── utils.ts          # Utility functions
├── constants.ts      # Constants
└── __tests__/        # Tests
    └── index.test.ts
```

---

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Tests
- Test public APIs
- Test edge cases
- Test error conditions
- Use descriptive test names

```typescript
describe('Dial System', () => {
  it('should map CALM level to numeric 1-2', () => {
    expect(mapLevelToNumeric('CALM')).toEqual([1, 2]);
  });

  it('should prevent WILD density with WILD variance', () => {
    expect(validateDialCombination('WILD', 'WILD', 'BALANCED')).toBe(false);
  });
});
```

---

## 📚 Documentation Standards

### Writing Style
- Use clear, concise language
- Include code examples
- Add screenshots for visual changes
- Use proper markdown formatting

### Documentation Structure
```
docs/
├── getting-started.md    # Quick start guide
├── concepts/             # Core concepts
├── guides/               # How-to guides
├── reference/            # API reference
├── examples/             # Code examples
└── contributing.md       # This file
```

### Adding Examples
When adding examples:
1. Include complete, runnable code
2. Add comments explaining key points
3. Show both input and output
4. Include common pitfalls

---

## 🔬 Adding Research

Design Studio is research-backed. When adding research:

### Research Data Format
```markdown
## Research Title

### Overview
Brief description of the research.

### Methodology
- Sample size: n=1,000
- Duration: 3 months
- Methods: A/B testing, eye-tracking, surveys

### Key Findings
1. Finding 1 with data
2. Finding 2 with data
3. Finding 3 with data

### Implications
How this affects design decisions.

### References
- Source 1 (link)
- Source 2 (link)
```

### Research Quality Standards
- **Sample size:** Minimum n=100 for statistical significance
- **Duration:** Minimum 2 weeks for meaningful data
- **Methods:** Use established research methods
- **Peer review:** Have others review your research
- **Reproducibility:** Provide enough detail for replication

---

## 🎨 Design Guidelines

### Design Tokens
When adding design tokens:
- Use consistent naming conventions
- Include light and dark mode variants
- Provide semantic names (not just color names)
- Include accessibility notes

```css
/* ✅ Good */
--color-text-primary: #1a1a1a;
--color-text-secondary: #666666;
--color-surface-primary: #ffffff;

/* ❌ Bad */
--color-black: #1a1a1a;
--color-gray: #666666;
--color-white: #ffffff;
```

### Component Guidelines
When creating components:
- Include all interactive states (hover, active, focus, disabled)
- Support keyboard navigation
- Include proper ARIA attributes
- Test with screen readers

---

## 🐛 Bug Reports

### Bug Report Template
```markdown
## Bug Description
Clear description of the bug.

## Steps to Reproduce
1. Step 1
2. Step 2
3. Step 3

## Expected Behavior
What should happen.

## Actual Behavior
What actually happens.

## Environment
- OS: [e.g., macOS 13.0]
- Browser: [e.g., Chrome 120]
- Node.js: [e.g., 18.17.0]
- Design Studio version: [e.g., 1.0.0]

## Screenshots
If applicable, add screenshots.

## Additional Context
Any other relevant information.
```

---

## 💡 Feature Requests

### Feature Request Template
```markdown
## Feature Description
Clear description of the feature.

## Use Case
Why this feature is needed.

## Proposed Solution
How you think it should work.

## Alternatives Considered
Other approaches you considered.

## Additional Context
Any other relevant information.
```

---

## 📋 Pull Request Process

### Before Submitting
1. ✅ Tests pass (`npm test`)
2. ✅ Linting passes (`npm run lint`)
3. ✅ Documentation updated
4. ✅ Commit messages follow conventions
5. ✅ No breaking changes (or documented)

### PR Template
```markdown
## Description
Brief description of changes.

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Research addition
- [ ] Example addition

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No breaking changes

## Screenshots
If applicable, add screenshots.

## Related Issues
Closes #123
```

### Review Process
1. **Automated checks** run on PR submission
2. **Maintainer review** within 48 hours
3. **Feedback** if changes needed
4. **Merge** after approval

---

## 🏷️ Issue Labels

We use these labels to organize issues:

- `bug` - Confirmed bugs
- `enhancement` - Feature requests
- `documentation` - Documentation improvements
- `good first issue` - Great for new contributors
- `help wanted` - We need community help
- `research` - Research-related issues
- `example` - Example-related issues
- `question` - Questions about the project
- `wontfix` - Issues we won't address
- `duplicate` - Duplicate issues

---

## 🎉 Recognition

### Contributors
All contributors are recognized in:
- `CONTRIBUTORS.md` file
- Release notes
- GitHub contributors page

### Special Recognition
- **Research Contributors:** Added to research credits
- **Example Contributors:** Featured in examples directory
- **Core Contributors:** Added to maintainers team

---

## 📞 Getting Help

### Questions
- **GitHub Discussions:** For general questions
- **GitHub Issues:** For bugs and feature requests
- **Email:** For private inquiries

### Resources
- [Documentation](README.md)
- [Examples](examples/)
- [Research](research/)
- [Changelog](CHANGELOG.md)

---

## 📜 Code of Conduct

### Our Pledge
We are committed to providing a welcoming and inclusive experience for everyone.

### Our Standards
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

### Enforcement
Instances of abusive, harassing, or otherwise unacceptable behavior may be reported to the project maintainers.

---

## 🙏 Thank You

Thank you for contributing to Design Studio! Your contributions help make AI-generated designs better for everyone.

**Together, we can eliminate generic AI slop and create truly premium interfaces.**