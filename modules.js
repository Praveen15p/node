// types of modules
// os module
// path module
// fs module
// http module

const os=require('os')

// const user=os.userInfo()
// console.log(user)
// console.log(`the value of time is ${os.uptime()} seconds`)

const cu={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freemem:os.freemem()
}
console.log(cu);