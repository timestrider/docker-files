FROM php:7.1-fpm-alpine

MAINTAINER timestrider

RUN ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ;
RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; \
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
    && docker-php-ext-install gd soap iconv mcrypt mbstring \
    pdo pdo_mysql mysqli bz2 xml curl zip ftp opcache pdo_pgsql readline \
    && docker-php-source delete; \
