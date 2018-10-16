let userModel = require('../models/user');
let User = class {
    constructor(payload) {
        this.payload = payload;
    }
    static list(cb){
        const criteria = {};
        const projections = {
            _id: 0,
            __v: 0
        };
        const options = {
            lean: true
        }
        userModel.find(criteria, projections, options, cb);
    }

    add(cb) {
        new userModel(this.payload).save(cb);
    }

    fetch(cb) {
        const criteria = this.payload.criteria;
        const projections = this.payload.projections;
        const options = this.payload.options;
        userModel.find(criteria, projections, options, cb);
    }

    remove(cb) {
        const criteria = this.payload;
        userModel.remove(criteria, cb);
    }
};

module.exports = User;
