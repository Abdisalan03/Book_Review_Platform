 
 ## final project NodeJs 
 

# Documentation for Book Review Platform API

## Introduction

Welcome to the API documentation for the Book API. This API provides endpoints for managing books, users, and admin. The API is designed to be simple and easy to use, with clear and concise documentation. 

### Authentication

Most endpoints in the API require authentication using `JSON` Web Tokens (JWT). To authenticate, include the Authorization header in the request with the JWT. The header should be in the format: Bearer <token>, where <token> is the JWT obtained during the login process.

#### **Endpoints**


## Admin Signup

**Endpoint**:

- `POST localhost:5000/admins/signup`

This endpoint is used to create a new admin account. The request should be a POST request with the following parameters:

##### Request body :

| parameter | Type   | Required | Description                |
| --------- | ------ | -------- | -------------------------- |
| name      | String | Yes      | The name of the admin.     |
| email     | String | Yes      | The email of the admin.    |
| Password  | String | Yes      | The password of the admin. |

##### Response :

```js
 {
  "status": 201,
  "message": "Admin created successFully",
  "newAdmin": {
    "id": 2,
    "name": "",
    "email": "Aamin@gmail.com",
    "password": "$2b$10$XrCBl8L/VETAz1ZoNfqMxuBd3alzGRzoBOy9yx5Kgeved83NYYc1W",
    "created": "2023-10-02T03:47:42.765Z",
    "updated": "2023-10-02T03:47:42.765Z"
  }
}
```

### Admin Login

**Endpoint**:

- `POST localhost:5000/admin/login`

This endpoint is used to log in an existing admin. The request should be a POST request with the following parameters:

##### Request body :

| parameter | Type   | Required | Description                |
| --------- | ------ | -------- | -------------------------- |
| email     | String | Yes      | The email of the admin.    |
| password  | String | Yes      | The passowrd of the admin. |

##### Response :

```js
{
  "status": 200,
  "message": "Admin logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ5YXNrYWFzc28zeUBnbWFpbC5jb20iLCJpYXQiOjE2OTYyMjE4MDgsImV4cCI6MTY5NjIyNTQwOH0.13JEak-uRxX-9x2Wf15Otwee4NJvBwaxXZWsUwhv0sg"
}
```

If the user does not exist, a `404 Not Found`response will be returned. If the password is incorrect, a `401 Unauthorized` response will be returned. If the request is successful, a `200 OK` response will be returned with a `JSON` Web Token (JWT) that can be used to authenticate future requests.


## User Signup

**Endpoint**:

- `POST localhost:5000/users/signup`

This endpoint is used to create a new user account. The request should be a POST request with the following parameters:

##### Request body :

| parameter | Type   | Required | Description                |
| --------- | ------ | -------- | -------------------------- |
| name      | String | Yes      | The name of the user.     |
| email     | String | Yes      | The email of the user.    |
| Password  | String | Yes      | The password of the user. |

##### Response :

```js
 {
  "status": 201,
  "message": "User created successFully",
  "newUser": {
    "id": 2,
    "name": "",
    "email": "ali@gmail.com",
    "password": "$2b$10$XrCBl8L/VETAz1ZoNfqMxuBd3alzGRzoBOy9yx5Kgeved83NYYc1W",
    "created": "2023-10-02T03:47:42.765Z",
    "updated": "2023-10-02T03:47:42.765Z"
  }
}
```

### User Login

**Endpoint**:

- `POST localhost:5000/users/login`

This endpoint is used to log in an existing owner. The request should be a POST request with the following parameters:

##### Request body :

| parameter | Type   | Required | Description                |
| --------- | ------ | -------- | -------------------------- |
| email     | String | Yes      | The email of the user.    |
| password  | String | Yes      | The passowrd of the user. |

##### Response :

```js
{
  "status": 200,
  "message": "User logged in successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJ5YXNrYWFzc28zeUBnbWFpbC5jb20iLCJpYXQiOjE2OTYyMjE4MDgsImV4cCI6MTY5NjIyNTQwOH0.13JEak-uRxX-9x2Wf15Otwee4NJvBwaxXZWsUwhv0sg"
}
```

If the user does not exist, a `404 Not Found`response will be returned. If the password is incorrect, a `401 Unauthorized` response will be returned. If the request is successful, a `200 OK` response will be returned with a `JSON` Web Token (JWT) that can be used to authenticate future requests.



##### Book

##### Create Book

**EndPoint**:

- `POST localhost:5000/books`

This endpoint is used to create a new book. The request should be a POST request with the following parameters:

##### Request body :

| parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| AdminId   | Number | Yes      | The AdminId of the book  |
| title     | String | Yes      | The name of the book.     |
| auther  | String | Yes      | The auther of the book. |
| price     |  Int     | yes      | The price of the book    |

##### Response

```js
{
  "status": 200,
  "message": "Book successFully created!"
}
```

If the book was not created, a `400` Bad Request response will be returned. If the request is successful, a `200 OK  ` response will be returned with a message indicating that the books was created successfully.

### Book Update

**Endpoint**:

- `PUT localhost:4000/book/:id`

This `endpoint` is used to update an existing book. The request should be a PUT request with the following parameters:

#### Request body :

| parameter | Type   | Required | Description                    |
| --------- | ------ | -------- | ------------------------------ |
| AdminId   | Number | Yes      | The AdminId of the book  |
| title     | String | Yes      | The name of the book.     |
| auther  | String | Yes      | The auther of the book. |
| price     |  Int     | yes      | The price of the book    |

If the books does not exist, a 404 Not Found response will be returned. If the update was not successful, a 500 Internal Server Error response will be returned. If the request is successful, a 200 OK response will be returned with a message indicating that the bookstore was updated successfully.

### Response :

```js
 {
  "status": 200,
  "message": "Book successFully updated!"
}
```



### Authentication Middleware

This middleware function is used to authenticate requests by verifying the JSON Web Token (JWT) included in the Authorization header.

###### Middleware Function:

```js
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ status: 401, message: "Authentication failed - missing token" });
  }

  const tokenWithoutBearer = token.split(" ")[1];

  jwt.verify(tokenWithoutBearer, SECRET_KEY, (error, decoded) => {
    if (error) {
      return res.status(401).json({
        status: 401,
        message: "Authentication failed - invalid token",
      });
    }

    req.decoded = decoded;

    next();
  });
};
```

#### Usage

To use this middleware, include it in the route handler function before the desired functionality.

```js
 router.get("/protected", authenticate, (req, res) => {
  // Accessible only if authenticated
  // Your logic here
});
Error Responses
Status Codes:
401 - Unauthorized
401 - Unauthorized
Missing Token:

{
  "status": 401,
  "message": "Authentication failed - missing token"
}
```

###### Invalid Token:

```js
{
  "status": 401,
  "message": "Authentication failed - invalid token"
}
```

##### Use Supabase database

Instead of using SQLite database, change to Supabase by following this instruction:

1. Sign up at supabase.com
2. Create new project
3. Inside the project you created, go to `Settings` and then click `Databases`
4. Under `Connection string`, switch to`url` and copy the link.
5. Create `.env` file in your project's root directory if you already don't have it.
6. Add `DATABASE_URL='the url you copied'` in the .env file.
7. Inside `prisma` folder, you will have `prisma.schema` file, change the `datasource` to

```
datasource db {
 provider          = "postgresql"
 url               = env("DATABASE_URL")
}
```
