<h1 align="center">Ant Design Vue Pro</h1>
<div align="center">
An out-of-box UI solution for enterprise applications as a Vue boilerplate. based on  <a href="https://vuecomponent.github.io/ant-design-vue/docs/vue/introduce-cn/" target="_blank">Ant Design of Vue</a>
</div>

基于 [Vite4 Vue3 Ant-Design-of-Vue2 TS](https://github.com/bailihuiyue/ant-design-pro-vue3) 实现的 [Ant Design Pro Vue](https://pro.antdv.com/docs/router-and-nav)

码云地址: <https://gitee.com/Onces/ant-design-pro-vue3>

## 预览图

### 首页

![dashboard](https://i.imgtg.com/2023/03/22/9tUVs.png)
个人中心
![dashboard](https://i.imgtg.com/2023/03/22/9tBbg.png)

### 夜间模式

![dashboard](https://i.imgtg.com/2023/03/22/9tTmB.png)

### 锁屏界面

可点击右下角锁头按钮进行解锁
![dashboard](https://i.imgtg.com/2023/03/22/9thiC.png)

### 流程图

![dashboard](https://i.imgtg.com/2023/03/22/9tbqK.png)

### 手机预览(最低支持 iphone4)

![dashboard](https://i.imgtg.com/2023/03/22/9tq2l.png)
![dashboard](https://i.imgtg.com/2023/03/22/9taiP.png)
![dashboard](https://i.imgtg.com/2023/03/22/9to4b.png)

## 项目下载和运行

```bash
#拉取项目代码
git clone https://github.com/bailihuiyue/ant-design-pro-vue3.git
cd ant-design-pro-vue3
#安装依赖
yarn install
#开发模式运行
yarn dev 不带开发球
yarn dev-ui 带开发球
#编译项目
yarn build
```

## 路由和菜单

### 基本结构

- 路由文件 通过约定的语法根据在 router.ts 中配置路由,
  - 后端路由:通过 defaultSettings.ts 中的 useAsyncRouter 来设置是否启用,后端路由的格式在 mockUtils.ts 的 userNav 中。
  - 后端路由对应的 component 自动引入逻辑在 batchImportFiles,会自动引入 view 下面的,vue 文件作为页面
- 菜单生成根据路由配置来生成菜单。菜单项名称，嵌套路径与路由高度耦合,具体配置内容参照
  [Ant Design Pro Vue](https://pro.antdv.com/docs/router-and-nav) 即可
- 菜单跳转第三方网址的写法 meta: { title: '登录', icon: 'account-book', target: '<http://www.baidu.com>', blank: false }如果不想在新窗口打卡,请写明 blank: false 否则 blank 不写或者任意值均表示 true

## 布局

- 布局没有采用新版 pro-layout 插件,因为二次封装不利于个性化定制,而且 pro-layout 全是用 jsx 写的,所以还是使用了 ant-pro 2.0 的代码去修改

## 和服务端进行交互

- 项目使用了[apite](https://apite.frp.boyxing.com/)作为 mock 工具,文件写在了/mock 文件夹中

## 业务图标

- 图标除了 Ant Design Vue 自带的图标以外还使用了 vite-plugin-svg-icons 插件缓存 svg,所有图标都放在 src/assets/icons 中

- 想使用 antv 自带的图标请拷贝 node_modules\@ant-design\icons-svg\inline-svg 到图标文件夹,会自动引入,名称为 文件夹名-文件名 例如 a 下的 b.svg,SvgIcon 组件传入 name="a-b"即可: <svg-icon name="a-b" color="#fff"/>

  想获取所有已添加的 icon:

  import ids from 'virtual:svg-icons-names';

  // => ['icon-icon1','icon-icon2','icon-icon3']

  这个插件是自动导入的,然后写到 body 上,如果图标过多觉得影响效率可以使用 vite-plugin-vue-svg,手动引入一个个图标,demo 在 SvgIcon/manual 中

  **_注意:svg 文件的<svg> 标签上必须有 fill="currentColor" 字段,这样才能从外部的 span 等标签修改颜色,否则颜色不可变_**

## 更换主题

- 项目使用了 vite-plugin-theme 产生主题(css)
- 目前可以支持自动切换主题,包括生产模式,
- 通过调研,发现 antv(element 有官方支持)目前主流切换主题有两种模式,并且都需要 webpack/vite 插件:

1. 提前传入需要改变的颜色变量和值入例如:@primary-color:[#0094ff,#fff,#000 等...],然后正在 webpack 编译时读取这些变量,然后静态生成这些 css 文件,
   - 优点,1.切换主题时只是加载不同的 css 文件,节约性能,
   - 缺点:1.耗费服务端空间,2.只能订制提前定义好的几种主题 3.需要动态写入要修改的变量名入,@primary-color,@success-colo 等,替换不完全
2. 第二种方案,基于 vite-plugin-theme 插件,

- 优点

1. 可以任意在生产环境下选择主题颜色;

2. 没有上一中法案的问题 3,主题更改比较全面

- 缺点:

  1. 由于是动态生成主题颜色,会有性能损耗
  2. 必须先找到 antv 主颜色的色号,否则替换主题功能失效,所以当 antv 主色更改时,需要代码中跟着一起更改,建议锁定 antv 版本,避免该问题;

  - 猜测原理,根据该插件说明和代码运行现象猜测,是以主颜色生成几个临近颜色然后对应找到整个项目中包含这些颜色的 css 样式然后对比替换比如原来是[a,b,c,d],现在是[1,2,3,4],那么 a 变成 1,b 变成 2 这样对应着替换,然后把提换完成的 css 写入到 body 底部,完成主题切换,不需要根据@primary-color 这种定义去查找,这样靠颜色替换比较完整

  **_黑夜模式目前使用了 antv 官网的黑夜 css,采用动态添加 link 完成,不能适配所有页面,因此在 darkModePatch.less 写下一些兼容样式_**

**3.本项目使用了第三种方案: 使用官方 antv V3 版本的 css 变量进行主题修改,达到了性能和体积的最优解**

## 权限管理

- 权限管理在路由文件的 meta.permission 中设置,可以是一个数组,也可以不写,不写表示任意权限即可
- 后端路由的话一般不用设置权限,传来什么就是什么

## 命令行工具

用于自动生成一套模板,包括国际化,vue 文件,service 等文件

- 输入 yarn c --moduleName=想要的组件名称 可以在 src/components 里生成一套组件模板
- 输入 yarn v --moduleName=想要的页面名称 可以在 src/views 里生成一套页面模板
- 输入 create-module-be 用于前台页面一键生成模板所调用的后端接口
- dev-ui 同时启动项目和模板后端,在开发球中输入想要创建的组件/页面名称,刷新页面(vite 热更新自动)即表示创建成功

## 其他说明

- 项目为了保持了 ant vue pro 样式一致,部分代码引用自[ant vue pro](https://2x.antdv.com/components/overview-cn/),如 global.less,部分插件和原理借鉴[vben](https://vvbin.cn/next/),感谢两位大大

- 当前 <script setup lang="ts"></script>有 bug,会导致.ts 文件无法引入,报错 The requested module '/src/views/user/ty.ts' does not provide an export named 'FormState'

- 文档里有一些注释,搭配 vscode 插件 better-comments 食用,风味更佳:
  注释 TODO: 待完成
  bug:todo: bug
  info:todo: 发现的一些情况
  warn:todo: 可能有 bug
  ques:todo: 疑问
  只有大写的'TODO'才表示未完成的功能,小写的 todo 只是为了方便搜索而已
  (如果插件在 vue 文件中没有颜色变化可参考 <https://blog.csdn.net/weixin_47872719/article/details/126743867>
  具体步骤: 1.打开 C:\Users\Admin\\.vscode\extensions\bttter-comments 2.打开配置文件 aaron-bond.better-comments-3.0.2/out/parser.js
  3.setDelimiter(languageCode)方法中 case 的最后)

## 已完成

1. 注册登录 vue3 语法
2. 自动生成国际化(多层级文件夹使用.连接,比如 tools.UserMenu)
3. Storage(包含加密)
4. vueuse 响应式判断设备(手机,平板,pc)
5. 输入命令,生成一个 view/component 的模板
6. 页面存在一个开发球,点击按钮就可以创建 view/component(yarn dev 没有开发球,dev-ui 才有)
7. 由于 viser-vue 不支持 vue3,于是使用 g2-plot 重写,并且已支持夜间模式
   ( 如果不需要该页面,除了删除 dashboard 文件夹,也不要忘记删除"@antv/g2plot","@vue/babel-plugin-jsx"这俩库)
8. 仿 win10 锁屏页面,动态显示是否联网,是否充电,可自由更换壁纸(存在 indexedDB 中,建议图片别太大,容易卡),点击右下角锁头按钮出现密码框或换壁纸按钮
9. 在 views 文件夹中可以创建 user.store.ts 作为 vuex 的文件,其中文件名.store.ts 之前的 user 将会作为模块名实现,具体实现请看 genStore 方法
10. 全新升级 vite4,antv4,全部 vue 文件替换为 setup 写法
11. 项目报错时的全局路由提示/全局错误提示
12. 增加两个新页面:动态表单和流程图
13. 系统设置抽屉中的所有内容已使用 reactiveState 代替 vuex, 减少更改状态管理库(如 vuex 改 pinia 等)的工作量

## TODO

1. 详尽的文档
2. antv4.0 版本 夜间模式适配

## 浏览器兼容

Edge Chrome 等现代浏览器,目前只测试过 Chrome,没有 Mac 所以 Safari 没有测试

## 一些小技巧

1.如果想要更换 ant3 的前缀 prefixCls,不需要像官方示例中那样编译 less 文件成 css,因为如果编译之后,就变成 css 了,没有办法再动态改变主题了,一个做法是:

```javascript
//1.在main.ts中(最重要的一步是,不再引入css,直接引入可定制的less)
import 'ant-design-vue/dist/antd.variable.less'
//2.App.vue中(如果不改变主题,这步可以省略)
import { ConfigProvider } from 'ant-design-vue'
ConfigProvider.config({
  prefixCls: 'coseffect',
  theme: {
    primaryColor: '#25b864'
  }
})
//3.vite.config.ts中
export default defineConfig({
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: generateModifyVars(),
        javascriptEnabled: true,
        // 添加这一句(// ant-design-vue 4.x版本不需要了)
        modifyVars: {
          '@ant-prefix': 'coseffect'
        }
      }
    }
  }
})
```

2.volar 似乎不能像 vetur 一样调用各种格式化插件,目前只能用 prettier 插件凑合

```javascript
//1.项目根目录找到.eslintrc.cjs
rules: {
   'prettier/prettier': [
   'warn' //这里设置warn,其他的不要
  ]
}
//2.prettierrc.json文件
{
  "printWidth": 200, //加这行
}
```

3.根目录 index.html 文件标题添加.colorfulTitle 类名,可以实现刷新页面等待时有彩色文字效果

4.解决使用 vloar 之后 vscode 格式化变慢问题(不一定管用)

```javascript
// 方法一
// 1.将 Volar 更新到最新版本
// 2.禁用内置 TypeScript 扩展 设置为禁用（工作区）
// 到插件部分搜索框内输入@builtin Typescript
// 将“JavaScript 和 TypeScript 的语言功能“禁用掉(第一个)
// 然后另外一个basic的我们保留

// 方法二
// 1.打开vscode之后，点击文件==>首选项==>设置
// 搜索设置
// search.followSymlinks
// 然后在右侧用户自定义设置中将这个值改为 false
// search.followSymlinks = false,

// 2.谷歌浏览器的硬件加速更改
// 解决步骤：打开Chorme -> 设置 -> 高级 -> 【系统】 -> 将【启用硬件加速模式】取消勾选即可

// 参考资料:
// 1.https://blog.csdn.net/dangbai01_/article/details/128186524
// 2.https://blog.csdn.net/yw00yw/article/details/87861261
// 3.https://www.cnblogs.com/hongzhending/p/17336133.html
```

5.vscode 配置可以参考项目根目录.vscode/settings_backup.json
