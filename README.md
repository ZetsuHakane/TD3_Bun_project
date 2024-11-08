# TD3_Bun_project

Pour démarrer le server Bun executer :
bun run src/index.ts
aller à https/localhost:3000
 
pour éxécuter les tests : 
npm jest 
 
Voir si le serveuer est utiliser si vous avez un message d'erreur qui indique le serveur est peut-etre utiliser ailleurs :
netstat -aon | findstr :3000

si il est utilisé et qu'on veut le terminer le processus on execute la commande 
taskkill /PID <PID> /F
Le PID est le numero de l'evenement ecouté

## Tests Fonctionnels

Ce projet inclut des tests fonctionnels pour les routes API, réalisés avec Postman.

### Exécuter les Tests

1. Importez la collection Postman en téléchargeant le fichier `tests_collection.json` situé à la racine du projet.
2. Ouvrez Postman, allez dans **File > Import** et sélectionnez `tests_collection.json`.
3. Lancez les tests en utilisant la **collection** importée.

Vous pouvez également visualiser et éditer ces tests en ligne si vous avez accès à [Postman](https://www.postman.com/) ou [Bruno](https://www.usebruno.com/).
