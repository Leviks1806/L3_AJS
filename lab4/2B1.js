function fetchUserData(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Ошибка загрузки");
            return response.json();
        })
        .then(userData => {
            const usersCollection = [];
            for (let i = 0; i < userData.length; i++) {
                const user = userData[i];
                usersCollection.push({
                    id: user.id,
                    name: user.name,
                    username: user.username,
                    email: user.email,
                    phone: user.phone
                });
            }
            return usersCollection;
        });
}

fetchUserData("https://jsonplaceholder.typicode.com/users")
    .then(userList => {
        console.log("Коллекция пользователей:");
        console.log(userList);
    })
    .catch(() => {
        console.log("Ошибка получения пользователей");
    });