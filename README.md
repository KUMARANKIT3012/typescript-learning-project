# 🚀 TypeScript Learning Project

<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![Status](https://img.shields.io/badge/Status-Learning-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**Mastering TypeScript from Basics to Advanced**

[About](#-about) • [Topics](#-topics-covered) • [Getting Started](#-getting-started) • [Project Structure](#-project-structure)

</div>

---

## 📖 About

Welcome to my **TypeScript Learning Project**! 📘 This repository documents my journey in learning TypeScript, from basic types to advanced concepts. Each folder contains well-organized code examples, explanations, and best practices.

### 🎯 Learning Objectives
- ✅ Master TypeScript fundamentals
- ✅ Understand type system and type safety
- ✅ Learn advanced TypeScript features
- ✅ Build type-safe applications
- ✅ Follow TypeScript best practices

---

## 📚 Topics Covered

### 🔤 Basic Types
| Topic | Description | Status |
|-------|-------------|--------|
| `BasicTypes/` | Primitives, Arrays, Tuples, Enums | ✅ |

**Contents:**
- String, Number, Boolean
- Arrays and Tuples
- Enums (Numeric & String)
- Any, Unknown, Never types
- Void and Undefined

### 🔧 Functions
| Topic | Description | Status |
|-------|-------------|--------|
| `Functions/` | Function Types, Parameters, Overloading | ✅ |

**Contents:**
- Function declarations and expressions
- Optional and default parameters
- Rest parameters
- Function overloading
- Arrow functions with types

### 🎨 Interfaces & Type Aliases
| Topic | Description | Status |
|-------|-------------|--------|
| `Interfaces&Type_Aliases/` | Interfaces, Type Aliases, Differences | ✅ |

**Contents:**
- Interface declarations
- Type aliases
- Interface vs Type
- Extending interfaces
- Index signatures

### 🏗️ Classes & Objects
| Topic | Description | Status |
|-------|-------------|--------|
| `Classes&Objects/` | OOP in TypeScript | ✅ |

**Contents:**
- Class declarations
- Constructors and properties
- Access modifiers (public, private, protected)
- Readonly properties
- Inheritance and abstract classes
- Static members

### 🔐 Type Inference & Annotation
| Topic | Description | Status |
|-------|-------------|--------|
| `Type_Inference&Type_annotation/` | Type System Fundamentals | ✅ |

**Contents:**
- Type inference basics
- Explicit type annotations
- Best practices for type annotations
- When to use inference vs annotation

### 🛡️ Type Assertion
| Topic | Description | Status |
|-------|-------------|--------|
| `Type_Assertion/` | Type Casting and Assertions | ✅ |

**Contents:**
- as syntax
- Angle-bracket syntax
- Type assertions vs type casting
- Safe type assertions

### 🚦 Type Guards
| Topic | Description | Status |
|-------|-------------|--------|
| `Type_guards/` | Runtime Type Checking | ✅ |

**Contents:**
- typeof type guards
- instanceof type guards
- Custom type guards
- in operator
- Discriminated unions

### 💎 Generics
| Topic | Description | Status |
|-------|-------------|--------|
| `Generics/` | Generic Types and Functions | ✅ |

**Contents:**
- Generic functions
- Generic classes
- Generic constraints
- Generic interfaces
- Multiple type parameters

### 📦 Modules
| Topic | Description | Status |
|-------|-------------|--------|
| `Modules/` | Import/Export, Module Systems | ✅ |

**Contents:**
- ES6 modules
- Import and export
- Default exports
- Namespace imports
- Module resolution

---

## 🌟 Key Features

### 📝 Code Quality
- **Type Safety**: Strict type checking enabled
- **Clean Code**: Well-organized and commented
- **Best Practices**: Following TypeScript guidelines
- **Modern Syntax**: ES6+ features with TypeScript

### 🎯 Learning Approach
- Progressive difficulty levels
- Hands-on examples for each concept
- Real-world use cases
- Comprehensive comments

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher
- **TypeScript**: v4.0.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/KUMARANKIT3012/typescript-learning-project.git
cd typescript-learning-project
```

2. **Install dependencies**
```bash
npm install
```

3. **Compile TypeScript**
```bash
npm run build
```

4. **Run examples**
```bash
npm start
```

### Development Mode

Watch mode for automatic compilation:
```bash
npm run watch
```

---

## 📁 Project Structure

```
typescript-learning-project/
│
├── 📁 BasicTypes/
│   └── Examples of primitive and complex types
│
├── 📁 Functions/
│   └── Function types and signatures
│
├── 📁 Interfaces&Type_Aliases/
│   └── Interface and type alias examples
│
├── 📁 Classes&Objects/
│   └── OOP concepts in TypeScript
│
├── 📁 Type_Inference&Type_annotation/
│   └── Type system fundamentals
│
├── 📁 Type_Assertion/
│   └── Type casting and assertions
│
├── 📁 Type_guards/
│   └── Runtime type checking
│
├── 📁 Generics/
│   └── Generic programming examples
│
├── 📁 Modules/
│   └── Module system and imports
│
├── 📄 tsconfig.json
├── 📄 package.json
├── 📄 app.ts
└── 📄 README.md
```

---

## 💻 Usage Examples

### Basic Type Example
```typescript
// String, Number, Boolean
let name: string = "TypeScript";
let version: number = 5.0;
let isAwesome: boolean = true;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: Array<string> = ["a", "b", "c"];

// Tuples
let person: [string, number] = ["Alice", 30];
```

### Interface Example
```typescript
interface User {
    id: number;
    name: string;
    email: string;
    age?: number; // Optional property
}

const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com"
};
```

### Generic Function Example
```typescript
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

---

## 📊 Learning Progress

### Completed ✅
- [x] Basic Types
- [x] Functions
- [x] Interfaces & Type Aliases
- [x] Classes & Objects
- [x] Type Inference & Annotation
- [x] Type Assertion
- [x] Type Guards
- [x] Generics
- [x] Modules

### In Progress 🔄
- [ ] Advanced Types
- [ ] Decorators
- [ ] Utility Types

### Upcoming 🔜
- [ ] React with TypeScript
- [ ] Node.js with TypeScript
- [ ] Testing with TypeScript
- [ ] TypeScript Design Patterns

---

## 🛠️ Configuration

### tsconfig.json
Key compiler options:
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

---

## 📖 Resources

### Official Documentation
- [TypeScript Official Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Learning Resources
- TypeScript Deep Dive
- Effective TypeScript
- TypeScript Tutorial for Beginners

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome! Feel free to:
- Report issues
- Suggest improvements
- Share learning resources

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Connect

**Ankit Kumar**

[![GitHub](https://img.shields.io/badge/GitHub-KUMARANKIT3012-181717?style=for-the-badge&logo=github)](https://github.com/KUMARANKIT3012)

---

<div align="center">

### 🌟 "Type safety leads to better code!" 🌟

**Keep Learning • Keep Typing • Keep Building**

---

### ⭐ Star this repository to support my TypeScript learning journey!

**Made with ❤️ and strong types**

</div>
