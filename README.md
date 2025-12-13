# 📊 Next.js × React-ApexCharts × Storybook サンプル

このリポジトリは、**Next.js** で **react-apexcharts**（チャート作成用ライブラリ）を使って作成したグラフを、**Storybook** 上で確認できるサンプルです。  
React-ApexCharts や Storybook の利用方法・基本設定を学ぶのに最適な構成になっています。

---

## 🚀 使用している主なライブラリ

### 🧩 Next.js
Reactベースのフレームワークで、サーバーサイドレンダリングや静的サイト生成に対応しています。  
開発体験が優れており、パフォーマンスの高いWebアプリを簡単に構築できます。  
また、APIルートやルーティング機能が標準でサポートされています。

### 📈 React ApexCharts
ApexChartsのReactラッパーで、インタラクティブで美しいグラフを簡単に作成できます。  
棒グラフ・折れ線・円グラフなど、豊富なチャートタイプに対応。  
データバインディングも容易で、動的な可視化に適しています。

### 📚 Storybook
UIコンポーネントを単体で開発・テスト・ドキュメント化できるツールです。  
コンポーネントの状態を分離して確認でき、デザインシステム構築にも役立ちます。  
Reactなど多数のフレームワークに対応しています。

---

## 🛠️ 利用方法

1. リポジトリをクローン  
   ```bash
   git clone https://github.com/omegalfacode/react-apexcharts-sample.git
   cd your-repo-name
   ```

2. 依存パッケージをインストール
   ```bash
   npm install
   ```

3. 開発サーバーを起動
   ```bash
   npm run dev
   ```

4. ブラウザで http://localhost:3000/
にアクセスすると、
グラフが表示されたページを確認できます。

5. Storybook を起動
   ```bash
   npm run storybook
   ```
   ブラウザで 
   http://localhost:6006/
   を開くと、Storybook でチャートコンポーネントを確認できます。