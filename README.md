# sample_vue_cordova_banbuser

## 概要

cordovaでライブ配信を行うサンプルアプリです

## 利用プラグイン

https://github.com/bambuser/cordova-plugin-bambuser

### 初期セットアップ

yarn install

### 設定変更

以下の２ファイルのdata部分のAPIキーとアプリケーションIDを変更する

sample_vue_cordova_banbuser/src/views/Broadcast.vue
sample_vue_cordova_banbuser/src/views/Player.vue

### Webサーバ起動

yarn run serve

### モバイル起動準備

cd src-cordova  
cordova platforms add ios  
cordova platforms add android  

## ios起動

cordova build ios  
Xcode>Run

### Android起動
cordova run android
