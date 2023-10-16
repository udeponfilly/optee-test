# OPTEE - Test technique

## Prérequis

- Node.js et npm
- Composer
- Docker et Docker Compose

## Installation et démarrage du projet

1. **Cloner le dépôt**

   ```bash
   git clone git@github.com:udeponfilly/optee-test.git
   ```

2. **Naviguer jusqu'au dossier du projet**

   ```bash
   cd optee-test
   ```

3. **Exécuter le script**

   ```bash
   ./start_project.sh
   ```

   Ce script effectuera les actions suivantes :

   - Installer les dépendances du frontend avec `npm install`.
   - Installer les dépendances du backend avec `composer install`.
   - Construire et démarrer les conteneurs Docker avec `docker-compose up --build`.

4. **Accéder à l'application**

   - Frontend : `http://localhost`
   - Backend : `http://localhost/api`
