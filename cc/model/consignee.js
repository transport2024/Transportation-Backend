const mongoose = require('mongoose')

const consigneeSchema = mongoose.Schema({
	name: {
		type: String
	},
	address: {
		type: String
	},
	place: {
		type: String
	},
	contactPerson: {
		type: String
	},
	phone: {
		type: Number
	},
	gstno: {
		type: String
	},
	mail: {
		type: String
	},
	transport: {
		type: String
	}
})

module.exports = mongoose.model('consignee', consigneeSchema)
