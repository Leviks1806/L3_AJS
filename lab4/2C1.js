function retrievePendingItems(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Произошла ошибка");
            return response.json();
        })
        .then(tasksList => {
            const pendingItems = [];
            for (let index = 0; index < tasksList.length; index++) {
                if (!tasksList[index].completed) pendingItems.push(tasksList[index]);
            }
            return pendingItems;
        });
}

retrievePendingItems("https://jsonplaceholder.typicode.com/todos")
    .then(pendingList => {
        console.log("Список ожидающих задач:");
        console.log(pendingList);
    })
    .catch(() => {
        console.log("Загрузка списка задач не удалась");
    });