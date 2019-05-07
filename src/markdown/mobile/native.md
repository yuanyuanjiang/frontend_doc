#### 赤兔宝h5与native交互文档

* [*点击此处*](http://10.1.2.46:8090/pages/viewpage.action?pageId=950949)<br><br>


#### 赤兔宝h5上线流程

1. 微信中h5上线:<br>
1）jenkins上构建zoo-master-web项目<br>
2）构建后的jar必需跟后台一起部署，版本号与后台版本号保持一致<br>

2. app中h5上线：<br>
合并master之后，接口地址改为线上地址，本地构建成chitupayDemo.zip压缩包<br>

app外壳无改动，通过热更新上线：<br>
1. 本地构建成chitupayDemo.zip压缩包给到运维在服务端替换
2. 数据库h5版本累加（后台sql处理）

app外壳有改动，将压缩包放到app中，提交商店审核；<br>
