FROM php:7.2-fpm-alpine

MAINTAINER timestrider

ENV PHP_EXTRA_CONFIGURE_ARGS '--enable-fpm --with-fpm-user=git --with-fpm-group=www-data'

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.ustc.edu.cn/g' /etc/apk/repositories; \
	adduser -g www-data -u 1000 -D -s /sbin/nologin git; \
	apk --no-cache add \
        freetype-dev \
        jpeg-dev \
		libxml2-dev \
		postgresql-dev \
		libressl-dev \
		bzip2-dev \
		libedit-dev \
		curl-dev \
    && docker-php-ext-install iconv mbstring bz2 \
		pdo pdo_mysql mysqli zip xml curl ftp opcache pdo_pgsql readline gd \
	&& docker-php-source delete; \
