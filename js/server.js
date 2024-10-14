function server(object){
const url = object.url
const method = object.method

 if(method==="GET"){
    if(url==="my-server/api/logIn"){
        login(clik);
        return { status: 200, message: "Login successful" };
    }
    if(url==="my-server/api/signUp"){
        addNewuser(name,password)
        return { status: 200, message: "User added successfully" };
    }
    if (url=== "my-server/api/contact"){
        addcontact(name,phone);
        return { status: 200, message: "Contacts retrieved successfully" };
    }

 }
 else if (method==="POST"){
    if(url==="my-server/api/users"){
        gettAllUser()
        return { status: 200, message: "Users retrieved successfully" };
    }
    if(url==="my-server/api/getContact"){
        getAllContact()
        return { status: 200, message: "Contacts retrieved successfully" };
    }
 }
}

