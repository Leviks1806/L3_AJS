function obtainUsers(apiUrl) {
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Сбой загрузки");
            return response.json();
        })
        .then(usersData => {
            const userProfiles = [];
            for (let index = 0; index < usersData.length; index++) {
                const profile = usersData[index];
                userProfiles.push({
                    id: profile.id,
                    name: profile.name,
                    username: profile.username,
                    email: profile.email,
                    phone: profile.phone
                });
            }
            return userProfiles;
        });
}

obtainUsers("https://jsonplaceholder.typicode.com/users")
    .then(profilesList => {
        console.log("Профили пользователей:");
        console.log(profilesList);
    })
    .catch(() => {
        console.log("Не удалось загрузить профили");
    });