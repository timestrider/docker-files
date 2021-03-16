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
RUN mkdir -p /www/webapp \
    && export PYTHONPATH=$PYTHONPATH:/www/webapp
WORKDIR /www/webapp

ARG appName=mysite
ENV appName ${appName}

EXPOSE 8000

CMD ["sh","-c","gunicorn -b 0.0.0.0:8000 ${appName}.wsgi"]