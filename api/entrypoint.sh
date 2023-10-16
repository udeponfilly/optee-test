#!/bin/sh

mkdir -p /var/www/html/var

chown -R www-data:www-data /var/www/html/var

sleep 15
symfony console doctrine:migrations:migrate --no-interaction
symfony console doctrine:fixtures:load --no-interaction

exec symfony server:start --port=3001
