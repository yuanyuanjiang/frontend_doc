# 多屏适配方案

## npm方式

1、npm安装lib-flexible [gitlab](https://github.com/amfe/lib-flexible/tree/master)
```
npm install lib-flexible@0.3.2 --save
```

2、在html入口文件main.js中引入并使用

```
import 'lib-flexible/flexible.js'
```

## 内联引入方式

完整引用举例：
```
<script src="http://g.tbcdn.cn/mtb/lib-flexible/{{version}}/??flexible_css.js,flexible.js">
</script>
```

把{{version}}改成0.3.2使用

使用方法

建议对于js做内联处理，在所有资源加载之前执行这个js。

执行这个js后，会在html（也就是document.documentElement）上增加一个data-dpr属性，以及font-size样式。

## 页面布局相关

之后页面中的元素，都可以用rem单位来设置。html上的font-size就是rem的基准像素。

把视觉稿中的px转换成rem 对于视觉稿上的元素的尺寸换算，只需要原始px值除以rem基准px值即可。例如240px _120px的元素，最后转换为3.2rem_ 1.6rem。

## 字体字号相关

字体也可以使用rem的方法，根据实际需求，使用的话，在所有的尺寸上一行能显示的字数是一样的。

字体的大小不推荐用rem作为单位。所以对于字体的设置，仍旧使用px作为单位，并配合用data-dpr属性来区分不同dpr下的的大小。如：
```

div { width: 1rem; height: 0.4rem; font-size: 12px; // 默认写上dpr为1的fontSize }

[data-dpr="2"] div { font-size: 24px; }

[data-dpr="3"] div { font-size: 36px; }

```


## 手动配置dpr

引入执行js之前，可以通过输出meta标签方式来手动设置dpr。语法如下：

<meta name="flexible" content="initial-dpr=2,maximum-dpr=3">

其中initial-dpr会把dpr强制设置为给定的值，maximum-dpr会比较系统的dpr和给定的dpr，取最小值。注意：这两个参数只能选其一。

注意：建议不要手动配置dpr，插件会根据实际的dpr值来进行动态生成meta标签。 自动生成的原理是：

```
iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案；

其他设备下，仍旧使用1倍的方案
```
