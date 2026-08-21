# Guia de Contribuição

Este documento explica **como trabalhar neste repositório**, passo a passo. Leia antes de começar a codar qualquer coisa — ele evita retrabalho e conflitos entre o que cada um está fazendo.

Se você nunca usou Git/GitHub a fundo, sem problema: siga a ordem deste documento exatamente como está escrita.

---

## 1. Antes de começar

Você vai precisar de:
  1. Git instalado na sua máquina ([git-scm.com](https://git-scm.com/downloads)).
  2. Node.js instalado (para rodar o projeto localmente).

---

## 2. Clonando o repositório (só na primeira vez)

No terminal, rode:

```bash
git clone <URL-do-repositorio>
cd <nome-da-pasta-do-projeto>
```

Isso cria uma cópia completa do projeto na sua máquina. **Você não vai editar direto no GitHub pelo navegador** — todo código é escrito localmente e depois enviado.

---

## 3. Regra principal: toda tarefa começa numa Issue e termina num Pull Request

Nenhum código entra na branch `develop` sem passar por um **Pull Request (PR)**. Sem exceções, mesmo em tarefas pequenas.

Fluxo obrigatório:

1. A tarefa já existe como uma **Issue** no repositório (aba "Issues").
2. Você abre a Issue e clica em **"Create a branch"** (no menu lateral direito, seção "Development"). Isso cria a branch já vinculada à Issue.
3. Você puxa essa branch pra sua máquina:
   ```bash
   git fetch origin
   git checkout nome-da-branch-criada
   ```
4. Você programa, testa localmente, e vai salvando com commits (veja seção 5).
5. Quando terminar, envia sua branch:
   ```bash
   git push origin nome-da-branch-criada
   ```
6. No GitHub, abre um **Pull Request** dessa branch para `develop`.
7. Pelo menos **uma outra pessoa do time precisa revisar e aprovar** antes do merge.
8. Depois do merge, a Issue fecha sozinha e o card do Project vai automaticamente para "Concluído".

**Por que isso é obrigatório:** o PR é o momento em que outra pessoa confere seu código antes dele virar parte oficial do projeto. Sem essa etapa, erros e código quebrado entram direto no que todo mundo usa.

---

## 4. Como manter sua branch atualizada

Antes de começar a trabalhar em qualquer dia, sempre atualize a `develop` local:

```bash
git checkout develop
git pull origin develop
```

Só depois disso crie/atualize sua branch de trabalho. Isso evita trabalhar em cima de código desatualizado e reduz conflitos.

---

## 5. Padrão de commits

Use commits pequenos e frequentes (não espere terminar tudo pra commitar uma vez só). Formato:

```
tipo(modulo): descrição curta do que foi feito
```

Tipos mais usados:
- `feat` → uma funcionalidade nova
- `fix` → correção de um bug
- `docs` → mudança em documentação
- `refactor` → reorganização de código sem mudar comportamento
- `test` → adição/ajuste de testes
- `chore` → tarefas de configuração (ex: instalar uma biblioteca)

Exemplos:
```
feat(auth): criar endpoint de login
fix(trails): corrigir filtro de dificuldade que não funcionava
docs: atualizar README com instruções de instalação
```

---

## 6. Nomenclatura de branches

```
feature/<modulo>-<descricao-curta>   -> para funcionalidades novas
fix/<modulo>-<descricao-curta>       -> para correções
chore/<descricao-curta>              -> para configuração/infra
```

Exemplos: `feature/auth-login`, `fix/trails-filtro-dificuldade`, `chore/setup-inicial`.

Se você criou a branch pelo botão "Create a branch" da Issue, o GitHub já sugere um nome parecido com esse padrão automaticamente — pode aceitar o sugerido.

---

## 7. Estrutura de pastas — onde colocar seu código

O backend é dividido por **módulos de domínio**. Cada módulo tem sempre os mesmos 4 tipos de arquivo. **Não crie código de um módulo dentro da pasta de outro.**

```
/backend
  /src
    /modules
      /users        -> cadastro, login, perfil, autenticação
      /trails        -> trilhas, inscrições, atividades
      /guilds        -> guildas, membros
      /media         -> upload e listagem de fotos/vídeos
    /shared          -> código usado por mais de um módulo (middlewares, utils, config)
    /database        -> migrations e conexão com o banco
  /tests             -> testes automatizados
/frontend
  /src
    /pages           -> telas
    /components      -> pedaços de interface reutilizáveis
    /services        -> chamadas para a API do backend
```

Dentro de cada módulo do backend, siga sempre esse padrão de 4 arquivos:

```
/modules/<nome-do-modulo>/
  <modulo>.routes.js       -> define os endpoints (rotas)
  <modulo>.controller.js   -> recebe a requisição e devolve a resposta
  <modulo>.service.js      -> regra de negócio
  <modulo>.repository.js   -> só fala com o banco de dados
```

**Regra importante:** um módulo nunca acessa o `repository` de outro módulo diretamente — só o `service`. Isso evita que uma mudança em um módulo quebre outro sem querer, e mantém os PRs pequenos e fáceis de revisar.

Se sua tarefa não se encaixa claramente em nenhuma pasta existente, **pergunte no grupo do time antes de criar uma pasta nova** — isso evita duplicidade de estrutura.

---

## 8. Checklist antes de abrir o Pull Request

- [ ] O código roda localmente sem erro.
- [ ] Segui a estrutura de pastas da seção 7.
- [ ] Os commits seguem o padrão da seção 5.
- [ ] A branch está atualizada com a `develop` (sem conflitos pendentes).
- [ ] A descrição do PR explica o que foi feito e referencia a Issue (ex: `Closes #12`).
- [ ] Não deixei `console.log` ou código de teste esquecido.

---

## 9. Dúvidas comuns

**"Posso codar direto na `develop`?"**
Não. Sempre crie uma branch a partir de uma Issue.

**"Preciso esperar outro módulo ficar pronto pra começar o meu?"**
Não necessariamente. Combine com o time o "contrato" (quais dados o endpoint espera e devolve) e use dados fictícios para testar enquanto o outro módulo não está pronto.

**"Minha branch ficou com conflito, e agora?"**
Rode `git pull origin develop` dentro da sua branch, resolva os trechos marcados como conflito no editor, salve, e faça um novo commit. Se travar, chame o time antes de forçar qualquer coisa.

**"Onde eu vejo o que falta fazer?"**
No Project (Kanban) do repositório, aba "Projects" — cada card é uma Issue.
