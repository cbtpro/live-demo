# 如何在Lightly中构建和运行 Vue-TypeScript 项目

## 打开终端

您可以在底部点击【终端】标签打开终端界面

## 构建和运行

输入以下命令来构建和运行项目：

```bash
# 构建项目
yarn

# 运行项目
yarn dev
```

## 预览项目

项目运行后将会启动服务，系统检测到端口会提示添加，您可以点击左侧文件树 -> “网络”标签 -> 端口预览按钮 打开访问地址。

## 了解更多

- 查看我们的产品文档([https://lightly.teamcode.com/docs/introduction](https://lightly.teamcode.com/docs/introduction))，了解更多信息。

- 查看Vue官网文档([https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup))，了解更多信息。

## .editorconfig

增加.editorconfig配置，用来规范跨各种编辑器和IDE的不同开发人员的编码风格。

## 增加husky

> prettier.cn/docs/install.html

1. 安装husky和lint-staged依赖

```shell
npm install --save-dev --save-exact husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

2. 向`package.json`中添加下面的配置代码

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

> 注意：如果打算使用ESlint，要确保lint-staged在Prettier之前运行。

## 增加`@trivago/prettier-plugin-sort-imports`对导入进行排序

1. 安装依赖

```shell
npm install --save-dev @trivago/prettier-plugin-sort-imports
```

2. 配置`prettierrc.json5`

```json
  importOrder: [
    '<THIRD_PARTY_MODULES>',
    '^@components/(.*)$',
    '^@(.*)',
    '^[./]',
  ],
  // 导入之间的分隔空行
  importOrderSeparation: false,
```

2. 执行命令

```shell
prettier --write . --plugin-search-dir=./node_modules/ --plugin=@trivago/prettier-plugin-sort-imports
```

> 参考文档 <https://github.com/trivago/prettier-plugin-sort-imports/issues/33>
> <https://prettier.io/docs/en/plugins.html#using-plugins>
