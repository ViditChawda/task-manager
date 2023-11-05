require('../src/db/mongoose')
const User = require('../src/models/user')

// 65243d77570ec1eb1163912e

User.findByIdAndUpdate('65243d77570ec1eb1163912e', {
    name: 'Vidit',
    age: 21
}).then((user) => {
    console.log(user)
    return User.countDoucments({ name: 'chawda', age: 1 })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})

const upadteAgeAndCount = async(id , age) => {
    const user = await User.findByIdAndUpdate(id) 
}

