
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://viditchawda301:vidit723@cluster0.pv2nsge.mongodb.net/?retryWrites=true&w=majority');
}

