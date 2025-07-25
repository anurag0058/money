# Inventory Management System (IMS) - Backend

This backend application provides a secure and functional interface to manage product inventories along with user login capabilities. Built with **Node.js**, **Express**, and **MongoDB**, it includes JWT-based authentication and well-documented APIs using Swagger.
---

## ✅ Features

- 🔐 Secure user registration & login using JWT
- 📦 Add and manage product details including inventory count
- ✏️ Update stock levels dynamically
- 📃 Retrieve a paginated list of available items
- 📚 Built-in Swagger documentation
- 📮 Postman collection for quick testing


---

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Auth**: JSON Web Tokens (JWT)
- **Environment Management**: dotenv
- **API Docs**: Swagger (OpenAPI)

---

## 📁 Project Structure

```
ims-backend/
├── server.js
├── .env
├── controllers/
│   ├── userHandler.js
│   └── inventoryHandler.js
├── models/
│   ├── UserSchema.js
│   └── ItemSchema.js
├── middlewares/
│   └── authMiddleware.js
├── routes/
│   ├── userAuth.js
│   └── itemRoutes.js
├── config/
│   └── connection.js
├── swagger.js
├── README.md
└── postman_collection.json
```

---



## 🚀 Getting Started

1. Clone the repo:
```bash
git clone <repo-url>
cd ims-backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm run dev     # for development with nodemon
# or
npm start       # for production
```

4. Visit Swagger docs at:
```
http://localhost:8080/api-docs
```

---

## 📬 API Endpoints

### 🔐 Auth
- `POST /register` - Register new user
- `POST /login` - Login and get JWT token

### 📦 Products (JWT required)
- `POST /products` - Add new product
- `PUT /products/:id/quantity` - Update quantity
- `GET /products?page=1&limit=10` - Get paginated products

---

## 🧪 Testing with Postman

Use the Postman collection provided:
📁 `IMS_Postman_Collection.json`

Steps:
Import the provided collection postman_collection.json

Register a new user or login with existing credentials

Use the JWT token from login in the Authorization header:

---

## 📄 API Docs with Swagger

After starting the server, open:
```
http://localhost:8080/api-docs
```
You will see an interactive Swagger UI with all routes documented.

---

## 📌 License

MIT License. Free to use and modify for interview or educational projects.
