FROM nginx:alpine

MAINTAINER timestrider

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories;
RUN apk --no-cache add \
    tzdata;

RUN ln -snf /usr/share/zoneinfo/PRC /etc/localtime && echo PRC > /etc/TZ;
