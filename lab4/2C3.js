async function fetchAndOrganizeComments(apiUrl) {
    try {
        const apiResponse = await fetch(apiUrl);
        if (!apiResponse.ok) throw new Error("Не удалось загрузить данные");

        const commentsData = await apiResponse.json();
        return commentsData.sort((first, second) => {
            if (first.name > second.name) return 1;
            if (first.name < second.name) return -1;
            return 0;
        });
    } catch {
        throw new Error("Произошла ошибка при обработке комментариев");
    }
}

(async () => {
    try {
        const organizedComments = await fetchAndOrganizeComments("https://jsonplaceholder.typicode.com/comments");
        console.log("Организованные комментарии по алфавиту:");
        console.log(organizedComments);
    } catch {
        console.log("К сожалению, загрузка комментариев не удалась");
    }
})();