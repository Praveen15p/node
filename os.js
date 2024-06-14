const os=require('os')
const name=os.userInfo()
// console.log(name)
console.log(`the system uptime is ${os.uptime()} seconds`)
// const current={  
//     name:os.type(),
//     release:os.release(),
//     total:os.totalmem(),
//     free:os.freemem(),
// }
// console.log(current);