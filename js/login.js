if (localStorage.getItem("project3") === null) {
    let userArray = [];

    userArray.push({
        'name': 'guest',
        'password': '123',
        'id':1
    });


    localStorage.setItem("project3", JSON.stringify(userArray));
}
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
            console.log("if1")
        }
        else{
            localStorage.setItem("currentUser",JSON.stringify(newUser));
            app.nav(event)
            // location.href =history.replaceState({}, 'Detail', '#detail');
            // history.replaceState({}, 'Detail', '#detail');
        }
      // history.replaceState({}, 'Detail', '#detail');


}
// function checkPassword(user_div, password, enteredPassword) {
//     let wrongPassParagraph = document.createElement("p");
//     wrongPassParagraph.innerText = "wrong password";
//     wrongPassParagraph.style.display = "none";
//     user_div.appendChild(wrongPassParagraph);

//     if (password === enteredPassword) {
//         document.getElementById("entry-btn").style.display = "block";
//         wrongPassParagraph.style.display = "hidden";
//     }
//     else {
//         wrongPassParagraph.style.display = "block";
//     }
// }
// function showPasswordCheckSection(user_div, userObject) {
//     if (user_div.children.length === 0) {
//         let passwordContainer = document.createElement("div");
//         passwordContainer.innerText = "Enter Your Password:";
//         let passwordForm = document.createElement("input");
//         let entryBtn = document.createElement("button");

//         entryBtn.setAttribute("id", "entry-btn")
//         entryBtn.style.display = "none";
//         entryBtn.innerText = "Enter";
//         entryBtn.onclick = function () {
//             localStorage["currentUser"] = userObject.name;
//             // location.href =history.replaceState({}, 'Detail', '#detail');
//             history.replaceState({}, 'Detail', '#detail');

//         };

//         passwordForm.setAttribute("type", "password");
//         passwordForm.setAttribute("name", "password");
//         passwordForm.setAttribute("pattern", "/\w{6,16}/");
//         passwordForm.setAttribute("value", "");
//         passwordForm.addEventListener("change", function () { checkPassword(user_div, userObject.password, passwordForm.value) });

//         passwordContainer.appendChild(passwordForm);
//         passwordContainer.appendChild(entryBtn);
//         user_div.appendChild(passwordContainer);
//     }

// }

