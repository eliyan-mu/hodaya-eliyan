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
    let name = document.getElementById("name").value;
let password = document.getElementById("password").value;
    const onload = function(){
        if (!newUser) {
            let wrongPassParagraph = document.createElement("p");
            wrongPassParagraph.innerText = "wrong password";
            const existingUsersForm = document.getElementById("existing-users");
            existingUsersForm.appendChild(wrongPassParagraph);
            // wrongPassParagraph.style.display = "none";
          
        }
        else{
            localStorage.setItem("currentUser",JSON.stringify(newUser));//TODO
            app.nav(event)
            // location.href =history.replaceState({}, 'Detail', '#detail');
            // history.replaceState({}, 'Detail', '#detail');
        }}
}



        function chekuser(name,password){
            let y = new Fajax();
            y.onload = function (name,password) {
                
                addNewuser(name,password)
            }
            y.open("GET", "my-server/api/users")
            y.send([nsme,password]);
        }
