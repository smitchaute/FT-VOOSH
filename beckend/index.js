require('dotenv').config();
const cookieSession = require("cookie-session");
const express = require('express');
const cors = require('cors')
const path = require('path')
const app = express();
const connectDB = require('./db');
const passport = require('passport');
require('./config/passport');
const authRoutes = require('./routers/auth');
const orderRoutes = require('./routers/orders');
const accessController = require("./accessControl").accessController;
// app.use(accessController);
// // app.use(cors({ origin: `${process.env.CLIENT_URL}`, methods: "GET,POST,PUT,DELETE", credentials: true, }));
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api', authRoutes);
app.use('/api', orderRoutes);
app.use(
    cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/auth/google', require('./routers/googleAuth'));
// Add routes here

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

connectDB();

