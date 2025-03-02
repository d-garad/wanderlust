const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PassportLocalMongooe = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
    }
});

userSchema.plugin(PassportLocalMongooe);

module.exports = mongoose.model("User", userSchema);