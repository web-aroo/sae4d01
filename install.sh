#!/usr/bin/env sh
# -- Installation d'un projet Laravel avec Front-end Intertia
# PHP 8.1 est requis
# - avec les extensions décrites dans la documentation de Laravel : https://laravel.com/docs/10.x/deployment#server-requirements
# Pour construire le front, node.js est requis avec la version 16 au minimum.
# --

apt install php php-mbstring php-xml php-intl
apt install nodejs

# Selon les distributions Linux, les installations de PHP peuvent changer, sur Debian, il est possible d'utiliser le dépôt Sury
# https://deb.sury.org/ contient des versions à jour de PHP par rapport aux dépôts Debian 11 par défaut.

# Sur Laragon, aucune intervention n'est requise mis à part l'activation des extensions décrites (en plus de votre pilote de base de données)

cp .env.example.dev .env

php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php composer-setup.php
php -r "unlink('composer-setup.php');"

php composer.phar install
php artisan key:generate

# Par défaut, Laravel va utiliser la base de données SQLite
# Mais, Laravel supporte de façon agnostique plusieurs SGBD, comme décrit ici : https://laravel.com/docs/10.x/database#introduction

touch database/database.sqlite
php artisan migrate

npm i
npm run build

# Voilà ! Le site est disponible désormais dans le répertoire public/, celui-ci contient des règles dans .htaccess pour gérer les réécritures d'URL.
# Si un autre serveur que Apache est utilisé, il faut conigurer soi-même : https://laravel.com/docs/10.x/deployment#server-configuration

