const http=require('http')
const server=http.createServer((res,req)=>{
 if(res.url=== '/')
    {
        req.end('hi')
    }
  if(res.url==='/about')
    {
        req.end('IM praveen')
    }  
    req.end(`
        <h1><Oops/h1>
        <p>Im good here</p>
        <a href="/">Go to the amazon store</a>`)
})
_1=4;
console.log(_1)
server.listen(5000) 