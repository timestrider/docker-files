FROM python:3.9-alpine

RUN sed -i 's/dl-cdn.alpinelinux.org/mirrors.aliyun.com/g' /etc/apk/repositories;
RUN apk add --no-cache tzdata \
    && cp /usr/share/zoneinfo/PRC /etc/localtime \
    && echo "PRC" > /etc/timezone \
    && pip install \
    --index-url http://mirrors.aliyun.com/pypi/simple \
    --trusted-host mirrors.aliyun.com \
    --no-cache-dir \
    --upgrade pip \
    && pip install \
    --index-url http://mirrors.aliyun.com/pypi/simple \
    --trusted-host mirrors.aliyun.com \
    --no-cache-dir \
    gunicorn django \
    && apk del tzdata \
    && rm -rf /var/cache/apk/* \
    && rm -rf /root/.cache \
    && rm -rf /tmp/*
RUN mkdir -p /www/app && export PYTHONPATH=$PYTHONPATH:/www/app
WORKDIR /www/app

ENV appName="mysite"

EXPOSE 8000

CMD ["sh","-c","gunicorn -b 0.0.0.0:8000 ${appName}.wsgi"]

# 用的时候将项目目录卷挂载到/www/app。建议将文件卷挂载到/www/assets