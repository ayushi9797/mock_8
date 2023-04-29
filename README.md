## Food Delivery App Backend 🍜

# Database

![mongo](https://user-images.githubusercontent.com/112810259/235293299-0a594f6a-7cef-4977-8920-7df971f9300f.jpeg)

# requirements

- Mvc Structure for application

# Routes

# UserRoutes

- Register Route

` http://localhost:8080/api/register/`

- LoginRoutes

`http://localhost:8080/api/login/`

# Resturant routes Crud routes

- This endpoint should return a list of all available restaurants.

` http://localhost:8080/api/restaurants/`

- This endpoint should return a list of all available restaurants.

`http://localhost:8080/api/api/restaurants/:id`

- This endpoint should return the details of a specific restaurant identified by its ID.

`http://localhost:8080/api/restaurants/:id/menu`

This endpoint should return the menu of a specific restaurant identified by its ID.

`http://localhost:8080/api/restaurants/:id/menu`

This endpoint should return the menu of a specific restaurant identified by its ID. and delete the menu /menu

`http://localhost:8080/api/restaurants/:id/menu/:id`

# Order Api

- This endpoint should return the details of a specific order identified by its ID.
  `http://localhost:8080/api/orders/:id`

- This endpoint should allow users to update the status of a specific order identified by its ID.
  `http://localhost:8080/api/orders/:id`

  
@ 
``http://localhost:6500/api/restaurants``


http://localhost:6500/644cd0bec8b73e1ad89a58c0/menu
{
  "name": "dsfsdf",
  "description": " String",
  "price": 123,
  "image": "String",
  "_id": "644cd0bec8b73e1ad89a58c1"
}




```http://localhost:6500/api/orders/644cecc7a2e8ea52e1786ecd```
{
  "user": "644cd2f8ad0195c03dd06a19",
  "restaurant": "644cd2f8ad0195c03dd06a19",
  "items": [
    {
      "name": "abc",
      "price": 1231,
      "quantity": 2
    }
  ],
  "totalPrice": 12323,
  "deliveryAddress": {
    "street": "Stradfasdfing",
    "city": "String",
    "state": "String",
    "country": "String",
    "zip": "String"
  }
}
