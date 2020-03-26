# Food Truck BackEnd Documentation

## Base URL
```
https://authentication-backend-lambda.herokuapp.com/
```


## Auth Routes
The app is using JSON Web Token that is stored as a cookie, which keeps a user logged in for 1 hour. Note: the register endpoint does not create the cookie - the login route does.
|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Register**  | /api/auth/register  | post | username, email, password  | Content  |
| **Login**  | /api/auth/login  | post | Content  | Content  |


## User Routes

|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Get All Users**  | /api/users  | get  | Content  | Content  |
| **Get All Diners**  | /api/users/diners  | get  | Content  | Content  |
| **Get Diner by Id**  | /api/users/diners/:id | get  | Content  | Content  |
| **Get All Operators**  | /api/users/operators  | get  | Content  | Content  |
| **Get Operator by Id**  | /api/users/operators/:id | get  | Content  | Content  |
| **Delete User**  | /api/users/:id  | del | Content  | Content  |


## Truck Routes

|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Get All Trucks**  | /api/trucks  | get  | Content  | Content  |
| **Get Truck by Id**  | /api/trucks/:id  | get  | Content  | Content  |
| **Delete Truck**  | /api/trucks/:id  | del | Content  | Content  |
| **Create Truck**  | /api/trucks/ | post | Content  | Content  |
| **Edit Truck**  | /api/trucks/:id | put | Content  | Content  |


## Menu Routes

|       | Endpoint | Method |  Expects | Returns |
| :--- |   :---:  |  :---: |   :---:  | :---: |
| **Get All Menu Items**  |  /api/menu  | get  | Content  | Content  |
| **Get Menu Item by Id**  | /api/menu/:id  | get  | Content  | Content  |
| **Delete Menu Item**  | /api/menu/:id  | del | Content  | Content  |
| **Create Menu Item**  | /api/menu/ | post | Content  | Content  |
| **Edit Menu Item**  | /api/menu/:id | put | Content  | Content  |