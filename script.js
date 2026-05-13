
model = {
    tasks: [], // заменяем MOCK_TASKS на пустой массив

    addTask(title) {
        const isDone = false
        const id = Math.random()

        const newTask = { title, isDone, id }
        // то же, что { title: title, isDone: isDone, id: id }

        this.tasks.push(newTask)

        view.renderTasks(model.tasks) // Обновляем представление
    },
}

// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
    init() {
        this.renderTasks(model.tasks)
    },

    renderTasks(tasks) {
        const list = document.querySelector('.list')

        let tasksHTML = ''

        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i]

            tasksHTML += `
        <li id="${task.id}" class="${task.isDone ? 'done' : ''}">
          <b class="task-title">${task.title}</b>
          <button class="delete-button" type="button">Удалить 🗑</button>
        </li>
      `
        }

        list.innerHTML = tasksHTML
    },
}

    // Функция инициализации
    function init() {
    view.init()
    // здесь может быть код инициализации других модулей
}

// Вызов функции инициализации при загрузке страницы
init()

// обработка действий пользователя, обновление модели
const controller = {}
