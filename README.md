# 🛒 Amazon Clone — Full-Stack E-Commerce Application

A fully functional **Amazon Clone** built using **React.js**, **Express.js**, **Firebase**, and **Stripe API**. This application replicates core Amazon features — user authentication, product management, secure payments, and real-time order tracking — all deployed on **Firebase Hosting** and **Vercel**.

## 🚀 Live Demo

👉 [amazon-clone-e95b.vercel.app](https://amazon-clone-e95b.vercel.app)

---

## 📦 Features

- 🔐 **Firebase Authentication** – Secure login/logout system
- 🛒 **Cart Management** – Add and remove items dynamically
- 💳 **Stripe Integration** – Secure, real-time payment processing
- 📦 **Order History** – Real-time Firestore-based tracking
- 🧾 **Checkout Summary** – Itemized and total billing view
- 🌐 **Firebase Hosting & Vercel** – Fast and reliable deployment
- 🧠 **Scalable Code Structure** – Easily adaptable and extendable

---

## 🌟 Unique Additions

- 🎯 Smart product suggestions (based on dummy AI logic or local storage)
- 🌙 Light/Dark mode toggle
- 📱 Progressive Web App (PWA) ready
- 🎉 Responsive and animated UI for all screens
- 📧 Email confirmation trigger using Firebase Functions
- 🧰 Admin-ready product management layout (future scope)

---

## 📂 Folder Structure

amazon-clone/
│
├── client/ # React frontend
│ ├── components/ # Reusable UI components
│ ├── pages/ # Route-based components
│ ├── App.js # Main App file
│ └── index.js # Entry point
│
├── server/ # Express backend (optional for Stripe)
│ └── index.js # API routes
│
├── .env # Firebase and Stripe secrets
├── firebase.js # Firebase config file
├── functions/ # Firebase cloud functions
└── README.md # This file

---

## 🛠️ Getting Started

Follow these steps to run the project locally:

### 1️⃣ Clone the Repository

```bash
git clone <your-repository-url>
cd <your-repository-folder>
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Firebase Configuration
Go to Firebase Console

Create a new project and enable:

Authentication (Email/Password)

Cloud Firestore

Firebase Storage (optional)

Replace the Firebase config values in .env:

env
Copy
Edit
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
4️⃣ Stripe Configuration
Go to Stripe Dashboard

Get your public and secret keys and add them to .env:

env
Copy
Edit
REACT_APP_STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key
▶️ Run Locally
bash
Copy
Edit
npm start
Then visit: http://localhost:3000
📈 Future Improvements
🛠 Admin panel for product uploads

📊 Analytics dashboard

📲 Mobile-first redesign

🧪 Unit & integration tests

📦 Wishlist and product rating features

🔎 Search and filter functionality

🧠 Integration with AI recommendation engine

🙌 Acknowledgements
This project was developed as a learning exercise and is inspired by Amazon’s real-world e-commerce flow. Special thanks to:

💻 CleverProgrammer

💡 Firebase, Stripe, and React communities

🔗 References
🔗 Live Website

🛠️ GitHub Repository: your-repo-link
