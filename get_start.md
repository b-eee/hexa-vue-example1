# Vue サンプルの実行手順

## 対象

hexa-vue-example1

https://github.com/b-eee/hexa-vue-example1

## 手順

Hexabase のサンプルアプリケーションを準備して、フロントエンドからアクセスする手順です。

### 必要なツール

- node.js
- npm

### バックエンドを準備する

1. システム管理者から、Hexabase への招待メールを受け取る。
   メールから、ユーザー登録画面にアクセスして、ユーザー名とパスワードを登録する

   これで、Hexabase の新しいワークスペースにアクセスできます。

2. 画面右上にある「＋」ボタンで「新しいアプリケーションの作成」ポップアップを開く

3. アプリケーション名(英語、日本語)を入力する（例：simple-example1）
4. Examples テンプレートから「hexa-simple-example1」を選択する
5. 「作成」ボタンを押下する

6. しばらくするとアプリケーションが作成されて、「新しいアプリケーション」の横に、指定したアプリケーション名（例：simple-example1）が表示される。

もしも表示されない場合は、左上のワークスペース選択から再度ワークスペースを選択し直してください。

7. 「TODO サンプルデータベース」を含む「simple-example1」アプリケーションが作成されたことを確認する。

### Vue サンプルを準備する

1. Github からサンプルコードを取得する

```
git clone git@github.com:b-eee/hexa-vue-example1.git
```

2. 実行に必要なパッケージの取得

```
npm install
```

### アプリケーションを実行する

```
npm run serve
```

- Local: http://localhost:8080/
- Network: http://192.168.1.8:8080/

### ログインする

1. ブラウザで、Network: http://192.168.1.8:8080/ にアクセスする
2. バックエンド側で登録したメールアドレスとパスワードでログインする

## バックエンドの設定方法

- バックエンドの設定方法について、[開発ガイド](https://b-eee.github.io/development_guide/)で、基本操作を把握してください。

## 設定ファイルについて

アプリケーションの動作に必要な設定は、バックエンドの実行環境にあわせて修正してください。

設定ファイルは、以下の通りです。

- .env
- src/constants/datastore.js

### .env

| 値                     | 意味                               | 説明                                                                                                                          |
| ---------------------- | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| VUE_APP_HEXACLOUD_URL  | hexabase API の URL                | hexabase API の URL：バックエンド実行環境の「 https://xxx.hexabase.com 」に対して「 https://xxx-api.hexabase.com 」となります |
| VUE_APP_HEXACLOUD_PATH | hexabase API の URL 以降の固定パス |
| VUE_APP_APPLICATION_ID | hexabase アプリケーションの ID     | ワークスペースに複数のアプリケーションがある場合に設定します。application_id の display_id を指定します                       |
| VUE_APP_DATASTORE_ID   | hexabase データベースの ID         | アプリケーションに複数のデータベースがある場合に設定します。datastore_id の display_id を指定します                           |

### src/constants/datastore.js

| 値               | 意味                                                     | 説明                                               |
| ---------------- | -------------------------------------------------------- | -------------------------------------------------- |
| DATASTORE_TITLE  | サンプルアプリケーションで表示するデータベースのタイトル | フロントエンドアプリケーションに合わせて設定します |
| FIELDS           | データベースの画面項目 ID                                | Hexabase の設定に応じて変更できます                |
| OPTIONS.CATEGORY | 選択肢の値と ID                                          | Hexabase の設定に応じて変更できます                |
| STATUS_ACTIONS   | ステータスとステータスアクションの ID と名前             | Hexabase の設定に応じて変更できます                |
