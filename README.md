
# **Mile Tracker App — README**

## 📌 Overview
Mile Tracker is a lightweight Node.js application that allows users to:

- Register an account  
- Log in  
- Record miles  
- View all entries in a dashboard  

The app uses **in‑memory storage** (no database) and includes a **multistage Dockerfile** for efficient containerized deployment.

---

## 🚀 Features
- User registration  
- User login  
- Record miles  
- Dashboard to view all entries  
- Clean Bootstrap UI  
- Lightweight Node.js backend  
- Optimized multistage Docker build  

---

## 📂 Project Structure
```
/project-root
│── app.js
│── package.json
│── Dockerfile
│── /public
      ├── index.html
      ├── register.html

```

---

## 🛠️ Installation (Local)

### 1. Install dependencies
```
npm install
```

### 2. Start the server
```
node app.js
```

### 3. Open in browser
```
http://localhost:3000
```

---

## 🐳 Running with Docker

### **Build the Docker image**
```
docker build -t mile-tracker .
```

### **Run the container**
```
docker run -d --name mile-tracker-multistage -p 3000:3000 mile-tracker
```

### **Access the app**
```
http://localhost:3000
```

---

## 🧱 Multistage Dockerfile (Included)

The project uses a multistage Dockerfile to keep the final image small and production‑ready:

- **Builder stage** installs dependencies  
- **Production stage** uses a slim Node.js image  

This results in faster deployments and smaller images.

---

## 🧪 API Endpoints

### **POST /register**
Registers a new user  
Body:
```json
{
  "username": "john",
  "password": "1234"
}
```

### **POST /login**
Logs in a user  
Body:
```json
{
  "username": "john",
  "password": "1234"
}
```

### **POST /record**
Adds a mile entry  
Body:
```json
{
  "username": "john",
  "miles": 5
}
```

### **GET /records**
Returns all mile entries

---

## 🧩 Technologies Used
- Node.js  
- Express.js  
- Bootstrap 5  
- Docker (multistage build)  

---

## 📜 License
This project is open for personal or educational use.

---
