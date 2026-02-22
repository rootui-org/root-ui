# @rootui/popover
[![Github repository](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/rootui-org/root-ui) [![Npm monthly downloads](https://img.shields.io/npm/dm/@rootui/popover)](https://www.npmjs.com/package/@rootui/popover) [![Npm monthly downloads](https://img.shields.io/badge/live-demo-green)](https://root-ui.com/primitives/popover) [![Root UI X profile](https://img.shields.io/twitter/follow/rootui_)](https://x.com/rootui_)


Dialog overlay for focused user interactions and important content.

 - 📖 Docs: [Root UI popover docs](https://root-ui.com/primitives/popover)
 - 📄 Source: [Github repository](https://github.com/rootui-org/root-ui)
 - 🐛 Report an issue: [Open an issue](#)
 - 📦 Package: [@rootui/popover](https://www.npmjs.com/package/@rootui/popover)
 - 🔗 Reference: [React Aria docs](https://react-aria.adobe.com/Popover)

## 🧬 Anatomy
```tsx
<Popover>
  <Popover.Trigger>
    Click me to open the popover
  </Popover.Trigger>
  <Popover.Content>
    Hello, I'm the content!
  </Popover.Content>
</Popover>
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
npm install @rootui/popover
# or
yarn add @rootui/popover
# or
pnpm add @rootui/popover
# or
bun add @rootui/popover
```

#### Option 2: ⬛ Shadcn CLI
```bash
npx shadcn@latest add @rootui/popover
# or
yarn shadcn@latest add @rootui/popover
# or
pnpm dlx shadcn@latest add @rootui/popover
# or
bunx --bun shadcn@latest add @rootui/popover
```

#### Option 3: 🏗️ Manual
Check the [Root UI popover docs](https://root-ui.com/docs/primitives/popover#installation).

## 💻 Usage
```tsx
import { Popover } from "@rootui/popover";

export default function Page() {
  return (
    <Popover>
      <Popover.Trigger>I'm the trigger</Popover.Trigger>
      <Popover.Content>I'm the content</Popover.Content>
    </Popover>
  )
}
```
## 📃 API Reference
Check the [Root UI popover docs](https://root-ui.com/docs/primitives/popover#api-reference).

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the  [GitHub repository](#).

Steps to Contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bugfix. 🌿
3.  Commit your changes. 💾
4.  Push your branch and submit a pull request. 🚀

## 📜 License
This project is licensed under the MIT License. See the  [LICENSE](https://github.com/rootui-org/root-ui/blob/main/LICENSE.md)  file for details.