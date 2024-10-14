
    // add contact
    // remove contact
    // add user עשיתי
    // get  all user
    // get all cantact
    // current user
    // chek usere if they exicit>>yiu are already exict 
    // if name=name >> you have to chnage the name 
    // 


    class user{
        constructor(name,password){
            this.name=name;
            this.password=password;
            this.contact=[];
        }
    }

    class contact{
        constructor(name,phone){
            this.name=name;
            this.phone=phone;
        }
    }


    // chek if user exicted if not yu have to add it 
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

function getAllContact(){
    
}

   