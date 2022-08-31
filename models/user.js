var mongoose = require('mongoose');
const crypto = require('crypto');
const uuidv1 = require('uuidv1/v1');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim: true
    },
    lastname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    userinfo: {
        type: String,
        required: true,
        trim: true
    },
    encry_password: {
        type: String,
        required: true,
        trim: true
    },
    salt: String,
    role: {
        type: String,
        required: true,
        trim: true
    },
    purchases: {
        type: Array,
        default: []
    },
});

userSchema.virtual("password")
    .set(function(password)){
        this._password = password
        this.salt = uuidv1();
        this.encry_password = this.securePassword(password);
    })
    .get(function(){
        return this._password
    })

userSchema.method = {
    autheticate:function(plainpassword){
        return this.securePassword(plainpassword) === this.encry_password
    },
    securePassword: function(plainpassword){
        if(!password) return "";
        try {
            return crypto
                    .createHmac("sha256",this.salt)
                    .update(plainpassword)
                    .digest("hex");
                    
        } catch (error) {
            return "";
        }
    }
}

module.exports = mongoose.model("User",userSchema);