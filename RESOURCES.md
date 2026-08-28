# Resources / Stack do Projeto

Este documento lista todas as ferramentas, bibliotecas e serviços usados no projeto, por que cada uma foi escolhida, e os limites do plano gratuito de cada serviço externo.

---

## Frontend

| Ferramenta | Uso | Link |
|---|---|---|
| React (com Vite) | Biblioteca principal de interface | https://react.dev / https://vitejs.dev |
| Leaflet | Biblioteca de mapas (gratuita, sem chave de API) | https://leafletjs.com |
| OpenStreetMap | Fonte dos mapas usados pelo Leaflet | https://www.openstreetmap.org |

## Backend

| Ferramenta | Uso | Link |
|---|---|---|
| Node.js | Ambiente de execução do backend | https://nodejs.org |
| Express | Framework para criar as rotas/API | https://expressjs.com |
| Prisma | ORM — gerencia as migrations e a comunicação com o banco | https://www.prisma.io |
| JWT (jsonwebtoken) | Geração e validação de token de autenticação | https://www.npmjs.com/package/jsonwebtoken |
| bcrypt | Criptografia de senhas | https://www.npmjs.com/package/bcrypt |

## Banco de dados

| Ferramenta | Uso | Plano gratuito |
|---|---|---|
| PostgreSQL | Banco de dados relacional | — |
| Supabase | Hospedagem do PostgreSQL + Storage | 500 MB de banco, 1 GB de storage, 50.000 usuários ativos/mês. Projeto pausa após 7 dias sem uso (reativação manual no painel). |

## Armazenamento de mídia

| Ferramenta | Uso | Plano gratuito |
|---|---|---|
| Supabase Storage | Upload de fotos e vídeos das trilhas | Incluso no plano gratuito do Supabase (1 GB) |

## Deploy / Hospedagem

| Ferramenta | Uso | Plano gratuito |
|---|---|---|
| Render | Hospedagem do backend | 750h/mês grátis, sem cartão de crédito. Serviço "dorme" após 15 min sem uso (demora ~1 min pra "acordar" na próxima requisição). |
| Vercel | Hospedagem do frontend | Plano Hobby gratuito, uso pessoal/acadêmico, 100 GB de transferência/mês |

## Versionamento e colaboração

| Ferramenta | Uso |
|---|---|
| Git | Controle de versão |
| GitHub | Hospedagem do repositório, Issues, Pull Requests, Project (Kanban) |
| GitHub Actions | Automação de testes (CI) a cada Pull Request |

## Testes

| Ferramenta | Uso | Link |
|---|---|---|
| Jest | Testes automatizados do backend | https://jestjs.io |

---

## Como manter este arquivo atualizado

Sempre que o time decidir adicionar uma nova ferramenta/biblioteca ao projeto (ex: uma lib nova de frontend, um novo serviço externo), atualize esta tabela no mesmo Pull Request que introduz a ferramenta. Isso evita que o documento fique desatualizado e vira "fonte da verdade" de tudo que o projeto depende.
