const mongoose = require('mongoose');

const uri = 'mongodb+srv://dokirlens:dokirlens@cluster0.qnytnnl.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})
    .then(db => console.log("DB is connected"))
    .catch(err => console.log(err));

module.exports = mongoose;