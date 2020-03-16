# Vue(+Vuex) + Typescript でつくる認証まわりのテンプレート

実践で使うための土台やリファレンスとして使って頂ければ。

- ```store/modules/UserStore/```が認証周りを担当するVuexモジュールです（こちらががキモ）。
- ```app_template/```はUserStoreを利用したテンプレートアプリです。


[デモはこちら](https://mutsuyuki.github.io/vue-firebase-auth-template/)

## 0. Firebaseの設定

- メール＆パスワードでのログインの有効化
- Databaseを作成しておく（コレクションは空の状態でよい）


## 1. Firebaseのアプリ情報を変更（自分のアプリのに）。

```
 // store/common/DatabaseConnector.tsのconnect関数内
 
    firebase.initializeApp({
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: "",
        appId: ""
    });
```


## 2. 以下のコマンドでインストール～起動

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```


## 別プロジェクトでライブラリとして使うとき

##### 入れてなければ以下のモジュールを入れる
- ```yarn add firebase``` 
- ```yarn add vuex-module-decorators -D``` 


##### メインのプロジェクトの```tsconfig.json```に以下を追記
（定義ファイルの重複エラーを回避）
```
  "exclude": [
    "node_modules",
    "クローンした場所/**/shims-tsx.d.ts",
    "クローンした場所/**/shims-vue.d.ts"
  ]
```

##### メインのプロジェクトの```main.ts```で初期化処理を入れる
```
(async () => {
    // データベース接続
    const connectResult = await DatabaseConnector.connect();
    if (connectResult.isError) {
        alert(connectResult.errorMessage);
        return;
    }

    await UserStore.autoSignInIfEnable();

  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');
})();
```


