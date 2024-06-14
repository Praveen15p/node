const http=require('http');
// const server=http.createServer((req,res)=>{
//     console.log(req)
//     res.write('hi! praveen')
//     res.end()
// })
const server=http.createServer((req,res)=>{
  if(req.url==='/')
  {
    res.end('hi!praveen')
  } 
  if(req.url==='/about')
  {
    res.end('hi venkatadri')
  }
  res.end(
    `<p>oops!!</p>
    <h1>we couldnt find your page</h1>
    <a href="/"></a>`
  )
   

})
server.listen(5000)
