-- init.sql
CREATE DATABASE IF NOT EXISTS optee;
GRANT ALL PRIVILEGES ON optee.* TO 'optee_user'@'%';
FLUSH PRIVILEGES;
