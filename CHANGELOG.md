# 0.1.0 (2021-06-21)

### Bug Fixes

- `EmbedCode` now reflects the updated code
  ([#32](https://github.com/toyai/python-playground/issues/32))
  ([f57dce4](https://github.com/toyai/python-playground/commit/f57dce4f6de3dcda0149accd760b8dd3344a7c36)),
  closes [#29](https://github.com/toyai/python-playground/issues/29)
  [#30](https://github.com/toyai/python-playground/issues/30)
- check netlify build is from PR with string `true` or `false`
  ([6f779a0](https://github.com/toyai/python-playground/commit/6f779a05b2cee1765deca95ad8cff8e9df2152da))
- do not show API docs in production
  ([#61](https://github.com/toyai/python-playground/issues/61))
  ([53a627f](https://github.com/toyai/python-playground/commit/53a627f9d6dde2ebee90554bba7334bd07299e91))
- enable linewrapping for CodeMirror
  ([#60](https://github.com/toyai/python-playground/issues/60))
  ([47f6be7](https://github.com/toyai/python-playground/commit/47f6be7d09399e9cb4e3e1dc674b8bf30915e1f1))
- remove 50px from height of cm-editor (fix
  [#31](https://github.com/toyai/python-playground/issues/31))
  ([#47](https://github.com/toyai/python-playground/issues/47))
  ([f0d942f](https://github.com/toyai/python-playground/commit/f0d942fd9c1371de7b13ef357131a028fc742b2a))
- show completions for keywords, not index
  ([#18](https://github.com/toyai/python-playground/issues/18))
  ([e1f98ef](https://github.com/toyai/python-playground/commit/e1f98ef8c95c0f3ecbc9e88ea13feb98d80fa460))
- sort codemirror extensions
  ([#17](https://github.com/toyai/python-playground/issues/17))
  ([94440db](https://github.com/toyai/python-playground/commit/94440dbc1beabe590c58f29036828bbbb4e623f7))

### Features

- add code editor pane, use CodeMirror 6
  ([#2](https://github.com/toyai/python-playground/issues/2))
  ([cbd9246](https://github.com/toyai/python-playground/commit/cbd92464d4b9cc4a98a046c426464999c7e40361))
- add custom them based on github light theme
  ([#25](https://github.com/toyai/python-playground/issues/25))
  ([30ca357](https://github.com/toyai/python-playground/commit/30ca357c4f944561cb8edd47106d46f1de2973dd))
- add embeddable code button & edit on playground link for embedding in `iframe`
  ([#16](https://github.com/toyai/python-playground/issues/16))
  ([82e48a2](https://github.com/toyai/python-playground/commit/82e48a28359b4f0528b1a62950272e9b305b5239)),
  closes [#8](https://github.com/toyai/python-playground/issues/8)
- add initial backend API
  ([#10](https://github.com/toyai/python-playground/issues/10))
  ([c0d071d](https://github.com/toyai/python-playground/commit/c0d071d68e6ae6d23ede246009385432d93f4d7d))
- add mobile view layout
  ([#46](https://github.com/toyai/python-playground/issues/46))
  ([0a9a71c](https://github.com/toyai/python-playground/commit/0a9a71c8ac77848d504ec3922655f4d96d4f79ed))
- add result pane ([#36](https://github.com/toyai/python-playground/issues/36))
  ([f658ca9](https://github.com/toyai/python-playground/commit/f658ca9d36a76c967eb74e9d652dc647bc7c102c))
- add run icon and button
  ([#34](https://github.com/toyai/python-playground/issues/34))
  ([6bda55f](https://github.com/toyai/python-playground/commit/6bda55f6c89337fcaa3526cecebb251de9143054))
- catch the traceback and response it
  ([#57](https://github.com/toyai/python-playground/issues/57))
  ([22bc499](https://github.com/toyai/python-playground/commit/22bc49959c97d007fdc73baec5831861c3f0d5e7))
- download from Blob obj
  ([#41](https://github.com/toyai/python-playground/issues/41))
  ([e4e8313](https://github.com/toyai/python-playground/commit/e4e8313e4c42495ac89df55d08d1e995420cab40))
- install extra requirements from requirements-extra.txt
  ([#65](https://github.com/toyai/python-playground/issues/65))
  ([5f84f88](https://github.com/toyai/python-playground/commit/5f84f884a836ec0866cad897a485a360f52fbce2))
- log api docs in dev mode
  ([#59](https://github.com/toyai/python-playground/issues/59))
  ([e00c373](https://github.com/toyai/python-playground/commit/e00c373ec695c3f8357202d8513176bcbc510f01))
- open a public file from GitHub
  ([#39](https://github.com/toyai/python-playground/issues/39))
  ([f8c9b28](https://github.com/toyai/python-playground/commit/f8c9b289f6c8a76052dfbf7a537636dd7dfed174))
- send and run code on backend
  ([#42](https://github.com/toyai/python-playground/issues/42))
  ([fdd52ef](https://github.com/toyai/python-playground/commit/fdd52efe7e90cbc23eafe5e4f5dd2a294e1aff1c))
- set frontend and backend url from env var
  ([#58](https://github.com/toyai/python-playground/issues/58))
  ([05fb3ba](https://github.com/toyai/python-playground/commit/05fb3ba73e11c79024059307102e9edb2d9f4499))
- show python version playground uses to run
  ([#52](https://github.com/toyai/python-playground/issues/52))
  ([d752279](https://github.com/toyai/python-playground/commit/d7522795d4699cb9bb82173435bf8b52aeda7a5d))
- **codemirror:** add codeFolding extension
  ([#38](https://github.com/toyai/python-playground/issues/38))
  ([e3890ab](https://github.com/toyai/python-playground/commit/e3890ab41dedacfa83a2631727f405a202ffa520))
- unique url for every code
  ([#15](https://github.com/toyai/python-playground/issues/15))
  ([141109d](https://github.com/toyai/python-playground/commit/141109dead1c8a1868b7cdb5b352d2fe2166b615)),
  closes [#3](https://github.com/toyai/python-playground/issues/3)
