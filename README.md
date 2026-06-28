# コインのなる木クエスト

ポイ活・節約・副収入が学べるRPG風メディア（静的サイト・ビルド不要）。

- 「本物のポイント還元サイト」ではなく、ポイ活・節約・副収入・アフィリエイトの知識を
  RPG気分のクイズと読み物で学べる学習メディア。
- ポイント（学習ポイント）は**学びの進捗・称号を表すゲーム内の記録**。
  現金・電子マネー・ギフト券・暗号資産・NFTとは交換できず、**現時点では交換サービスを提供しない**。
- 付与は**台帳方式**（残高を持たず、付与・確定を全行記録＝「学習ログ」）。
- 広告（AdSense等）の閲覧・クリックや、Amazon/A8/もしも/楽天/eBay 経由購入では付与しない。
- ゲーム内ゴールド（交換不可）と学習ポイント（ゲーム内の進捗）は**完全分離**。
- 現金換金・暗号資産・NFT・有料ガチャ・換金ランダム報酬なし。

## 構成

純粋な HTML / CSS / JS。フレームワーク・ビルド工程なし。

| ファイル | 内容 |
|---|---|
| `index.html` | トップ（LP） |
| `about.html` | 遊び方 |
| `missions.html` | クエスト一覧 |
| `articles.html` / `article-001〜010.html` | 読み物（読書クエスト・記事10本） |
| `quiz.html` | クイズ（知識クエスト・全10問） |
| `ledger.html` | 学習ログ |
| `mypage.html` | マイページ |
| `rewards.html` | 準備室（将来の交換構想・準備中） |
| `terms.html` / `point-policy.html` / `privacy.html` / `contact.html` | 利用規約・学習ポイントについて・プライバシー・運営者情報 |
| `quest.css` / `quest.js` | 共通スタイル・スクリプト（将来 Supabase 差し込み口あり） |

## デプロイ

Cloudflare Pages（Connect to Git）。ビルドなしの静的配信。

- Framework preset: **None**
- Build command: （空）
- Build output directory: **`/`**

## 公開前メモ

- 全ページの `<meta name="robots" content="noindex">` は本公開時に外す。
- 運営者名・連絡先などの未確定事項は `TODO.md` を参照（ページ内に `【】` は残さない）。
- 公開前チェックは `CHECKLIST.md` を参照。
