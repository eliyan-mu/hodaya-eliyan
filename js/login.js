// if (localStorage.getItem("project3") === null) {
//     let userArray = [];

//     userArray.push({
//         'name': 'guest',
//         'password': '123',
//         id: 1,
//         data: [] });
// 


//     localStorage.setItem("project3", JSON.stringify(userArray));
// }
// localStorage.setItem("currentUser", "");

const users_container = document.getElementById("existing-users");

// for (let i = 0; i < savedUsers.length; i++) {
//     let userDiv = document.createElement("div");
//     let userObj = savedUsers[i];

//     userDiv.innerText = userObj["name"];
//     userDiv.addEventListener("click", function () { showPasswordCheckSection(userDiv, userObj) });
//     users_container.appendChild(userDiv);
// }

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
            console.log("if1")
        }
        else{
            localStorage.setItem("currentUser",JSON.stringify(newUser));
            app.nav(event)
            // location.href =history.replaceState({}, 'Detail', '#detail');
            // history.replaceState({}, 'Detail', '#detail');
        }
        }
      // history.replaceState({}, 'Detail', '#detail');


}