# bii-labs

## Environment
node 10.16.3
npm 6.9.0
yarn 1.22.4

## Usage
1. install dev dependencies (install一次就好)
  ```
  yarn
  ```
2. start dev server (每次使用都要)
  ```
  yarn start 
  ```

3. 編寫sass/*.sass檔，gulp會自動編譯進dist/*.css檔；
    編寫js/*.js檔，gulp會自動minify後存進dist/*.min.js。
    之後所有的*.html皆是引入dist/~裡的檔案。


## Folders

## /src
放各個html檔案，裡面的js, css檔案要去引入dist/~裡的。

### /js
放各個js原始碼，編譯後則會被放在/dist/js。

### /sass
放各個sass原始碼，編譯後則會被放在/dist/css。

### /dist
放各個編譯好的js, css檔案。

### /design
放各頁圖檔

### /gulpfile.js
關於編譯sass, js的規則






