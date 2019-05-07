## nginx

#### Mac版本安装及启动流程
1.brew安装<br>

```bash
brew search nginx

brew install nginx
```

2.路径信息<br>

```bash
/usr/local/etc/nginx/nginx.conf （配置文件路径）

/usr/local/var/www （服务器默认路径）

/usr/local/Cellar/nginx/1.12.0_1 （安装路径“启动路径”,注意版本必须与你本地安装版本一致）
```

3.启动<br>

```bash
sudo /usr/local/Cellar/nginx/1.12.0_1/bin/nginx -c /usr/local/etc/nginx/nginx.conf
```

4.重启<br>

```bash
cd /usr/local/Cellar/nginx/1.12.0_1/bin/

./nginx -s reload
```

5.其它<br>
[参考链接](http://blog.csdn.net/yqh19880321/article/details/70478827)


#### Windows版本安装及启动流程