# Vue(+Vuex) + Typescript でつくる認証まわりのテンプレート

実践で使うための土台やリファレンスとして使って頂ければ。

UserStoreが認証周りを担当するVuexモジュール（こちらががキモ）になります。
app_templateはUserStoreを利用したテンプレートアプリです。


[デモはこちら](https://mutsuyuki.github.io/vue-firebase-auth-template/)


## 1. Firebaseのアプリ情報を変更（自分のアプリのに）。

```
 // UserStore/UserStore.tsのinitメソッド内
 
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

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your unit tests
```
yarn run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
