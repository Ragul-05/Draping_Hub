# 👗 Draping Hub

## 🧾 Overview
**Draping Hub** is a web application designed to streamline booking management for services like **Saree Pre-Plating**, **Mehandi Designs**, and **Aari Designing**, while enabling administrators to manage operations efficiently.

The platform includes:
- A user-friendly client interface to book services and explore ventures.
- An admin dashboard to oversee bookings, feedback, inventory, and analytics.

---

## 🌟 Features

### 👩‍💼 Client-Facing Features
- **Home Page**: Engaging banner, featured services, and testimonials.
- **Book Page**: Booking form with fields like name, email, service type, date, etc.
- **FutureBusiness Page**: Discover new ventures (e.g., Bridal Makeup) with filters.

### 👨‍💻 Admin Features
- **Dashboard**: Key stats (Total Bookings, New Businesses, Feedback), and activity logs.
- **Bookings Management**: View/update bookings, status indicators, bulk actions.
- **AddBusiness**: Add business listings with photo uploads and category filters.
- **Feedback Management**: View feedback with sentiment tracking.
- **Inventory Management**: Track items with low-stock alerts.
- **Analytics Dashboard**: View trends with charts and filter tools.

---

## 🧑‍💻 Technologies Used

- **Frontend**: React, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Styling**: Amber theme (`bg-amber-600`, `text-amber-900`)
- **Other Tools**: 
  - Vite (build tool)
  - bcryptjs (password hashing)
  - jsonwebtoken (authentication)

---

## 📁 Project Structure

```
draping-hub/
├── client/
│   ├── src/
│   │   ├── admin/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Bookings.tsx
│   │   │   └── AddBusiness.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Book.tsx
│   │   │   └── FutureBusiness.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public/
│   │   └── index.html
│   └── package.json
├── server/
│   ├── models/
│   │   ├── Booking.js
│   │   ├── Business.js
│   │   └── Feedback.js
│   ├── routes/
│   │   ├── bookings.js
│   │   ├── businesses.js
│   │   └── feedback.js
│   ├── middleware/
│   │   └── auth.js
│   ├── server.js
│   └── package.json
├── README.md
└── .env
```

---

## ⚙️ Setup Instructions

### ✅ Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local instance)
- Git

### 🛠 Installation

#### 1. Clone the repository:
```bash
git clone https://github.com/your-username/draping-hub.git
cd draping-hub
```

#### 2. Setup Backend:
```bash
cd server
npm install
```

Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the server:
```bash
npm start
```

#### 3. Setup Frontend:
```bash
cd ../client
npm install
npm run dev
```

---

## 🌐 Access

- **Frontend**: [http://localhost:5173](http://localhost:5173)
- **Backend**: [http://localhost:5000](http://localhost:5000)

---

## 🧭 Usage

### 👩 For Clients
- **Home Page**: Explore services and navigate to book.
- **Book a Service**: Use `/book` page.
- **Explore Ventures**: Visit `/future-business`.

### 👨‍💼 For Admins
- **Login**: `/admin/login`
- **Dashboard**: View bookings and stats.
- **Manage Bookings**: `/admin/bookings`
- **Add Business**: `/admin/add-business`

---

## 🤝 Contributing

1. Fork the repo
2. Create your feature branch  
   ```bash
   git checkout -b feature/your-feature
   ```
3. Commit your changes  
   ```bash
   git commit -m "Add your feature"
   ```
4. Push to the branch  
   ```bash
   git push origin feature/your-feature
   ```
5. Open a pull request

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 📩 Contact

For queries or support, email: `ragulgopinath2005@gmail.com`

