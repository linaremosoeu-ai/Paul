# Contributing to Umbrella

Thank you for considering contributing to Umbrella! This document provides guidelines and instructions for contributing.

## Code of Conduct

Please be respectful and constructive in all interactions.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported
2. Create an issue with:
   - Clear title describing the problem
   - Detailed description of the bug
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable
   - Environment details (OS, .NET version, etc.)

### Suggesting Features

1. Check if the feature has been suggested
2. Create an issue with:
   - Clear title for the feature
   - Detailed description of the feature
   - Use cases and benefits
   - Possible implementation approach

### Submitting Pull Requests

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Write or update tests
5. Run tests: `dotnet test` (backend) or `npm test` (frontend)
6. Commit with clear messages: `git commit -m 'Add amazing feature'`
7. Push to branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

## Development Setup

### Backend

```bash
cd backend
dotnet restore
dotnet build
dotnet test
```

### Frontend

```bash
cd frontend
npm install
npm run dev
npm test
```

## Code Style

### C# (.NET)
- Follow Microsoft's C# coding conventions
- Use meaningful variable and method names
- Add XML documentation for public members
- Keep methods focused and small

### TypeScript/React
- Use functional components with hooks
- Use TypeScript for type safety
- Follow React best practices
- Add comments for complex logic

## Testing

- Write tests for new features
- Maintain or improve code coverage
- All tests must pass before PR merge

### Backend Tests

```bash
cd backend
dotnet test
```

### Frontend Tests

```bash
cd frontend
npm test
```

## Documentation

- Update README.md for user-facing changes
- Update API documentation for API changes
- Add comments for complex logic
- Update CHANGELOG.md

## Commit Messages

Use clear, descriptive commit messages:

```
Add anomaly detection service

Implement anomaly detection using statistical analysis
of metrics. Detects deviations from baseline using
Z-score calculation.

Closes #123
```

## Pull Request Process

1. Update documentation
2. Add tests for new functionality
3. Ensure all tests pass
4. Update CHANGELOG.md
5. Request review from maintainers
6. Address feedback
7. Squash commits if requested

## Coding Guidelines

### Backend (.NET)

- Use dependency injection for services
- Write async code where appropriate
- Use nullable reference types
- Follow SOLID principles
- Write meaningful tests

### Frontend (React/TypeScript)

- Use functional components
- Use React hooks
- Keep components focused
- Write meaningful prop types
- Test user interactions

## Project Structure

- `frontend/`: React/Next.js application
- `backend/`: .NET Core API
- `k8s/`: Kubernetes manifests
- `docs/`: Documentation
- `scripts/`: Deployment scripts

## Areas for Contribution

- New data connectors/integrations
- Improved anomaly detection algorithms
- Frontend UI enhancements
- Documentation improvements
- Bug fixes
- Performance optimizations
- Test coverage

## Questions?

- Check existing issues and discussions
- Read documentation
- Create a discussion post
- Email support@umbrella.io

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

Thank you for contributing to Umbrella! 🌂
