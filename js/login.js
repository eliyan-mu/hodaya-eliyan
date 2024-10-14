if (localStorage.getItem("project3") === null) {
    let userArray = [];

    userArray.push({
        'name': 'guest',
        'password': '123',
        'id':1
    });


    localStorage.setItem("project3", JSON.stringify(userArray));
}

const users_container = document.getElementById("existing-users");

document.getElementById("enterlog").addEventListener("click", login)