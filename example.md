---
# Specify theme, './' means using the local directory theme
theme: ./

# Presentation metadata, will be automatically passed to layout components
# This information will be displayed on the cover
reporter: "Zhang San"
department: "Tech Department"
title: "Slidev - A Presentation Tool for Developers"

# Specify the layout of this page as cover
layout: cover
---

# Slidev Theme Template

A presentation tool built for developers

---

# What is Slidev?

Slidev is a presentation creation and delivery tool designed for developers. It has the following features:

- 📝 **Text-based** - Focus on content creation using Markdown, beautify styles later.
- 🎨 **Themed** - Themes can be easily shared and reused as npm packages.
- 🧑‍💻 **Developer Friendly** - Built-in code highlighting, live coding, and auto-completion.
- 🤹 **Interactive** - Embed Vue components to enrich your presentations.
- 🎥 **Recording Support** - Built-in recording and camera view.
- 📤 **Easy Export** - Export as PDF, PPTX, PNG, or even a deployable SPA.
- 🛠 **Highly Customizable** - Almost anything possible on the web can be done in Slidev.

<br>

Learn more on the official site: [Why choose Slidev?](https://sli.dev/guide/why)

---

# Navigation & Shortcuts

Hover your mouse over the bottom left corner to see the navigation control panel.

## Common Shortcuts

| Key                                               | Function            |
| ------------------------------------------------- | ------------------- |
| <kbd>space</kbd> / <kbd>→</kbd>                   | Next animation/slide|
| <kbd>shift</kbd> + <kbd>space</kbd> / <kbd>←</kbd>| Previous animation/slide |
| <kbd>↑</kbd>                                      | Previous slide      |
| <kbd>↓</kbd>                                      | Next slide          |

---

# Code Demo

Slidev can use code blocks directly and provides syntax highlighting!

```ts
interface User {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
}

function updateUser(id: number, update: Partial<User>) {
  const user = getUser(id);
  const newUser = { ...user, ...update };
  saveUser(id, newUser);
}
```