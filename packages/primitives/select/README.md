# @rootui/select
[![Github repository](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/rootui-org/root-ui) [![Npm monthly downloads](https://img.shields.io/npm/dm/@rootui/select)](https://www.npmjs.com/package/@rootui/select) [![Npm monthly downloads](https://img.shields.io/badge/live-demo-green)](https://root-ui.com/primitives/select) [![Root UI X profile](https://img.shields.io/twitter/follow/rootui_)](https://x.com/rootui_)


A select displays a collapsible list of options and allows a user to select one of them or multiple of them.

 - 📖 Docs: [Root UI select docs](https://root-ui.com/primitives/select)
 - 📄 Source: [Github repository](https://github.com/rootui-org/root-ui)
 - 🐛 Report an issue: [Open an issue](#)
 - 📦 Package: [@rootui/select](https://www.npmjs.com/package/@rootui/select)
 - 🔗 Reference: [React Aria docs](https://react-aria.adobe.com/Select)

## 🧬 Anatomy
```tsx
<Select>
  <Select.Item></Select.Item>
</Select>
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
npm install @rootui/select
# or
yarn add @rootui/select
# or
pnpm add @rootui/select
# or
bun add @rootui/select
```

#### Option 2: ⬛ Shadcn CLI
```bash
npx shadcn@latest add @rootui/select
# or
yarn shadcn@latest add @rootui/select
# or
pnpm dlx shadcn@latest add @rootui/select
# or
bunx --bun shadcn@latest add @rootui/select
```

#### Option 3: 🏗️ Manual
Check the [Root UI select docs](https://root-ui.com/docs/primitives/select#installation).

## 💻 Usage
```tsx
import { Select } from "@rootui/select";

export default function Page() {
  return (
    <Select>
      <Select.Item>my first item</Select.Item>
      <Select.Item>my second item</Select.Item>
    </Select>
  )
}
```
## 📃 API Reference
Check the [Root UI select docs](https://root-ui.com/docs/primitives/select#api-reference).

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the  [GitHub repository](#).

Steps to Contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bugfix. 🌿
3.  Commit your changes. 💾
4.  Push your branch and submit a pull request. 🚀

## 📜 License
This project is licensed under the MIT License. See the  [LICENSE](https://github.com/rootui-org/root-ui/blob/main/LICENSE.md)  file for details.