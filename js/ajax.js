class Fajax{
    open(method,url){
        this.method=method;
        this.url=url;
        this.onload;
    }
    send(){
        server(this);
    }
}
function chekuser(){
    let y = new Fajax();
    y.onload = function () {
        
        addNewuser(name,password)
    }
    y.open("GET", "my-server/api/users")
    y.send();
}
function adduser(){
    let y = new Fajax();
    y.onload = function () {
        
        addNewuser(name,password)
    }
    y.open("POST", "my-server/api/addusers")
    y.send({username:"c"});
}
function addcontact(){

}