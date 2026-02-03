const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

let users = [

// Fake user database

    { username: "john", password: "1234" }
];

// Store KM records
const kmRecords = [];

//User registration
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const exists = users.find(u => u.username === username);

    if (exists) {
        return res.status(400).json({ message: "Username already taken" });
    }

    // Save new user
    users.push({ username, password });

    res.json({ message: "Registration successful" });
});


// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(
        u => u.username === username && u.password === password
    );

    if (!user) {
        return res.status(401).json({ message: "Invalid login" });
    }

    res.json({ message: "Login successful" });
});

// Record KM route
app.post("/record", (req, res) => {
    const { username, km } = req.body;

    if (!username || !km) {
        return res.status(400).json({ message: "Missing data" });
    }

    const entry = {
        username,
        km,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString()
    };

    kmRecords.push(entry);

    res.json({ message: "KM recorded", entry });
});

// View all records
app.get("/records", (req, res) => {
    res.json(kmRecords);
});

app.get("/", (req, res) => {
    res.send("NodeJS KM Tracker API is running");
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});

