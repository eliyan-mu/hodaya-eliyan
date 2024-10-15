class Fajax{
    open(method,url){
        this.method=method;
        this.url=url;
    }
    send(body){
        console.log('body: ', body);
        this.body=body;
        server(this);
        this.onload();
    }
}


