#### 热更新插件（code-push）
<br>

#### code-push配置
1. 全局安装code-push cli
```
npm install -g code-push-cli
```

2. 注册code-push 账号（默认用的微软的服务器，可本地搭建）<br>
codepush 账号注册和登录可[参考](https://segmentfault.com/a/1190000009642563)<br>

3. android 和ios 原生集成<br>
[参考](https://github.com/Microsoft/react-native-code-push#getting-started)<br>

4. 更新参数配置<br>
[参考](https://github.com/Microsoft/react-native-code-push/blob/master/docs/api-js.md#codepush)<br>

5. 发布更新<br>
测试账号：shuangCode 密码：Ws7863383<br>
安卓项目名字：bitmapApp-android <br>
ios项目名字：bitmapApp-ios <br>
```
登录：code-push login 
发布更新：code-push release-react <项目名字> <platfrom> --t <要更新的版本号> --m <是否强制更新> --des <更新的内容>
eg:
android更新：
code-push release-react bitmapApp-android android --t 1.0.0 --m false  --des 'android 非强制更新弹框'
ios更新：
code-push release-react bitmapApp-ios ios --t 1.0.0 --m false  --des ‘ios非强制更新弹框'
```
查看发布历史:
```
code-push deployment history bitmapApp-ios Staging
```
6. 模拟器测试更新注意事项：<br>
android : 点击更新按钮之前，将本地node服务停掉，或者在dev settings 里面将host和port改为任意一个值，否则更新连接的是本地 node服务，不会有更新提示<br>
ios :
```
a. 项目根目录创建一个目录bundles,执行如下命令,将本地到项目打包到离线目录下
       react-native bundle --platform ios --entry-file index.js --bundle-output ./bundles/main.jsbundle  --assets-dest  ./bundles/ —dev false
b. 将打包到本地的bundles 文件内容拖到xcode项目根目录下，
c. 将AppDelegate.m 里面的 判断注释掉：
       // #ifdef DEBUG
          // jsCodeLocation = [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
       // #else
          jsCodeLocation = [CodePush bundleURL]; //只保留这句
       // #endif 
d. 然后将app删掉重新react-native run-ios 模拟器上的代码和本地保持一致
e. 然后修改本地的代码，将代码发布到code-push服务器，
f. 将app后台进程关掉，重启app 即看到弹框
```
7. 真机测试更新注意事项：<br>
ios : 更新之前将本地node服务停掉，否则app重启时会自动更新成最新版，更新弹框不再显示





