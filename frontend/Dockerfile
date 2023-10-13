# Utilisez l'image Node.js pour construire l'application Angular
FROM node:19 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Utilisez l'image Nginx pour servir l'application Angular
FROM nginx:alpine
COPY --from=build /app/dist/frontend /usr/share/nginx/html
EXPOSE 80
