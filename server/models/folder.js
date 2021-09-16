const model_base_item = require("./base_item")
const mongoose = require("mongoose")

const schema_folder = mongoose.Schema({
	folder_name: String,
	items: [{type: mongoose.Schema.Types.ObjectID, ref: "base_item"}]
})

const folder = model_base_item.discriminator("folder", schema_folder)

module.exports = folder




