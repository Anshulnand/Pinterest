# 📌 Pinterest Clone

A full-featured Pinterest Clone built using **Next.js**, **Firebase**, **NextAuth**, and **Tailwind CSS**. Users can **sign in**, **view all posts**, **create their own posts**, and **see their own profile with their pins**.

---

## 🚀 Features

- 🔐 **Authentication** with [NextAuth.js](https://next-auth.js.org/)
- ☁️ **Firebase Firestore** for storing pin data
- 🖼️ **Firebase Storage** for uploading images
- 🎨 **Tailwind CSS** for styling
- 🧑‍💻 **User Profile** with personal posts
- 🌐 **Feed Page** with all public posts
- ➕ **Post Creation** form for uploading new pins

---

## 🧰 Tech Stack

- [Next.js](https://nextjs.org/) — App framework
- [Firebase](https://firebase.google.com/) — Firestore & Storage
- [NextAuth.js](https://next-auth.js.org/) — User authentication
- [Tailwind CSS](https://tailwindcss.com/) — UI Styling
- [React](https://reactjs.org/) — UI library

---

## 📂 Folder Structure

📁 app/
├── layout.tsx
├── page.tsx # Home Feed
├── profile/[userId]/page.tsx # User Profile Page
├── create-pin/ # Create Pin Page
📁 components/
├── Header.tsx
├── Pins/
│ ├── PinItem.tsx
│ └── PinList.tsx
📁 firebase/
├── firebaseConfig.js

yaml
Copy
Edit

---

## 🛠️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/pinterest-clone.git
   cd pinterest-clone
Install dependencies

bash
Copy
Edit
npm install
Set up Firebase

Go to Firebase Console

Create a project and enable Firestore and Storage

Add a Web App and copy the Firebase config

Create a file firebaseConfig.js:

js
Copy
Edit
// firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
export default app;
Configure NextAuth

Create a .env.local file and add your credentials:

env
Copy
Edit
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
Run the app

bash
Copy
Edit
npm run dev
📸 Screenshots
Home Feed	User Profile	Create Post

🧑‍💼 Author
Made by Your Name

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Would you like me to create this as a downloadable file or push it directly to your repo if you're using GitHub CLI or a remote repo?






4o

