const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
});
const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};


// {
//     "name": "Ayushi",
//     "email": "Ayushi12@gmail.com",
//     "password": "1234",
//     "address": {
//       "street": "no-4",
//       "city": "Jhansi",
//       "state": "U.P",
//       "country": "India",
//       "zip": "284204"
//     }
//   }