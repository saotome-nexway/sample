# git-practice

Git の練習用リポジトリです（HTML / CSS / JS のみ）。

`index.html` をブラウザで開くと、簡単なカウンターが動きます。

## 練習のアイデア

1. `index.html` の文言を変えて `git add` → `git commit`
2. `git switch -c feature/color` でブランチを作り、`style.css` の色を変更してコミット
3. `main` に戻って `git merge feature/color`
4. 2つのブランチで同じ行を変更して、わざとコンフリクトを起こして解決する
5. `git log --oneline --graph` で履歴を確認する
