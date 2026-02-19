const mongoose = require('mongoose');
const mongoose_delete = require('mongoose-delete');

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,

    },
    address: String,
    phone: String,
    email: String,
    image: String,
    description: String,
},
    {
        timestamps: true, // createAt, UpdateAt
        // Sử dụng static method để tự khai báo thêm 1 số method không đươc cung cấp sẵn trong thư viện của mongoose
        // thường thì trong thư viện đã cung cấp những gì ta cần, ở 1 số truy vấn đặc thù mới cần dùng đến static method
        // statics: {
        //     findByName(name){
        //         return this.findByName({name: new RegExp(name, 'i')});
        //     }
        // }
    }
);
customerSchema.plugin(mongoose_delete, { overrideMethods: 'all' });
const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;