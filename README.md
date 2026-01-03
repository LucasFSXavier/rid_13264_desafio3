# Gerenciador de Tarefas - DNC Technologies

Este projeto é um **board de tarefas** simples e responsivo, desenvolvido com **HTML, CSS e JavaScript puro**. Ele permite listar tarefas iniciais, adicionar novas tarefas e marcar tarefas como concluídas, sem recarregar a página.

## 📁 Estrutura do projeto

- `index.html`: estrutura da página e elementos do formulário/lista.
- `style.css`: estilização do layout e responsividade.
- `script.js`: lógica de manipulação das tarefas.

## 🚀 Como funciona

### 1) Estrutura (HTML)
O arquivo `index.html` contém:
- O título do board.
- Um formulário com dois campos (nome da tarefa e etiqueta) e botão de adicionar.
- A seção onde as tarefas são renderizadas.
- O contador de tarefas concluídas.

### 2) Estilos (CSS)
O `style.css` cuida de:
- Cores e tipografia (fonte Rubik).
- Layout responsivo (desktop e mobile).
- Cartões de tarefa, botões e estado concluído (riscado e ícone de check).

### 3) Lógica (JavaScript)
O `script.js` mantém um **array de tarefas** e controla o comportamento:

- **Renderização inicial:** as tarefas são exibidas ao carregar a página.
- **Adicionar tarefa:** ao enviar o formulário, uma nova tarefa é criada e exibida.
- **Concluir tarefa:** ao clicar em “Concluir”, a tarefa muda para o estado final (check + texto riscado).
- **Contador:** o número de tarefas concluídas é atualizado automaticamente.

## 📌 Principais funções do JavaScript

- `renderTasks()` → monta a lista de tarefas na tela.
- `markTaskCompleted(taskId)` → marca uma tarefa como concluída.
- `updateCounter()` → atualiza o contador de tarefas concluídas.
- `getToday()` → gera a data atual no formato brasileiro.
- `formatCounter(count)` → ajusta o texto do contador com singular/plural.

## ✅ Como executar

Basta abrir o arquivo `index.html` no navegador.

Se quiser rodar com um servidor local:

```bash
python -m http.server 8000
```
Depois acesse: `http://localhost:8000`

---

Feito para o desafio **DNC Technologies**.
