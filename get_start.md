# Vueサンプルの実行手順


## 対象

hexa-vue-example1

https://github.com/b-eee/hexa-vue-example1



## 手順

Hexabase のアプリケーションに、ToDoサンプルデータベースを追加して、フロントエンドからアクセスする手順です。


### あらかじめ用意するもの

- node.js
- npm

- バックエンドの設定方法について、スタートガイド(https://docs.hexabase.com/starter_guide/ja)で、基本操作を理解しておく。


### バックエンド側の準備

1. システム管理者から、Hexabaseへの招待メールを受け取る。
   メールから、ユーザー登録画面にアクセスして、ユーザー名とパスワードを登録する

   これで、Hexabaseの新しいワークスペースにアクセスできる。


2. 「新しいアプリケーション」を選択する

3. 「データベース」>「新しいデータベースを作成する」
   「サンプル雛形から作成」>「TODO管理サンプル」を選んで「データベースを追加」

4. TODO管理サンプルのURLをメモしておく

```
https://xx.hexabase.com/pj/abc123/
```

このTODO管理サンプルが実行環境になる。


5. 「新しいアプリケーション」> 右側の「⁝」> 「アプリケーションの設定」を選択する。
  基本設定にある「アプリケーションID」をメモする。

6. 「TODOサンプル」> 右側の「⁝」> 「設定」を選択する。
　基本設定にある「データベースID」をメモする。



※ アプリケーションIDとデータベースID

アプリケーションIDは、application_idのdisplay_idに対応する。
データベースIDは、datastore_idのdisplay_idに対応する。

```
[
  {
    "application_id": "5f2b6828bca03100063c082f",
    "name": "新しいアプリケーション",
    "display_id": "APP-iEyRlO17",
    "datastores": [
      {
        "datastore_id": "5f2b8457c2417d00077a7e4d",
        "name": "TODOサンプル",
        "display_id": "Db-gVm1r6iX"
      }
    ]
  }
]
```


### Vueサンプルの準備

1. Githubからサンプルコードを取得する

```
git clone git@github.com:b-eee/hexa-vue-example1.git
```

2. 実行に必要なパッケージの取得

```
npm install
```


3. 実行環境(TODO管理サンプルのURL)に合わせて、ファイルを修正する

.env
| 値 | 意味 | 説明 |
|---|---|---|
| VUE_APP_HEXACLOUD_URL | hexabase APIのURL | 
| VUE_APP_HEXACLOUD_PATH | hexabase APIのURL以降の固定パス | 修正の必要はありません
| VUE_APP_APPLICATION_ID | hexabase アプリケーションのID | 実行環境にあわせて修正
| VUE_APP_DATASTORE_ID | hexabase データベースのID | 実行環境にあわせて修正


- hexabase APIのURL：実行環境の「https://xx.hexabase.com」に対して「https://xx-api.hexabase.com」となる


### アプリケーションの実行

```
npm run serve
```

- Local:   http://localhost:8080/
- Network: http://192.168.1.8:8080/



### ログインする

1. ブラウザで、Network: http://192.168.1.8:8080/ にアクセスする
2. 実行環境に登録したメールアドレスとパスワードでログインする


