function server(object){
    console.log('object: ', object);
const url = object.url
const method = object.method
const body=object.body

 if(method==="GET"){
    if(url==="my-server/api/logIn"){
        login(clik);
        return { status: 200, message: "Login successful" };
    }
    
    if(url==="my-server/api/users"){
        gettAllUser()
        return { status: 200, message: "Users retrieved successfully" };
    }
    if(url==="my-server/api/contact"){
        getAllContact()
        return { status: 200, message: "Contacts retrieved successfully" };
    }
}

else if (method==="POST"){
    if(url==="my-server/api/signUp"){
        const response = addNewuser(body)
        if (response !== "user exicted, change your name")
        object.onload();
        return response;
    }
    // name: any;
    // password: any;
    // data: never[];


if (url=== "my-server/api/contact"){
   const response =addcontact(body.name,body.phone);
    return { status: 200, message: "contact added successfully" };
}
}
}