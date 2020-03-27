# Food Truck BackEnd Documentation

## Base URL
```
https://authentication-backend-lambda.herokuapp.com/
```


## Auth Routes
Notes: 
-The app is using JSON Web Token that is stored as a cookie, which keeps a user logged in for 1 hour. Note: the register endpoint does not create the cookie - the login route does.
-The "role" must be either 'diner' or 'operator'. Lowercase letters.
-username must be unique
-favoriteTruck and ownedTruck are integers that correspond to truck IDs. They are meant to be updated after registration. 'favoriteTruck' is for a 'diner', 'ownedTruck' is for an 'operator'.

|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Register**  | /api/auth/register  | post | username, email, password, role (All required, all strings); 
favoriteTruck, ownedTruck (Both , initially null) | welcome message  |
| **Login**  | /api/auth/login  | post | username and password  | an authToken and welcome message  |


## User Routes
Note: 
-An edited user object does not return truck info, but if you receive any object, it has successfully updated in the database.

|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Get All Users**  | /api/users  | get  | NA  | array of users objects with id, username, and role |
| **Get All Diners**  | /api/users/diners  | get  | NA  | array of diner objects with id, username, role, and favoriteTruck |
| **Get Diner by Id**  | /api/users/diners/:id | get  | a param id | single diner object |
| **Get All Operators**  | /api/users/operators  | get  | NA | array of operator objects with id, username, role, and ownedTruck |
| **Get Operator by Id**  | /api/users/operators/:id | get  | a param id  | single operator object  |
| **Delete User**  | /api/users/:id  | del | a param id  | a confirmation message  |
| **Edit User**  | /api/users/:id | put | a param id, an updated key/value pair  | edited User object |


## Truck Routes
Notes: 
-truckName must be unique and description, and images are optional.
-Seed data does not include images.
|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Get All Trucks**  | /api/trucks  | get  | NA  | array of truck objects, with truckName, imageOfTruck, cuisineType, 
location, itemName, description, imageOfItem, itemPrice (string)  |
| **Get Truck by Id**  | /api/trucks/:id  | get  | a param id  | single truck object  |
| **Delete Truck**  | /api/trucks/:id  | del | a param id  | a confirmation message  |
| **Create Truck**  | /api/trucks/ | post | truckName, cuisineType, location, itemName, itemPrice | new truck object  |
| **Edit Truck**  | /api/trucks/:id | put | a param id, an updated key/value pair  | edited truck object  |
