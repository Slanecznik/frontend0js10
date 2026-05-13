const MOCK_TASKS = [
    { id: 1, title: 'Изучить паттерн MVC', isDone: false },
    { id: 2, title: 'Подготовить моковые данные', isDone: true },
]

// хранение данных, бизнес-логика
const model = {
    tasks: MOCK_TASKS
}

// отображение данных: рендер списка задач, размещение обработчиков событий
const view = {
    renderTasks(tasks) {

    }
}

// обработка действий пользователя, обновление модели
const controller = {}
