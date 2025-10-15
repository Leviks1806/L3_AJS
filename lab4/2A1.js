function retrievePosts(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Ошибка загрузки данных");
            }
            return response.json();
        })
        .then(postsList => {
            return postsList.sort((first, second) => first.title.length - second.title.length);
        });
}

retrievePosts('https://jsonplaceholder.typicode.com/posts')
    .then(sortedPosts => {
        console.log('Отсортированные посты по размеру заголовка:');
        console.log(sortedPosts);
    })
    .catch(() => {
        console.error("Загрузка постов не выполнена");
    });