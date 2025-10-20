require('dotenv').config();
const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
// serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Simple test route
app.get('/api/ping', (req, res) => res.json({ ok: true, time: new Date() }));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend listening on ${PORT}`));