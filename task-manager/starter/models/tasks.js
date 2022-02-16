const mongoose = require('mongoose');

//ver 1.0
// const TaskSchema = new mongoose.Schema({
//     name: String, complete: Boolean
// })

// random will be ignore if we send it 
// {
// 	"name":"sogo",
// 	"complete":true,
//     "random":"random"
// }
// automatically change false to "false"，change "0" to false
// {
// 	"name":false,
// 	"complete":"0"
// }

// ver 2.0
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name must be at least 20 characters']
    },
    complete: {
        type: Boolean,
        default: false,
    }
})


module.exports = mongoose.model('Task', TaskSchema);