# TypeScript Learning Project

A comprehensive TypeScript learning project covering fundamental concepts and advanced features.

## Topics Covered

### Basic Types
- Primitive types (number, string, boolean)
- Arrays and Tuples
- Enums
- Any, Unknown, Void, Null, Undefined, Never

### Interfaces and Type Aliases
- Defining interfaces
- Using interfaces to define object shapes
- Extending interfaces
- Type aliases
- Intersection types

### Classes and Objects
- Class definition
- Constructors
- Access modifiers (public, private, protected)
- Readonly properties
- Optional properties
- Parameter properties
- Getters and setters
- Static members
- Abstract classes and methods

## Project Structure

```
├── Learning/
│   └── Basic.ts                    # Basic type examples
├── Interfaces&Type_Aliases/
│   └── app.ts                      # Interface and type alias examples
├── Classes&Objects/
│   ├── App.ts                      # Main class examples
│   ├── Constructors.ts             # Constructor patterns
│   └── getters&setters.ts          # Property access patterns
├── tsconfig.json                   # TypeScript configuration
├── package.json                    # Project metadata
└── README.md                       # This file
```

## Configuration

This project uses modern TypeScript configuration with:
- ES modules (`"type": "module"` in package.json)
- Node.js module resolution (`"module": "nodenext"`)
- Strict type checking enabled
- Verbatim module syntax for better compatibility

## Getting Started

1. Install TypeScript globally (if not already installed):
   ```bash
   npm install -g typescript
   ```

2. Compile TypeScript files:
   ```bash
   tsc
   ```

3. Run individual examples:
   ```bash
   node dist/Learning/Basic.js
   ```

## Key Learning Points

- Type safety catches errors at compile time
- Interfaces provide contract-based programming
- Classes offer object-oriented programming patterns
- Proper module configuration is crucial for larger projects
- TypeScript's strict mode catches common JavaScript pitfalls

---

*This project represents my journey learning TypeScript fundamentals and best practices.*