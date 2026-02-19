
const { uploadSingleFile } = require('../services/fileService');
const { createCustomerService, createArrayCustomerService, getAllCustomersService, putUpdateCustomerService, deleteCustomerService } = require('../services/customerService');
module.exports = {
    postCreateCustomer: async (req, res) => {
        let { name, address, phone, email, description } = req.body;
        let imageUrl = "";
        if (!req.files || Object.keys(req.files).length === 0) {
        } else {
            let result = await uploadSingleFile(req.files.image)
            imageUrl = result.path;
        }
        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    postCreateArrayCustomer: async (req, res) => {
        let customers = await createArrayCustomerService(req.body.customers);
        return res.status(200).json({
            EC: 0,
            data: customers
        })
    },
    getAllCustomers: async (req, res) => {
        let customers = await getAllCustomersService();
        return res.status(200).json({
            EC: 0,
            data: customers
        })
    },
    putUpdateCustomer: async (req, res) => {
        let { id, name, email, address } = req.body;
        let customer = await putUpdateCustomerService(id, name, email, address);
        return res.status(200).json({
            EC: 0,
            data: customer
        })
    },
    deleteCustomer: async (req, res) => {
        let result = await deleteCustomerService(req.body.id);
        return res.status(200).json({
            EC: 0,
            data: result
        })
    }

}