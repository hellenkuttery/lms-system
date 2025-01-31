const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const cors = require('cors');


dotenv.config();
const app = express();

app.use(cors());  // CORS desteği ekledik
// Middleware
app.use(express.json());

// MongoDB bağlantısını başlat
connectDB();

// Auth route
app.use('/api/auth', authRoutes);

app.use(cors({
    origin: 'http://localhost:5173'  // Frontend portunu belirt
}));


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
