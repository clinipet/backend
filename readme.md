# CliniPet 🐾

## Sobre o Projeto

CliniPet é um sistema de gerenciamento para clínicas veterinárias desenvolvido como trabalho acadêmico. O projeto oferece uma solução completa para o gerenciamento de pacientes, consultas e tratamentos veterinários.

### Trabalho Acadêmico
Este projeto foi desenvolvido como parte de um trabalho acadêmico, visando aplicar conhecimentos em desenvolvimento web e arquitetura de software.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL
- RESTful APIs

## Estrutura do Projeto
```plaintext
src/
├── models/
│   ├── client.model.js
│   ├── pet.model.js
│   ├── appointment.model.js
│   ├── treatment.model.js
│   └── veterinarian.model.js
├── controllers/
│   ├── client.controller.js
│   ├── pet.controller.js
│   ├── appointment.controller.js
│   ├── treatment.controller.js
│   └── veterinarian.controller.js
├── routes/
│   ├── client.routes.js
│   ├── pet.routes.js
│   ├── appointment.routes.js
│   ├── treatment.routes.js
│   └── veterinarian.routes.js
├── config/
│   └── database.js
├── app.js
└── server.js
```

## Funcionalidades

- Gerenciamento de Clientes
- Cadastro de Pets
- Agendamento de Consultas
- Registro de Tratamentos
- Gestão de Veterinários

## Pré-requisitos

- Node.js
- PostgreSQL
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/clinipet.git
cd clinipet
```
2. Instale as dependências
```bash
npm install
```
3. Configure o banco de dados


- Crie um banco de dados PostgreSQL
- Configure as variáveis de ambiente no arquivo `.env`

4. Inicie o servidor
```bash
npm start
```

## Estrutura do Banco de Dados

O sistema utiliza PostgreSQL com as seguintes tabelas:

- clients (Clientes)
- pets (Animais)
- appointments (Consultas)
- treatments (Tratamentos)
- veterinarians (Veterinários)
- vaccines (Vacinas)
- treatments (Tratamentos)
- medications (Medicações)


## Endpoints da API

### Clientes

- GET /api/clients - Lista todos os clientes
- POST /api/clients - Cadastra novo cliente
- GET /api/clients/:id - Busca cliente por ID
- PUT /api/clients/:id - Atualiza cliente
- DELETE /api/clients/:id - Remove cliente


### Pets

- GET /api/pets - Lista todos os pets
- POST /api/pets - Cadastra novo pet
- GET /api/pets/:id - Busca pet por ID
- PUT /api/pets/:id - Atualiza pet
- DELETE /api/pets/:id - Remove pet


### Consultas

- GET /api/appointments - Lista todas as consultas
- POST /api/appointments - Agenda nova consulta
- GET /api/appointments/:id - Busca consulta por ID
- PUT /api/appointments/:id - Atualiza consulta
- DELETE /api/appointments/:id - Cancela consulta


## Como Contribuir

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/feature`)
3. Faça o Commit das suas mudanças (`git commit -m 'Add some feature'`)
4. Faça o Push para a Branch (`git push origin feature/feature`)
5. Abra um Pull Request


## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Equipe
[Victor Balchaki](https://github.com/sparkxrd/balchaki)   
[Ricardo Assis](https://github.com/sparkxrd/seuamigoo)  

Links do Projeto:     
[Backend](https://github.com/clinipet/backend)   
[Frontend](https://github.com/clinipet/frontend)  

Desenvolvido com ❤️ como parte do trabalho acadêmico.
