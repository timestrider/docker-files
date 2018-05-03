FROM php:7.0.25-fpm

MAINTAINER timestrider

RUN groupmod -g 1000 www-data ;\ 
	useradd -g www-data -u 1000 -s /usr/sbin/nologin git;

ENV PHP_EXTRA_CONFIGURE_ARGS '--enable-fpm --with-fpm-user=git --with-fpm-group=www-data'

RUN echo 'deb http://mirrors.163.com/debian/ jessie main non-free contrib' >/etc/apt/sources.list; \
	echo 'deb http://mirrors.163.com/debian/ jessie-updates main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb http://mirrors.163.com/debian/ jessie-backports main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb-src http://mirrors.163.com/debian/ jessie main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb-src http://mirrors.163.com/debian/ jessie-updates main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb-src http://mirrors.163.com/debian/ jessie-backports main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib' >>/etc/apt/sources.list; \
	echo 'deb-src http://mirrors.163.com/debian-security/ jessie/updates main non-free contrib' >>/etc/apt/sources.list; \
	apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
		libxml2-dev \
		libssl-dev \
		libzip-dev \
		libedit-dev \
		libpq-dev \
		libcurl4-openssl-dev \
    && docker-php-ext-install -j$(nproc) iconv mcrypt mbstring \
		pdo pdo_mysql mysqli xml curl zip ftp opcache pdo_pgsql readline \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j$(nproc) gd \
	&& docker-php-source delete; \
	rm -rf /var/lib/apt/list/*;\