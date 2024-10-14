
    // add contact עשיתי
    // remove contact עשיתי
    // add user עשיתי
    // get  all user עשיתי
    // get all cantact עשיתי
    // current user עשיתי
    // chek users if they exicit>>you are already exict 
    // if name=name >> you have to chnage the name 

    // class user{
    //     constructor(name,password){
    //         this.name=name;
    //         this.password=password;
    //         this.contact=[];
    //     }
    // }

    // class contact{
    //     constructor(name,phone){
    //         this.name=name;
    //         this.phone=phone;
    //     }
    // }
    function addcontact(name,phone){
        let obj={name,phone};
        let arr=JSON.parse(localStorage.getItem("contact"));
        obj.id=arrpeople.length+1;
        arr.push(obj);
        localStorage.setItem('contact',JSON.stringify(arr));
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
//sign-up

    // chek if user exicted if not you have to add it 
    function addNewuser(name,password){
        if(JSON.parse(window.localStorage.getItem("users"))){
            const users = JSON.parse(window.localStorage.getItem("users"));
            for(let i=0; i<users.length; i++){
                if(users[i]["name"] === name){
                    alert("There is already exited");
                }
            }
            const newuser = new user(name, password);
            users.push(newuser); 
            window.localStorage.setItem("users",JSON.stringify(users));
        }
        else{
            let users = [new user(name, password)];
            window.localStorage.setItem("users",JSON.stringify(users));
        }
    }
//add id to new user in sign up
function addid(user){
    let arr=JSON.parse(localStorage.getItem("users"));
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

   