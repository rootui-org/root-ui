# @rootui/accordion

[![Github repository](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/rootui-org/root-ui) [![Npm monthly downloads](https://img.shields.io/npm/dm/@rootui/accordion)](https://www.npmjs.com/package/@rootui/accordion) [![Npm monthly downloads](https://img.shields.io/badge/live-demo-green)](https://root-ui.com/primitives/accordion) [![Root UI X profile](https://img.shields.io/twitter/follow/rootui_)](https://x.com/rootui_)

The Accordion component lets users show and hide sections of related content on a page. It supports both single and multiple expanded items (also called Disclosure).

 - 📖 Docs: [Root UI accordion docs](https://root-ui.com/primitives/accordion)
 - 📄 Source: [Github repository](https://github.com/rootui-org/root-ui)
 - 🐛 Report an issue: [Open an issue](#)
 - 📦 Package: [@rootui/accordion](https://www.npmjs.com/package/@rootui/accordion)
 - 🔗 Reference: [React Aria docs](https://react-aria.adobe.com/DisclosureGroup)

## 🧬 Anatomy
```tsx
<Accordion>
  <Accordion.Item>
    <Accordion.Trigger></Accordion.Trigger>
    <Accordion.Content></Accordion.Content>
  </Accordion.Item>
</Accordion>
```
## 🛠️ Installation
### 1. 📌 Prerequisite
#### 1.1. ⚙️ Install dependecies
Check the [getting started guide](https://root-ui.com/docs/getting-started) for more info.
If you haven't installed the dependecies yet, then run this command:
```bash
npm install react-aria-components tw-animate-css
# or
yarn add react-aria-components tw-animate-css
# or
pnpm add react-aria-components tw-animate-css
# or
bun add react-aria-components tw-animate-css
```
#### 1.2. 🎨 Choose a theme
You need to pick a theme from the [official Root UI website](https://root-ui.com/playground).


### 2. 🍉 Install component
#### Option 1: 📦 Package
```bash
npm install @rootui/accordion
# or
yarn add @rootui/accordion
# or
pnpm add @rootui/accordion
# or
bun add @rootui/accordion
```

#### Option 2: ⬛ Shadcn CLI
```bash
npx shadcn@latest add @rootui/accordion
# or
yarn shadcn@latest add @rootui/accordion
# or
pnpm dlx shadcn@latest add @rootui/accordion
# or
bunx --bun shadcn@latest add @rootui/accordion
```

#### Option 3: 🏗️ Manual
Check the [Root UI accordion docs](https://root-ui.com/docs/primitives/accordion#installation).

## 💻 Usage
```tsx
'use client'
import { Accordion } from "@rootui/accordion";
export default function Page() {
  return (
    <Accordion>
      <Accordion.Item>
        <Accordion.Trigger>Header here</Accordion.Trigger>
        <Accordion.Trigger>Content here</Accordion.Trigger>
      </Accordion.Item>
    </Accordion>
  )
}
```
## 📃 API Reference
Check the [Root UI accordion docs](https://root-ui.com/docs/primitives/accordion#api-reference).

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the  [GitHub repository](#).

Steps to Contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bugfix. 🌿
3.  Commit your changes. 💾
4.  Push your branch and submit a pull request. 🚀

## 📜 License
This project is licensed under the MIT License. See the  [LICENSE](https://github.com/rootui-org/root-ui/blob/main/LICENSE.md)  file for details.