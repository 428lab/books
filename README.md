# books.428lab.net

## コンテンツリソースの配置

### 書籍データ
```
\src\content\book\[書籍ID連番].json
```

### 各書籍用画像
```
\public\images\book\[書籍ID連番]
```

## 書籍データに関して

JSON内で完結できるようにする。

## 画像ファイルに関して

書籍ごとのディレクトリ以下、以下の命名規則でファイルが必要。

| ファイル名 | 必須 | 画像の内容                        | 
| ---------- | ---- | --------------------------------- | 
| cover.webp | ✅   | 表紙画像                          | 
| main-pc.webp | ✅   | トップメインビジュアル用                          | 
| main-sp.webp | ✅   | トップメインビジュアル用                          | 
| ogp.jpg    |      | 個別にOGP画像を設定する場合は必要 | 
| 1.webp～   |      | 1からの連番で、サンプル画像       | 

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
