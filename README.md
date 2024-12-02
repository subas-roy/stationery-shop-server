# **Stationery Store Management API**

A robust backend application for managing stationery products, orders, and revenue. Built with Node.js, Express, and MongoDB, this API is designed to handle inventory, order processing, and revenue calculations efficiently.

---

## **🚀 Project Overview**

This API powers a stationery store with the following core functionalities:

- **Product Management**: Add, update, and manage product inventory.
- **Order Processing**: Place orders, track inventory, and ensure stock updates.
- **Revenue Calculation**: Automatically calculate total revenue from all orders.

---

## **🌐 Live URL**

The API is live at: [Stationery Store Management API](https://stationery-shop-server-dusky.vercel.app)

---

## **🎯 Features**

- **Product Inventory Management**:

  - Manage product details such as name, price, stock availability, etc.
  - Automatically update inventory when an order is placed.

- **Order Placement**:

  - Allows customers to place orders and updates inventory accordingly.
  - Prevents orders when stock is insufficient.

- **Revenue Tracking**:

  - Aggregates data to calculate the total revenue generated from all orders.

- **Error Handling**:
  - Graceful error responses for invalid requests or server issues.

---

## **🛠️ Technology Stack**

- **Backend Framework**: [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
- **Database**: [MongoDB](https://www.mongodb.com/)
- **Environment Configuration**: [dotenv](https://github.com/motdotla/dotenv)
- **Validation**: Custom validation and [Mongoose](https://mongoosejs.com/)

---

## **📂 Project Structure**

```plaintext
src/
├── app/
│   ├── modules/
│   │   ├── products/
│   │   │   ├── product.controller.ts
│   │   │   ├── product.interface.ts
│   │   │   ├── product.model.ts
│   │   │   ├── product.route.ts
│   │   │   ├── product.service.ts
│   │   ├── orders/
│   │   │   ├── order.controller.ts
│   │   │   ├── order.interface.ts
│   │   │   ├── order.model.ts
│   │   │   ├── order.route.ts
│   │   │   ├── order.service.ts
│   ├── config/
│   │   ├── config.ts
├── app.ts
├── server.ts
```

---

## **⚙️ Setup and Installation**

### **1. Prerequisites**

Ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v14 or above)
- [MongoDB](https://www.mongodb.com/) (local or cloud instance)
- [Git](https://git-scm.com/)

### **2. Clone the Repository**

```bash
git clone https://github.com/your-username/stationery-store-api.git
cd stationery-store-api
```

### **3. Install Dependencies**

```bash
npm install
```

### **4. Configure Environment Variables**

Create a `.env` file in the root directory and add the following:

```env
PORT=5000
DATABASE_URL=mongodb://localhost:27017/stationery_store
```

### **5. Start the Server**

```bash
npm start
```

The server will run at `http://localhost:5000`.

---

## **📝 API Endpoints**

### **1. Products**

- **Add Product**: `POST /api/products`
- **Get All Products**: `GET /api/products`

### **2. Orders**

- **Place an Order**: `POST /api/orders`
- **Calculate Revenue**: `GET /api/orders/revenue`

---

## **🛡️ Error Handling**

- **Invalid Input**: Returns `400` status with an error message.
- **Insufficient Stock**: Returns `409` status when order quantity exceeds stock.

---

## **📈 Future Enhancements**

- Add authentication and user roles.
- Enable product search and filtering.
- Implement pagination for large datasets.

---

## **👨‍💻 Contributors**

- **[Subas Roy](https://github.com/subas-roy)** - Developer

---
