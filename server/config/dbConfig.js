const mongoose = require('mongoose');
const chalk = require('chalk');

const uri = 'mongodb://root:1q2w3e4r5t@ds037518.mlab.com:37518/grpc_demo';
module.exports = {
    connectionString: uri
}

// logging mongoDb connection
mongoose.connection.on('connected', function() {
    console.log(chalk.green('MongoDB connected @ ds037518.mlab.com:37518/grpc_demo'));
});

mongoose.connection.on('error', function(err) {
    console.log(chalk.red('MongoDB error: ' + err));
});