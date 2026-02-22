# @rootui/tooltip
[![Github repository](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/rootui-org/root-ui) [![Npm monthly downloads](https://img.shields.io/npm/dm/@rootui/tooltip)](https://www.npmjs.com/package/@rootui/tooltip) [![Npm monthly downloads](https://img.shields.io/badge/live-demo-green)](https://root-ui.com/primitives/tooltip) [![Root UI X profile](https://img.shields.io/twitter/follow/rootui_)](https://x.com/rootui_)


A Tooltip can be used to display some content when user hovers on another element.

 - 📖 Docs: [Root UI tooltip docs](https://root-ui.com/primitives/tooltip)
 - 📄 Source: [Github repository](https://github.com/rootui-org/root-ui)
 - 🐛 Report an issue: [Open an issue](#)
 - 📦 Package: [@rootui/tooltip](https://www.npmjs.com/package/@rootui/tooltip)
 - 🔗 Reference: [React Aria docs](https://react-aria.adobe.com/Tooltip)

## 🧬 Anatomy
```tsx
<Tooltip>
  <Tooltip.Trigger></Tooltip.Trigger>
  <Tooltip.Content></Tooltip.Content>
</Tooltip>
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
npm install @rootui/tooltip
# or
yarn add @rootui/tooltip
# or
pnpm add @rootui/tooltip
# or
bun add @rootui/tooltip
```

#### Option 2: ⬛ Shadcn CLI
```bash
npx shadcn@latest add @rootui/tooltip
# or
yarn shadcn@latest add @rootui/tooltip
# or
pnpm dlx shadcn@latest add @rootui/tooltip
# or
bunx --bun shadcn@latest add @rootui/tooltip
```

#### Option 3: 🏗️ Manual
Check the [Root UI tooltip docs](https://root-ui.com/docs/primitives/tooltip#installation).

## 💻 Usage
```tsx
import { Tooltip } from "@rootui/tooltip";

export default function Page() {
  return (
    <Tooltip>
      <Tooltip.Trigger>I'm the trigger</Tooltip.Trigger>
      <Tooltip.Content>I'm the content</Tooltip.Content>
    </Tooltip>
  )
}
```
## 📃 API Reference
Check the [Root UI tooltip docs](https://root-ui.com/docs/primitives/tooltip#api-reference).

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the  [GitHub repository](#).

Steps to Contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bugfix. 🌿
3.  Commit your changes. 💾
4.  Push your branch and submit a pull request. 🚀

## 📜 License
This project is licensed under the MIT License. See the  [LICENSE](https://github.com/rootui-org/root-ui/blob/main/LICENSE.md)  file for details.