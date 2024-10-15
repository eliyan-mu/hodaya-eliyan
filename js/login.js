if (localStorage.getItem("project3") === null) {//TODO
    let userArray = [];

    userArray.push({
        'name': 'guest',
        'password': '123',
        'id':1
    });

    localStorage.setItem("project3", JSON.stringify(userArray));//TODO
}

const users_container = document.getElementById("existing-users");
document.getElementById("enterlog").addEventListener("click", login)

function login(event) {
    const savedUsers = JSON.parse(localStorage.project3);
    console.log('savedUsers: ', savedUsers);

    let name = document.getElementById("name").value;
let password = document.getElementById("password").value;
    const newUser = savedUsers.find((user)=>user.name === name && user.password === password);
    console.log('newUser: ', newUser);
    // let wrongPassParagraph = document.createElement("p");
    // wrongPassParagraph.innerText = "wrong password";
    // wrongPassParagraph.style.display = "none";
    
        if (!newUser) {
            let wrongPassParagraph = document.createElement("p");
            wrongPassParagraph.innerText = "wrong password";
            const existingUsersDiv = document.getElementById("existing-users");
            existingUsersDiv.appendChild(wrongPassParagraph);
            // wrongPassParagraph.style.display = "none";
          
        }
        else{
            localStorage.setItem("currentUser",JSON.stringify(newUser));//TODO
            app.nav(event)
            // location.href =history.replaceState({}, 'Detail', '#detail');
            // history.replaceState({}, 'Detail', '#detail');
        }
}



        function chekuser(name,password){
            let y = new Fajax();
            y.onload = function (name,password) {
                
                addNewuser(name,password)
            }
            y.open("GET", "my-server/api/users")
            y.send([nsme,password]);
        }
