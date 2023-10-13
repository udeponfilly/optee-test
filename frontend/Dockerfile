# Utilisez l'image Node.js pour le développement
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code source
COPY . .

# Exposer le port 3000
EXPOSE 3000

# Lancer l'application Angular
CMD ["npm", "start"]
