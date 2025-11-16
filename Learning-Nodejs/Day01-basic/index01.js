// leaning Node js so now we can downlaod in cmd  
// node -v use to install or node js  
// npm init -y to install in  init means initilize mein ek node enviro create krna chata hun y mean yes 

// run cmd is node index.js
console.log("Hello Uzair")

import http from 'http';
const PORT = 6166 ;

const server = http.createServer((request,response)=>{
    // response.end(`hello from the server side..! ${obj.name}`)
    // response.writeHead(200,{'Content-Type':'application/json'})
    console.log(request.url);
    console.log(request.method);
    if(request.url === '/' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify({message:"hello from the server side..!"}))
    }else if(request.url === '/about' && request.method === 'GET'){
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify({message:"hello from the about page..!"}))
    }else if (request.url === '/user' && request.method === 'POST'){
        const obj= {
            name:"uzair",
            age:20,
            city:"KPK"
        }
        response.writeHead(200,{'Content-Type':'application/json'})
        response.end(JSON.stringify(obj))
    }else{
        response.writeHead(404,{'Content-Type':'application/json'})
        response.end(JSON.stringify({message:"page not found..!"}))
        }
})
server.listen(PORT,()=>{
    console.log("server is running on http://localhost:6166")
})