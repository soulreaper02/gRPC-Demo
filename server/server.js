'use strict'

const grpc = require('grpc');
const proto = grpc.load('../proto/user.proto');
const mongoose = require('mongoose');
const server = new grpc.Server();
const userService = require('../service/userService');

const dbConfig = require('./config/dbConfig');
mongoose.connect(dbConfig.connectionString, { useNewUrlParser: true });

server.addService(proto.user.UserService.service, {
    List(call, callback) {
        userService.list(callback);
    },

    get(call, callback) {
        let payload = {
            criteria: {
                employee_id: call.request.user_id
            },
            projections: {
                _id: 0, __v: 0
            },
            options: {
                lean: true
            }
        };
        let user = new userService(payload);
        user.fetch(callback);
    },

    Insert(call, callback) {
        let user = new userService({
            user_id: call.request.user_id,
            name: call.request.name,
            email: call.request.email
        });
        user.add(callback);
    },

    remove(call, callback) {
        const criteria = {
            user_id: call.request.user_id
        };
        let user = new userService(criteria);
        user.remove(criteria, callback);
    },
});

mongoose.connection.on('connected', function () {
server.bind('0.0.0.0:50502', grpc.ServerCredentials.createInsecure()); // Running gRPC instance without SSL.
server.start();
console.log('grpc server running on port:', 'localhost:50502');
});

