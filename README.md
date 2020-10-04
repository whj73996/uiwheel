# UIWheel ——— 一个vue UI组件

## 介绍
这是我在学习vue过程中做的一个UI框架，希望对你有用。
## 开始使用

1. 添加 CSS 样式

    使用本框架前，请在CSS中开启border-box
    
    ```
    *,*::after,::before{box-sizing:border-box}
    ```
    IE 8 及以上浏览器都支持此样式。
    
    你还需要设置默认颜色等变量（后续会改为 SCSS变量）
    
    ```
        html{
          --button-height:32px;
          --font-size:14px;
          --button-bg:white;
          --button-active-bg:#eee;
          --border-radius:4px;
          --color:#333;
          --border-color:#999;
          --border-color-hover:#666;
        }
    ```
    IE 15 及以上浏览器都支持此样式。

2. 安装 uiwheel
    ```
    npm i -s uiwheel-0-1
    ```
3. 引入uiwheel
    ```
   import {Button,ButtonGroup,Icon} from 'uiwheel-0-1'
   import 'uiwheel-0-1/dist/index.css'
   
   export default {
     name: 'Home',
     components: {
        HelloWorld,
       'g-button':Button,
       'g-group':ButtonGroup,
       'g-icon':Icon
     }
   }
    ```
4. 引入 svg symbols
```
<script src="//at.alicdn.com/t/font_2111296_dx7dpkjtpij.js"></script>
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码