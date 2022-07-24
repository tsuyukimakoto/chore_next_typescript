# chore_next_typescript

```
$ yarn create next-app --typescript
$ yarn add -D @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

_app.tsx の ComponentをChakraProviderで包む

## Style Props

https://chakra-ui.com/docs/styled-system/style-props

## Components

https://chakra-ui.com/docs/components

## storybook

storybookのinstall

reactのプロジェクトフォルダで実行する

```
$ npx sb init
```

## swr

テストでアクセスする先

- lambda/function.py を AWS Lambdaに環境変数 TZ=Asia/Tokyo などを設定する
- httpのAPI Gatewayにlambdaを統合し、CORSの設定をする
  - Access-Control-Allow-Origin: *
  - Access-Control-Allow-Headers: content-type
  - Access-Control-Allow-Methods: GET,POST,OPTIONS
