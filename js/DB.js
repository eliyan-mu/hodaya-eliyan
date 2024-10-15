    function addcontact(name,phone){
        let obj={name,phone};
        let arr=JSON.parse(localStorage.getItem("contact")) ||[];
        obj.id=arr.length+1;
        arr.push(obj);
        localStorage.setItem('contact',JSON.stringify(arr));
        currentUser = JSON.parse(localStorage.getItem('currentUser'));
        currentUser.data.push(obj);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));


    }
    function removecontact(num){
        let arrship=JSON.parse(localStorage.getItem("contact"));
        for(let i in arr){
            if(parseInt(arr[i].id)===num){
                arr[i]={"detail":"not found"}
            }
        }
        localStorage.setItem('contact',JSON.stringify(arr));
    }
    function login(event) {
        const savedUsers = JSON.parse(localStorage.project3);
        console.log('savedUsers: ', savedUsers);
    
        let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
        const newUser = savedUsers.find((user)=>user.name === name && user.password === password);
        console.log('newUser: ', newUser);
    
            if (!newUser) {
                let wrongPassParagraph = document.createElement("p");
                wrongPassParagraph.innerText = "wrong password";
                const existingUsersDiv = document.getElementById("existing-users");
                existingUsersDiv.appendChild(wrongPassParagraph);
                console.log("if1")
            }
            else{
                localStorage.setItem("currentUser",JSON.stringify(newUser));
                app.nav(event)
            }
    
    
    }
    
    
//sign-up
function addNewuser(newUser){
    const savedUsers = JSON.parse(localStorage.getItem("project3"))||[];
    
    const findUser = savedUsers.find((user)=>user.name === newUser.name );
if(findUser){
return "user exicted, change your name"
}
else{
    
    addid(newUser);
    savedUsers.push(newUser)
    localStorage.setItem("project3", JSON.stringify(savedUsers));
    return {message:"Successd", newUser}

}
}
    // chek if user exicted if not you have to add it 
    // function addNewuser(name,password){
    //     if(JSON.parse(window.localStorage.getItem("users"))){
    //         const users = JSON.parse(window.localStorage.getItem("users"));
    //         for(let i=0; i<users.length; i++){
    //             if(users[i]["name"] === name){
    //                 alert("There is already exited");
    //             }
    //         }
    //         const newuser = new user(name, password);
    //         users.push(newuser); 
    //         window.localStorage.setItem("users",JSON.stringify(users));
    //     }
    //     else{
    //         let users = [new user(name, password)];
    //         window.localStorage.setItem("users",JSON.stringify(users));
    //     }
    // }
//add id to new user in sign up
function addid(user){
    let arr=JSON.parse(localStorage.getItem("users"))||[];
    user.id=arr.length;
}

function getAllContact(){
    let arr=JSON.parse(localStorage.getItem("contact"));
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}

function getAllUsers(){
    let arr=JSON.parse(localStorage.getItem("users"));
    for(let i=0;i<arr.length;i++){
        console.log(arr[i])
    }
}
function printcurrent(){
    console.log(JSON.parse(localStorage.getItem("currentUser")));
}

   