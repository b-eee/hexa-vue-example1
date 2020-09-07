# Vueサンプルの実行手順


## 対象

hexa-vue-example1

https://github.com/b-eee/hexa-vue-example1



## 手順

Hexabase のサンプルアプリケーションを準備して、フロントエンドからアクセスする手順です。


### あらかじめ用意するもの

- node.js
- npm

- バックエンドの設定方法について、スタートガイド( https://docs.hexabase.com/starter_guide/ja )で、基本操作を把握してください。


### バックエンド側の準備

1. システム管理者から、Hexabaseへの招待メールを受け取る。
   メールから、ユーザー登録画面にアクセスして、ユーザー名とパスワードを登録する

   これで、Hexabaseの新しいワークスペースにアクセスできます。

2. 画面右上にある＋ボタンから「新しいアプリケーションの作成」ポップアップを開く

3. アプリケーション名(英語、日本語)を入力する（例：simple-example1）
4. Examplesテンプレートから「hexa-simple-example1」を選択する
5. 「作成」ボタンを押下する

6. しばらくするとアプリケーションが作成され、 「新しいアプリケーション」の横に「simple-example1」（指定したアプリケーション名）が表示される。
（もしも表示されない場合は、左上のワークスペース選択から再度ワークスペースを選択しなおすと表示される）

7. 「TODOサンプルデータベース」を含む「simple-example1」アプリケーションが作成されたことを確認する。



### Vueサンプルの準備

1. Githubからサンプルコードを取得する

```
git clone git@github.com:b-eee/hexa-vue-example1.git
```

2. 実行に必要なパッケージの取得

```
npm install
```

### アプリケーションの実行

```
npm run serve
```


- Local:   http://localhost:8080/
- Network: http://192.168.1.8:8080/



### ログインする

1. ブラウザで、Network: http://192.168.1.8:8080/ にアクセスする
2. バックエンド側で登録したメールアドレスとパスワードでログインする


## 設定ファイルについて

アプリケーションの動作に必要な設定を、バックエンドの実行環境にあわせて修正してください。

設定ファイルは、以下の通りです。

- .env
- src/constants/datastore.js

### .env
| 値 | 意味 | 説明 |
|---|---|---|
| VUE_APP_HEXACLOUD_URL | hexabase APIのURL | 
| VUE_APP_HEXACLOUD_PATH | hexabase APIのURL以降の固定パス |
| VUE_APP_APPLICATION_ID | hexabase アプリケーションのID | ワークスペースに複数のアプリケーションがある場合に設定します
| VUE_APP_DATASTORE_ID | hexabase データベースのID | アプリケーションに複数のデータベースがある場合に設定します

### src/constants/datastore.js
| 値 | 意味 | 説明 |
|---|---|---|
| DATASTORE_TITLE | サンプルアプリケーションで表示するデータベースのタイトル | フロントエンドアプリケーションに合わせて設定します
| FIELDS | データベースの画面項目ID |Hexabaseの設定に応じて変更できます
| OPTIONS.CATEGORY | 選択肢の値とID | Hexabaseの設定に応じて変更できます
| STATUS_ACTIONS | ステータスとステータスアクションのIDと名前 | Hexabaseの設定に応じて変更できます


### 設定値について

- hexabase APIのURL：バックエンド実行環境の「 https://xx.hexabase.com 」に対して「 https://xx-api.hexabase.com 」となります

- アプリケーションID：application_idのdisplay_idに対応します。
- データベースID：datastore_idのdisplay_idに対応する。
