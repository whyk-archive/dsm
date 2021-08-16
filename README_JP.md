# dsm
> Deno Scripts Manager

コマンド内引数に対応したスクリプト管理・実行ツール。  
試験的に作成したため、プロダクションレベルではありません。

## インストール
``` bash
$ deno install --name dsm --allow-run --allow-read --allow-write https://github.com/windchime-yk/dsm/raw/master/mod.ts
```

※もし`dsm: command not found`と出た場合、以下のテキストを`.bash_profile`に追加
``` bash
export PATH="/Users/username/.deno/bin:$PATH"
```

## 使い方
``` bash
$ dsm init
$ dsm version:deno # サンプルスクリプト
```

## 依存関係
- [exec](https://deno.land/x/exec)

## テスト
``` bash
$ git clone git@github.com:windchime-yk/dsm.git
$ cd path/to/dsm
$ deno run --allow-run --allow-read --allow-write cli/mod.ts init
$ deno run --allow-run --allow-read --allow-write cli/mod.ts version:deno
```

## インスパイア
[denon](https://deno.land/x/denon)
