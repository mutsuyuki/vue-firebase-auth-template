# Vue(+Vuex) + Typescript でつくる認証まわりのテンプレート

Authユーザー＋Firestore内にusersコレクションを作成するようになっています。

実践で使うための土台やリファレンスとして使って頂ければ。


[デモはこちら](https://mutsuyuki.github.io/vue-firebase-auth-template/)

## 0. Firebaseの設定

- メール＆パスワードでのログインの有効化
- Databaseを作成しておく（コレクションは空の状態でよい）


## 1. Firebaseのアプリ情報を変更（自分のアプリのものに）。

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


