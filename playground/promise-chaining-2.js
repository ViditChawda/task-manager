require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('652be56067c02c3fc7a5911f').then((task) => {
    console.log(task)
})      