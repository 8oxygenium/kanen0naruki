# コインのなる木クエスト

遊べるポイ活RPGサイト（静的サイト・ビルド不要）。

- 課金で勝つRPGではなく、毎日の無料ミッションと広告/アフィリエイト成果で
  ポイントをコツコツ貯める「遊べるポイ活クエスト」。
- ポイントは**台帳方式**（残高を持たず、付与・保留・確定・交換を全行記録）。
- ゲーム内ゴールド（交換不可）と交換ポイント（条件付き交換可）は**完全分離**。
- 初期は現金換金・暗号資産・NFT・有料ガチャ・換金ランダム報酬なし。

## 構成

純粋な HTML / CSS / JS。フレームワーク・ビルド工程なし。

| ファイル | 内容 |
|---|---|
| `index.html` | トップ（LP） |
| `about.html` | 遊び方 |
| `missions.html` | クエスト一覧 |
| `ledger.html` | ポイント台帳 |
| `mypage.html` | マイページ |
| `rewards.html` | 交換所（準備中） |
| `terms.html` / `point-policy.html` / `privacy.html` / `contact.html` | 規約・運営者情報（仮） |
| `quest.css` / `quest.js` | 共通スタイル・スクリプト（将来 Supabase 差し込み口あり） |

## デプロイ

Cloudflare Pages（Connect to Git）。ビルドなしの静的配信。

- Framework preset: **None**
- Build command: （空）
- Build output directory: **`/`**

## 公開前メモ

- 全ページの `<meta name="robots" content="noindex">` は本公開時に外す。
- 規約・運営者情報の `【】` プレースホルダ（運営者名・連絡先・最低交換額・有効期限）を確定する。
