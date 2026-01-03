const tasks = [
  {
    id: 1,
    title: "Implementar tela de listagem de tarefas",
    label: "frontend",
    createdAt: "21/08/2024",
    completed: false,
  },
  {
    id: 2,
    title: "Criar endpoint para cadastro de tarefas",
    label: "backend",
    createdAt: "21/08/2024",
    completed: false,
  },
  {
    id: 3,
    title: "Implementar protótipo da listagem de tarefas",
    label: "ux",
    createdAt: "21/08/2024",
    completed: true,
  },
];

const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");
const taskForm = document.getElementById("task-form");
const taskNameInput = document.getElementById("task-name");
const taskLabelInput = document.getElementById("task-label");

const formatCounter = (count) =>
  `${count} tarefa${count === 1 ? "" : "s"} concluída${count === 1 ? "" : "s"}`;

const renderTasks = () => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("article");
    card.className = `task-card${task.completed ? " completed" : ""}`;

    const info = document.createElement("div");
    info.className = "task-info";

    const title = document.createElement("h2");
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";

    const tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = task.label;

    const date = document.createElement("span");
    date.textContent = `Criado em: ${task.createdAt}`;

    meta.append(tag, date);
    info.append(title, meta);
    card.append(info);

    if (task.completed) {
      const check = document.createElement("span");
      check.className = "checkmark";
      check.textContent = "✓";
      check.setAttribute("aria-label", "Tarefa concluída");
      card.append(check);
    } else {
      const button = document.createElement("button");
      button.className = "complete-button";
      button.type = "button";
      button.textContent = "Concluir";
      button.addEventListener("click", () => markTaskCompleted(task.id));
      card.append(button);
    }

    taskList.append(card);
  });

  updateCounter();
};

const updateCounter = () => {
  const completedCount = tasks.filter((task) => task.completed).length;
  taskCounter.textContent = formatCounter(completedCount);
};

const markTaskCompleted = (taskId) => {
  const task = tasks.find((item) => item.id === taskId);
  if (!task || task.completed) return;
  task.completed = true;
  renderTasks();
};

const getToday = () => {
  const today = new Date();
  return today.toLocaleDateString("pt-BR");
};

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskNameInput.value.trim();
  const label = taskLabelInput.value.trim();

  if (!title || !label) return;

  tasks.unshift({
    id: Date.now(),
    title,
    label,
    createdAt: getToday(),
    completed: false,
  });

  taskForm.reset();
  taskNameInput.focus();
  renderTasks();
});

renderTasks();
