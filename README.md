# holbertonschool-web_react

> Building modern, type-safe web interfaces — one component at a time.

---

## 📄 Description

This repository contains all the projects I completed as part of the Web React track at Holberton School. It covers the foundations of modern front-end development, starting with TypeScript — the strongly-typed superset of JavaScript that makes large-scale web applications actually maintainable. Each project directory is self-contained with its own configuration, dependencies, and tasks, progressively building up the skills needed to develop robust, production-grade React applications. Think of it as a journey from "what even is a type?" to "I will not ship untyped code."

---

## 🎯 Learning Objectives

Through the projects in this repository, I developed a solid understanding of TypeScript and its role in modern web development. I learned how to define and use basic types, interfaces, classes, and functions with full type safety, and I am now able to structure complex codebases using namespaces and declaration merging. I understand how to work with the DOM in a typed environment, apply generic types where needed, and use ambient namespaces to integrate third-party libraries cleanly. I also explored nominal typing techniques using brand properties, which taught me how to make TypeScript's structural type system enforce stricter distinctions between similar types. Overall, I am now able to write TypeScript code that compiles cleanly with zero warnings or errors and is ready to scale into full React applications.

---

## 📁 Repository Structure

```
holbertonschool-web_react/
└── TypeScript/
    ├── task_0/
    │   ├── js/
    │   │   └── main.ts
    │   ├── package.json
    │   ├── .eslintrc.js
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── task_1/
    │   ├── js/
    │   │   └── main.ts
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── task_2/
    │   ├── js/
    │   │   └── main.ts
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── task_3/
    │   ├── js/
    │   │   ├── main.ts
    │   │   ├── interface.ts
    │   │   ├── crud.js
    │   │   └── crud.d.ts
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    ├── task_4/
    │   ├── js/
    │   │   └── subjects/
    │   │       ├── Teacher.ts
    │   │       ├── Subject.ts
    │   │       ├── Cpp.ts
    │   │       ├── React.ts
    │   │       └── Java.ts
    │   ├── package.json
    │   └── tsconfig.json
    ├── task_5/
    │   ├── js/
    │   │   └── main.ts
    │   ├── package.json
    │   ├── tsconfig.json
    │   └── webpack.config.js
    └── README.md
```

---

## ✨ Projects / Contents

### TypeScript

- A deep dive into TypeScript fundamentals and advanced features: interfaces, classes, generics, namespaces, declaration merging, ambient types, and nominal typing — all compiled with Webpack and tested with Jest.
- **Main technologies:** TypeScript, Webpack, Jest, ESLint (`@typescript-eslint`)

---

## 🛠️ Technologies Used

This repository is currently centered around TypeScript (v4.9.5), compiled to ES5 using Webpack (v5) with `ts-loader`. Testing is handled by Jest with `ts-jest`, and code quality is enforced via ESLint with the `@typescript-eslint` plugin. As the repository grows with additional React projects, it will expand to include React, JSX, and related tooling — but for now, it's all about getting the types right.

---

## ⚙️ Prerequisites

- **OS:** Ubuntu 18.04 LTS or later
- **Node.js:** v14 or later
- **npm:** v6 or later
- **TypeScript:** v4.9.5 (installed per project via `npm install`)
- **Allowed editors:** `vi`, `vim`, `emacs`, Visual Studio Code
- All TypeScript files must compile with **zero warnings or errors**

---

## ▶️ Usage

Clone the repository and navigate into it:

```bash
git clone https://github.com/GwenP88/holbertonschool-web_react
cd holbertonschool-web_react
```

Each project lives in its own directory with its own dependencies. To explore a project, navigate into it and install dependencies:

```bash
cd TypeScript/task_0
npm install
npm run build       # compile with Webpack
npm run start-dev   # start the development server
npm run test        # run Jest tests
```

Repeat for each `task_X` directory. Each one is fully self-contained — no cross-directory dependencies to worry about.

---

## 🤝 Contributions & Acknowledgements

Thank you to the Holberton School instructors and fellow students who made debugging TypeScript compiler errors at 2am feel slightly less lonely. Special mention to the TypeScript documentation, which is genuinely excellent, and to everyone who ever answered a Stack Overflow question about `noImplicitAny`. You know who you are.

---

## 👤 Author

**Gwenaelle PICHOT**
- Student at Holberton School
- Track: Web React
- Repository: `holbertonschool-web_react`
- GitHub: [@GwenP88](https://github.com/GwenP88)