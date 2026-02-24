# @rootui/tabs
[![Github repository](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/rootui-org/root-ui) [![Npm monthly downloads](https://img.shields.io/npm/dm/@rootui/tabs)](https://www.npmjs.com/package/@rootui/tabs) [![Npm monthly downloads](https://img.shields.io/badge/live-demo-green)](https://root-ui.com/primitives/tabs) [![Root UI X profile](https://img.shields.io/twitter/follow/rootui_)](https://x.com/rootui_)


Tabs organize content into multiple sections and allow users to navigate between them.

 - 📖 Docs: [Root UI tabs docs](https://root-ui.com/primitives/tabs)
 - 📄 Source: [Github repository](https://github.com/rootui-org/root-ui)
 - 🐛 Report an issue: [Open an issue](#)
 - 📦 Package: [@rootui/tabs](https://www.npmjs.com/package/@rootui/tabs)
 - 🔗 Reference: [React Aria docs](https://react-aria.adobe.com/Tabs)

## 🧬 Anatomy
```tsx
<Tabs>
  <Tabs.List>
    <Tabs.Tab></Tabs.Tab>
  </Tabs.List>
  <Tabs.Contents>
    <Tabs.Content></Tabs.Content>
  </Tabs.Contents>
</Tabs>
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
npm install @rootui/tabs
# or
yarn add @rootui/tabs
# or
pnpm add @rootui/tabs
# or
bun add @rootui/tabs
```

#### Option 2: 🏗️ Manual
Check the [Root UI tabs docs](https://root-ui.com/docs/primitives/tabs#installation).

## 💻 Usage
```tsx
import { Tabs } from "@rootui/tabs";

export default function Page() {
  return (
    <Tabs>
      <Tabs.List>
        <Tabs.Tab id="tab1">
          Tab 1
        </Tabs.Tab>
        <Tabs.Tab id="tab2">
          Tab 2
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Contents>
        <Tabs.Content id="tab1">
          Content 1
        </Tabs.Content>
        <Tabs.Content id="tab2">
          Content 2
        </Tabs.Content>
      </Tabs.Contents>
    </Tabs>
  )
}
```
## 📃 API Reference
Check the [Root UI tabs docs](https://root-ui.com/docs/primitives/tabs#api-reference).

## 🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request on the  [GitHub repository](#).

Steps to Contribute:

1.  Fork the repository. 🍴
2.  Create a new branch for your feature or bugfix. 🌿
3.  Commit your changes. 💾
4.  Push your branch and submit a pull request. 🚀

## 📜 License
This project is licensed under the MIT License. See the  [LICENSE](https://github.com/rootui-org/root-ui/blob/main/LICENSE.md)  file for details.