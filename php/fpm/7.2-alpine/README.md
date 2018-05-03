### 关于用法
这个镜像基于7.2-alpine，添加了日常所需的一些扩展，没有修改用户组依然运行于root，但是更改了php执行默认用户组www-data:www-data为git:www-data。如果和我一样要用git做执行用户的话，docker run的时候请添加 ``` -u git```

> * 以为一路cp下来就行一build竟然报错。原来 php 7.2需要libressl-dev替换openssl-dev，并且呢，mcrypt直接被拿掉了，不再支持。
