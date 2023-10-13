# Utilisez l'image PHP 8.2 avec FPM
FROM php:8.1.0-fpm

# Installez les extensions PHP nécessaires
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd \
    && docker-php-ext-install pdo pdo_mysql

RUN curl -sS https://get.symfony.com/cli/installer | bash
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

# Copiez le code source dans le conteneur
COPY . /var/www/html

# Configurer les permissions
RUN chown -R www-data:www-data /var/www/html/var

# Exposez le port 3001
EXPOSE 3001
