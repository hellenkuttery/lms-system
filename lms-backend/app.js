const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// MongoDB bağlantısını başlat
connectDB();

// Auth route
app.use('/api/auth', authRoutes);



// Auth route
app.use('/api/auth', authRoutes);
/* -------------------------------------------------------------------------- */
// Tarayıcıda mesaj göstermek için root route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Server Running</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        text-align: center;
                        margin-top: 50px;
                    }
                    h1 { color: green; }
                </style>
            </head>
            <body>
                <h1>✅ Server is Running!</h1>
                <p>Express server is active on port ${process.env.PORT || 5000}.</p>
            </body>
        </html>
    `);
});

/* -------------------------------------------------------------------------- */




// Uygulama başlatma
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
