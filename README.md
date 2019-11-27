# sample_vue_cordova_banbuser

## 概要

cordovaでライブ配信を行うサンプルアプリです

https://bambuser.com  
の機能を使ってます

公式の開発ドキュメントのサンプルがサンプルがIonicとAngularだったので、  
https://bambuser.com/docs/  
CordovaとVueで作ったものがこのリポジトリです  

## 前提

https://bambuser.com  
に登録済みで、APIキーとアプリケーションIDを取得している必要があります

## 環境

- Vue: 3.4.1
- Cordova: 9.0.0
- cordova-plugin-bambuser: 0.9.10

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
