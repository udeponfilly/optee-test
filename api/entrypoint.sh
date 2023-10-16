#!/bin/sh

sleep 15
symfony console doctrine:migrations:migrate --no-interaction
symfony console doctrine:fixtures:load --no-interaction

exec symfony server:start --port=3001
