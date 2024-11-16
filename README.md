# TD3_Bun_project

Pour démarrer le server Bun executer :
bun run src/index.ts
allez à https/localhost:3000

## Tests Fonctionnels 

Ce projet inclut des tests fonctionnels pour les routes API, réalisés avec Postman dans le dossiers tests vous trouverez un fichier kson Postman_test. Ces tests permettent d'identifier le type d'erreur post request

### Exécuter les Tests

pour éxécuter les tests : 
- npm jest 

### Prisma ORM
 Le dossier continet un folder prisma 
Installer Prisma via la commande :
- npx prisma init

On peut modifier le url pour utiliser le fichier parking.sqlite comme base de donnée on modifie donc le fichier shema.prisma on y ajoute les tables par exemple City et Parking

Cette commande permet de generer un client Prisma :
- npx prisma generate

Sa la base de donnée existe deja on peut juste executer cette commande :
- npx prisma db pull

Sinon cette commande pour creer une base de zero
- npx prisma db push

Pour verifier que le serveur fonctionnement executer:
- npx prisma studio ou bien bunx prisma studio cela revient au meme résultat 

Cette commande vous renvera vers le serveur à l'adresse :

Prisma Studio is up on http://localhost:5555

## Cas d'erreur au niveau du serveur qui ne se lance pas correctement (Info)

Voir si le serveuer est utiliser si vous avez un message d'erreur qui indique le serveur est peut-etre utiliser ailleurs :
netstat -aon | findstr :3000

si il est utilisé et qu'on veut terminer le processus on execute la commande 
taskkill /PID <PID> /F
Le PID est le numero de l'evenement ecouté