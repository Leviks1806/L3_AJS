async function retrieveAndArrangePosts(apiUrl) {
    try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) {
            throw new Error("Ошибка загрузки");
        }

        const postsData = await apiResponse.json();
        return postsData.sort((firstPost, secondPost) => firstPost.title.length - secondPost.title.length);
    } catch {
        throw new Error("Ошибка при получении информации");
    }
}

(async () => {
    try {
        const arrangedPosts = await retrieveAndArrangePosts("https://jsonplaceholder.typicode.com/posts");
        console.log("Посты, упорядоченные по длине заголовка:");
        console.log(arrangedPosts);
    } catch {
        console.log("Загрузка постов не удалась");
    }
})();