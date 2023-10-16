FROM php:8.1.0-fpm

RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo pdo_mysql

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

COPY . /var/www/html

COPY entrypoint.sh /entrypoint.sh

RUN mkdir -p /var/www/html/var && chown -R www-data:www-data /var/www/html/var

EXPOSE 3001

ENTRYPOINT ["/entrypoint.sh"]
