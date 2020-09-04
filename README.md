# hexa-vue-example1
本リポジトリは、株式会社Hexabaseが提供するhexabase APIを利用したサンプルアプリケーションです。

本アプリケーションは、Vue.jsを使用しています。

## セットアップ
本アプリケーションを実行するには、以下の手順を実行してください。

### ソースコードの取得
```
git clone git@github.com:b-eee/hexa-vue-example1.git
```

### 実行に必要なパッケージの取得
```
npm install
```

### 設定ファイルの修正
アプリケーションの動作に必要な設定を、実行環境にあわせて修正してください。

修正が必要な設定ファイルは、以下の通りです。
- .env
- src/constants/datastore.js

#### .env
| 値 | 意味 | 説明 |
|---|---|---|
| VUE_APP_HEXACLOUD_URL | hexabase APIのURL | 修正の必要はありません
| VUE_APP_HEXACLOUD_PATH | hexabase APIのURL以降の固定パス | 修正の必要はありません
| VUE_APP_APPLICATION_ID | hexabase アプリケーションのID | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます
| VUE_APP_DATASTORE_ID | hexabase データベースのID | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます

#### src/constants/datastore.js
| 値 | 意味 | 説明 |
|---|---|---|
| DATASTORE_TITLE | サンプルアプリケーションで表示するデータベースのタイトル | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます
| FIELDS | データベースの画面項目ID | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます
| OPTIONS.CATEGORY | 選択肢の値とID | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます
| STATUS_ACTIONS | ステータスとステータスアクションのIDと名前 | 修正の必要はありませんが、Hexabaseの設定に応じて変更できます


### アプリケーションの実行
```
npm run serve
```
