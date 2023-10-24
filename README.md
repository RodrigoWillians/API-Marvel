# Descrição

Implementação de API da Marvel.

Objetivo: mostrar o nome e imagens de alguns personagens da Marvel utilizando a API [Marvel](https://developer.marvel.com/).

• Projeto utilizando paginação via API. E redirecionamento para a pagina de quadrinhos do respectivo personagem escolhido.

• Variavel de ambiente utilizada para pegar as keys necessárias para fazer o hash, fiz um metodo no service para gerar esse Hash, o certo era as variaveis de ambiente não serem comitadas junto, seguindo as medidas de segurança
porém estou comitando junto para avaliação completa do código.

## Configuração

O Projeto foi feito utilizando:

• IDE: Visual Studio Code.

• Framework utilizado: Angular.

• Versão: 16.

• Utilizado Angular Material.

• Testes feitos via [Karma](https://karma-runner.github.io).

## Instalação do projeto na máquina

Para abrir o projeto, basta clonar o repositório ou realizar o download. Em seguida: 

• Importar o projeto na IDE desejada.

• Possuir Angular CLI instalado. Comando para instalar: npm install -g @angular/cli

• Executar o comando no terminal: npm install.

• No arquivo src/environment.ts verificar as Urls.

• Executar o projeto: ng serve.

## Rodar o projeto

NG SERVE
Quando o projeto estiver disponível, a aplicação estará acessível pelo endereço: http://localhost:4200/
