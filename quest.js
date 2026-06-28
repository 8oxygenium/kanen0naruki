/* =========================================================
   コインのなる木クエスト  /quest/  共通スクリプト
   純粋な静的JS。フレームワーク非依存。
   ========================================================= */

(function () {
  "use strict";

  /* --- モバイルナビ開閉 --- */
  var toggle = document.querySelector(".q-navtoggle");
  var nav = document.querySelector(".q-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* --- 現在ページのナビをハイライト --- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".q-nav a").forEach(function (a) {
    var target = a.getAttribute("href").split("/").pop();
    if (target === here) a.classList.add("is-active");
  });

  /* --- フッターの年号 --- */
  var year = document.getElementById("q-year");
  if (year) year.textContent = new Date().getFullYear();
})();

/* =========================================================
   データの差し込み口（将来 Supabase に置き換える想定の seam）

   この静的モックでは、表示内容は各HTMLに直接書いています
   （JS無効でも読める／検索エンジンにも見える状態を優先）。
   実装フェーズでは、下の QUEST_DEMO と同じ形のデータを
   Supabase から取得して描画に差し替えます。

   ポイントは必ず台帳方式：残高を直接持たず、付与/保留/確定/交換の
   行（entries）の合計として残高を出す。
   ========================================================= */
window.QUEST_DEMO = {
  profile: { name: "なる木の旅人", job: "冒険者", level: 3, expPercent: 62 },

  /* ゲーム内ゴールド（交換不可）と 交換ポイント（条件付き交換可）は別台帳 */
  goldBalance: 1240,

  /* 交換ポイント台帳。balance はクライアントで合計してはいけない値ではなく、
     サーバ確定値を表示する想定（ここでは参考表示）。 */
  pointLedger: [
    { date: "06-28", reason: "デイリーログイン", delta: 1,   status: "確定" },
    { date: "06-28", reason: "今日のクイズ 正解", delta: 3,  status: "確定" },
    { date: "06-28", reason: "記事チェック",       delta: 1,  status: "確定" },
    { date: "06-27", reason: "無料登録ミッション", delta: 300, status: "保留" },
    { date: "06-25", reason: "無料登録ミッション", delta: 300, status: "確定" },
    { date: "06-20", reason: "ギフト交換 申請",   delta: -500, status: "申請中" },
  ],

  missions: [
    { key: "login",  label: "毎日ログイン",        reward: "+1P",      status: "確定" },
    { key: "quiz",   label: "今日のクイズ",        reward: "+1〜3P",   status: "確定" },
    { key: "read",   label: "記事を1本チェック",   reward: "+1P",      status: "確定" },
    { key: "signup", label: "無料登録ミッション",  reward: "+300P",    status: "保留" },
    { key: "dungeon",label: "ダンジョン1回探索",   reward: "ゴールド",  status: "交換不可" },
  ],

  rewards: [
    { name: "ギフト交換（準備中）", cost: 500, note: "手動承認・最低交換額あり" },
  ],
};
