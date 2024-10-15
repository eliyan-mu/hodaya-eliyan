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
        "password": password,
        "data":[]
    };

     adduser(newUser, event);

        
    // sendtoserver(newUser, event);
}

function adduser(user, event){
    let y = new Fajax();
    y.onload = function () {
        console.log("hi");
        // addNewuser(name,password)
        localStorage.setItem("currentUser",JSON.stringify(user));//TODO
        app.nav(event)
    }
    y.open("POST", "my-server/api/signUp")
    y.send(user);
    console.log('y: ', y);
    
    console.log('user: ', user);
}
// function addcontact(){

// }
