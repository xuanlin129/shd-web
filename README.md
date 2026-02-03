# Vite React Web

這是一個使用 React + Vite 構建的 Web 應用程序模板，集成了常用的開發工具和庫。

## 🛠 技術棧

此項目使用了以下主要技術：

- **核心框架**: [React](https://react.dev/) v18
- **構建工具**: [Vite](https://vitejs.dev/)
- **路由管理**: [React Router](https://reactrouter.com/) v7
- **UI 組件庫**: [Ant Design](https://ant.design/)
- **樣式處裡**: [Styled Components](https://styled-components.com/) & [Styled Icons](https://styled-icons.js.org/)
- **狀態管理**: [Reconnect.js](https://github.com/m-reset/reconnect.js) (輕量級狀態管理)
- **代碼規範**: ESLint

## 📂 項目結構

```
src/
├── assets/          # 靜態資源
├── components/      # 公共組件 (Header, Footer, Spinner等)
├── layouts/         # 頁面佈局組件
├── pages/           # 頁面組件 (Home, About, Contact)
├── router/          # 路由配置
├── stores/          # 全局狀態管理 (Reconnect.js)
├── styles/          # 全局樣式
└── utils/           # 工具函數
```

## 🚀 快速開始

### 1. 安裝依賴

確保您的環境中已安裝 Node.js。

```bash
npm install
```

### 2. 啟動開發服務器

```bash
npm run dev
```

應用程序將在 [http://localhost:5173](http://localhost:5173) 上運行。

### 3. 構建生產版本

```bash
npm run build
```

構建後的資源將位於 `dist` 目錄中。

### 4. 預覽生產構建

```bash
npm run preview
```

## 📜 可用腳本

- `npm run dev`: 啟動開發模式
- `npm run build`: 構建生產版本
- `npm run lint`: 運行 ESLint 檢查代碼
- `npm run preview`: 預覽構建後的應用
