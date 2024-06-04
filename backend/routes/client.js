const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Client register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password, role: 'client' });
    await user.save();
    res.json({ message: 'Client registered successfully' });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Client login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.role !== 'client' || !(await user.matchPassword(password))) {
      return res.status(401).send('Invalid Credentials');
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).send('Server Error');
  }
});

// Client booking route
router.post('/book', async (req, res) => {
  const { name, email, phone, date, time } = req.body;
  try {
    const newBooking = new Booking({
      name,
      email,
      phone,
      date,
      time,
    });
    await newBooking.save();
    res.json({ msg: 'Booking successful' });
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;

