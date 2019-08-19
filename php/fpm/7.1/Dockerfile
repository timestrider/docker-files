FROM php:7.1-fpm-stretch

MAINTAINER timestrider
RUN echo 'deb http://mirrors.aliyun.com/debian/ stretch main non-free contrib' >/etc/apt/sources.list;\
echo 'deb-src http://mirrors.aliyun.com/debian/ stretch main non-free contrib' >>/etc/apt/sources.list;\
echo 'deb http://mirrors.aliyun.com/debian-security stretch/updates main' >>/etc/apt/sources.list;\
echo 'deb-src http://mirrors.aliyun.com/debian-security stretch/updates main' >>/etc/apt/sources.list;\
echo 'deb http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib' >>/etc/apt/sources.list;\
echo 'deb-src http://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib' >>/etc/apt/sources.list;\
echo 'deb http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib' >>/etc/apt/sources.list;\
echo 'deb-src http://mirrors.aliyun.com/debian/ stretch-backports main non-free contrib' >>/etc/apt/sources.list; \
ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/timezone;

RUN apt-get update \
    && apt-get install -y gnupg whiptail unixodbc-dev \
        libfreetype6-dev \
        libbz2-ocaml-dev \
        libjpeg-dev \
        libmcrypt-dev \
        libxml2-dev \
        libssl-dev \
        bzip2 \
        libedit-dev \
        tzdata  \
        libodb-pgsql-dev \
        unixodbc-dev \
        libcurl-ocaml-dev \
        libpq-dev \
    && curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add - \
    && curl https://packages.microsoft.com/config/debian/9/prod.list \
        > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get install -y --no-install-recommends \
        locales \
        apt-transport-https \
    && echo "en_US.UTF-8 UTF-8" > /etc/locale.gen \
    && locale-gen \
    && apt-get -y --no-install-recommends install;
RUN docker-php-ext-configure gd --with-freetype-dir=/usr/lib/ --with-jpeg-dir=/usr/lib/ \
    && docker-php-ext-install gd soap iconv mcrypt mbstring \
    pdo pdo_pgsql pdo_mysql mysqli bz2 xml curl zip ftp opcache readline \
    && docker-php-source delete;
RUN pecl install sqlsrv pdo_sqlsrv && rm -rf /tmp/pear && usermod -u 82 www-data && groupmod -g 82 www-data;
# apt-get install msodbcsql17 //最后进入容器执行
