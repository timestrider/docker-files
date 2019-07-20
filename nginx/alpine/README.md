### about
nginx's alpine image has default timezone +0. It may cause some log-time-problum to other timezone user. so you can use  
`ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ`  
But in alpine image, there is no zoninfo. so you need install it first:  
`apk --no-cache add tzdata;`
