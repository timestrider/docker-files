FROM php:7.0-fpm-alpine

MAINTAINER timestrider

ENV PHP_EXTRA_CONFIGURE_ARGS '--enable-fpm --with-fpm-user=git --with-fpm-group=www-data'

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; \
    adduser -g www-data -u 1000 -D -s /sbin/nologin git; \
    apk --no-cache add \
        freetype-dev \
        jpeg-dev \
        libjpeg-turbo-dev \
        libmcrypt-dev \
        libxml2-dev \
        libressl-dev \
        postgresql-dev \
        bzip2-dev \
        libedit-dev \
        curl-dev;

RUN docker-php-ext-configure gd --with-freetype-dir=/usr/lib/ --with-jpeg-dir=/usr/lib/ \
    && docker-php-ext-install gd iconv mcrypt mbstring \
    pdo pdo_mysql mysqli bz2 xml curl zip ftp opcache pdo_pgsql readline \
    && docker-php-source delete; \
