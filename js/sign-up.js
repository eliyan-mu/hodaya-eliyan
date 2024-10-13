


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
    const name = document.getElementById("name").value;
    const password = document.getElementById("pass").value;

    if (name === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    const newUser = {
        "name": name,
        "password": password  
    };

    sendtoserver(newUser);
}

function sendtoserver(newUser) {
    const userArray = JSON.parse(localStorage.getItem("users")) || [];
    userArray.push(newUser);
    localStorage.setItem("users", JSON.stringify(userArray));
    console.log(userArray); 
}