# Makefile

# Par défaut, "make" exécutera la commande "up"
all: up

re: fclean all

# Cette règle permettra de démarrer votre environnement Docker Compose
up:
	docker-compose up --build

# Cette règle permettra de stopper et supprimer tous les conteneurs
clean:
	-docker-compose down

# Cette règle exécutera "clean", puis supprimera toutes les images, volumes et réseaux
fclean: clean
	-docker system prune -a -f
	-docker volume prune --force
	-docker network prune --force

.PHONY: all up clean fclean
