const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: String,
  restaurant: String,
  items: [
    {
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  totalPrice: Number,
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    country: String,
    zip: String,
  },
  status: String, // e.g, "placed", "preparing", "on the way", "delivered"
});
const OrderModel = mongoose.model("Orders", OrderSchema);

module.exports = {
  OrderModel,
};


// { 
//     "user": "String",
//    "restaurant": "String",
//    "items": [
//       {
//         "name": "String",
//         "price": 12344,
//         "quantity": 090,
//       },
//     ],
//     "totalPrice":1234,
//     "deliveryAddress": {
//       "street":"String",
//       "city": "String",
//       "state": "String",
//      "country":"String",
//       "zip":" String",
//     },
//   }