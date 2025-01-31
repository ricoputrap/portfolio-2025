---
title: "Git Hooks with Husky"
description: "How to use Git Hooks with Husky to enforce code quality and consistency in your project."
date: "2025-02-01"
---

## Introduction

Git Hooks are scripts that are automatically executed by Git at specific points in the Git workflow. They allow you to enforce code quality and consistency in your project.

## Tutorial

Let's get started!

1. **Install Husky**

   ```bash
   pnpm install husky --save-dev
   ```

2. **Create a Husky Configuration File**

   ```bash
   npx husky init
   ```

3. **Add a Pre-Commit Hook**

   ```bash
   npx husky add .husky/pre-commit "pnpm lint"
   ```

   This will add a pre-commit hook that will run `pnpm lint` before each commit.

4. **Add a Pre-Push Hook**

   ```bash
   npx husky add .husky/pre-push "pnpm test"
   ```

   This will add a pre-push hook that will run `pnpm test` before each push.

5. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "Add Husky configuration"
   ```

   This will commit your changes and run the pre-commit hook.

6. **Push Your Changes**

   ```bash
   git push
   ```

   This will push your changes and run the pre-push hook.

## Adding Commit Message Hook

1. **Install Commitlint**

   ```bash
   pnpm add --save-dev @commitlint/{cli,config-conventional}
   ```

2. **Create a Commitlint Configuration File**

   ```bash
   touch .commitlintrc.cjs
   echo "module.exports = { extends: ['@commitlint/config-conventional'] }" > .commitlintrc.cjs
   ```

3. **Add a Commit Message Hook**

  ```bash
  touch .husky/commit-msg
  echo "npx --no-install commitlint --edit $1" > .husky/commit-msg
  ```

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "chore: add commit message hook"
   ```

   This will commit your changes and run the commit message hook.