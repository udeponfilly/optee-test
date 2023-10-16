#!/bin/bash

cd frontend
npm install
cd ..

cd api
composer install
cd ..

docker-compose up --build
