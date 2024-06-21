## Installation

```
npm ci
```


## Start Dev Server

```
npm run dev
```

http://localhost:3000/

<br />


## モックサーバーについて
デフォルトではエンドポイントの https://odyssey-lift-off-rest-api.herokuapp.com/ を参照して api call するが、開発時に msw を有効にして立ち上げることで、モックレスポンスを返せる
※ モックデータは .mocks 内に定義する

### 有効にする手順
1. env ファイルを開く
2. `NEXT_PUBLIC_API=http://localhost:9090` に書き換える
3. `npm run dev:mock` で立ち上げる

<br />

## Scaffolder
新規でコンポーネントを追加する時は以下のコマンドから自動生成する

```
npm run gen:co
```

対話形式で質問されるので、答えていくと指定ディレクトリにコンポーネント一式が作成される


```
? Please select the output destination directory. (Use arrow keys or type to search)
❯ src
  src/api
  src/app
```

```
🐶 Generated 4 files!

     ✔ src/ui/Hoge/Hoge.tsx
     ✔ src/ui/Hoge/index.ts
     ✔ src/ui/Hoge/Hoge.stories.tsx
     ✔ src/ui/Hoge/Hoge.module.css
```

<br />

## Storybook
```
npm run dev:storybook
```

http://localhost:6006/



<br />

## Test
```
npm run test
```

