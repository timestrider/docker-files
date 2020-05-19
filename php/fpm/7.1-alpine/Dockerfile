FROM php:7.1-fpm-alpine

MAINTAINER timestrider

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories;
RUN apk --no-cache add \
        freetype-dev \
        jpeg-dev \
        libjpeg-turbo-dev \
        libmcrypt-dev \
        libxml2-dev \
        libressl-dev \
        postgresql-dev \
        bzip2-dev \
        libedit-dev \
        tzdata  \
        curl-dev;
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/lib/ --with-jpeg-dir=/usr/lib/;
RUN docker-php-ext-install gd soap iconv mcrypt mbstring pdo pdo_mysql mysqli bz2 xml curl zip ftp opcache pdo_pgsql readline;
RUN docker-php-source delete;
RUN ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ;
RUN set -xe && apk add --no-cache --update --virtual .phpize-deps $PHPIZE_DEPS && pecl install -o -f redis && echo "extension=redis.so" > /usr/local/etc/php/conf.d/redis.ini && rm -rf /usr/share/php && rm -rf /tmp/* && apk del  .phpize-deps
