# Gerenciamento de transações

A proposta foi fazer uma aplicação full-stack ultilizando dockerizada para fazer gerenciamento de transações.

## Instalação

```sh
    git clone git@github.com:matheusjesse/ng-app.git

    cd ng-app
```
Instalando BACKEND
```sh
    cd backend
    npm install
```
Subindo containers
```
    docker-compose up
```
Criando DataBase
```
    npm run db:create
```

Criando migrations
```
    npx sequelize db:migrate
```
- tudo ok

Acesse o front no localhost 3000
(OBS) acesse a pasta FRONTEND para ler o README do frontend

Acesse o back no localhost 8000
(OBS) acesse a pasta BACKEND para ler o README do backend

[meu linkedin](https://www.linkedin.com/in/matheusjesse)

