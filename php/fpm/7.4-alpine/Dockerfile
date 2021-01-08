FROM php:7.4-fpm-alpine

MAINTAINER timestrider

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories;
RUN ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ;
RUN apk --no-cache add zlib-dev libxml2-dev libpng-dev freetype-dev jpeg-dev libjpeg-turbo-dev postgresql-dev libressl-dev bzip2-dev libedit-dev tzdata libzip-dev oniguruma-dev curl-dev;
RUN docker-php-ext-configure gd --with-freetype --with-jpeg
RUN docker-php-ext-install gd soap iconv mbstring pdo pdo_mysql mysqli bz2 xml curl zip ftp opcache pdo_pgsql readline;
RUN docker-php-ext-enable bz2.so curl.so ftp.so gd.so iconv.so mbstring.so mysqli.so opcache.so pdo.so pdo_mysql.so pdo_pgsql.so readline.so soap.so sodium.so xml.so zip.so
RUN docker-php-source delete;
RUN apk del tzdata &&rm -rf /var/cache/apk/* && rm -rf /root/.cache && rm -rf /tmp/*;
