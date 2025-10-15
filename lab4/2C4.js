async function fetchPendingTasks(apiUrl) {
    try {
        const apiResponse = await fetch(apiUrl);
        const tasksData = await apiResponse.json();

        const incompleteTasks = [];
        for (let index = 0; index < tasksData.length; index++) {
            if (!tasksData[index].completed) {
                incompleteTasks.push(tasksData[index]);
            }
        }

        return incompleteTasks;
    } catch {
        throw new Error("Ошибка получения задач");
    }
}

(async () => {
    try {
        const pendingItems = await fetchPendingTasks("https://jsonplaceholder.typicode.com/todos");

        console.log("Задачи в процессе выполнения:");
        console.log(pendingItems);
    } catch {
        console.log("Не удалось загрузить задачи");
    }
})();