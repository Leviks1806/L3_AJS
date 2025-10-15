function loadAndArrange(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Возникла проблема...");
            }
            return response.json();
        })
        .then(itemsList => {
            return itemsList.sort((first, second) => {
                if (first.name > second.name) return 1;
                if (first.name < second.name) return -1;
                return 0;
            });
        });
}

loadAndArrange('https://jsonplaceholder.typicode.com/comments')
    .then(arrangedResult => {
        console.log("Отсортированный список комментариев:");
        console.log(arrangedResult);
    })
    .catch(() => {
        console.log("Загрузка не удалась");
    });