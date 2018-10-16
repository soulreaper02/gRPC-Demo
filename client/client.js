const grpc = require('grpc');
const protoPath = require('path').join(__dirname, '../', 'proto');
const proto = grpc.load({root: protoPath, file: 'user.proto'});
const client = new proto.user.UserService('localhost:50502', grpc.credentials.createInsecure());

client.List({}, (error, response) => {
    if (!error) {
       console.log("Response : ", response)
    }
    else {
       console.log("Error:", error.message);
    }
 });

 client.get({
    user_id: 860294
 }, (error, response) => {
    console.log("error, response : ", error, response)
    if (!error) {
       console.log("Response : ", response)
    }
    else {
       console.log("Error:", error.message);
    }
 });

 client.remove({
    user_id: 178646
 }, (error, response) => {
    if (
       !error
    ) {
       console.log("Response : ", response)
    }
    else {
       console.log("Error:", error.message);
    }
 });

 client.Insert({
    user_id: parseInt(Math.random() * 1000000),
    name: "Amit kumar",
    email: "amit.kumar@gmail.com"
 }, (error, response) => {
    if (
       !error
    ) {
       console.log("Response : ", response)
    }
    else {
       console.log("Error:", error.message);
    }
 });