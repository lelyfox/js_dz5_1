let users = {}

for (let i = 1; i <= 5; i++){
    let userName = prompt('Введите имя пользователя');
    let userAge = +prompt('Введите возраст пользователя');
    
    let person = {
        name: userName,
        age: userAge
    }

    users[i] = person
    console.log(`Пользователь - ${i}`);
    console.log(`Имя - ${users[i]['name']}`);
    console.log(`Возраст - ${users[i]['age']}`);    
}

console.log(users);





