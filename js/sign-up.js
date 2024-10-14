


// chekName();



// function chekName(){
//     for(let i=o; i<userArray.length; i++){
//         if(userArray[i]==="namme"){
//             alert("This user name exicted ,please change the Name")
//             break;
//         }
//     }
// }
const form = document.getElementById("myForm");
const enterUser = document.getElementById("enter-new-user");
enterUser.addEventListener("click", signUp);

function signUp(event) {
    event.preventDefault();
    const name = document.getElementById("new-name").value;
    const password = document.getElementById("pass").value;

    if (name === "" || password === "") {
        alert("Please fill out all fields.");
    }

        const newUser = {
            "name": name,
            "password": password  
        };
        
    sendtoserver(newUser, event);
}

function sendtoserver(newUser, event) {
    const userArray = JSON.parse(localStorage.getItem("users")) || [];
    userArray.push(newUser);
    localStorage.setItem("project3", JSON.stringify(userArray));
    localStorage.setItem("currentUser",JSON.stringify(newUser));
    app.nav(event);
    console.log(userArray); 
}