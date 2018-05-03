### 关于用法
这个镜像基于7.0-alpine，添加了日常所需的一些扩展，没有修改用户组依然运行于root，但是更改了php执行默认用户组www-data:www-data为git:www-data 

> * 注意php7.0以上版本的mcrypt是不兼容laravel5.0的，这就是7.0的fpm存在的意义，后台专供。
> * 还是alpine简单啊😂
