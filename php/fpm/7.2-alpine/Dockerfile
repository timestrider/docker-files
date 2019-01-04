FROM php:7.2-fpm-alpine

MAINTAINER timestrider

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; 
RUN apk --no-cache add \
        freetype-dev \
        jpeg-dev \
        libjpeg-turbo-dev \
        libxml2-dev \
        postgresql-dev \
        libressl-dev \
        bzip2-dev \
        libedit-dev \
        tzdata  \
        curl-dev;
        
        
RUN ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ;
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/lib/ --with-jpeg-dir=/usr/lib/ \
    && docker-php-ext-install gd soap iconv mbstring \
    pdo pdo_mysql mysqli bz2 xml curl zip ftp opcache pdo_pgsql readline \
    && docker-php-source delete; \
