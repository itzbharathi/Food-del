const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const Review = require('../models/Review');

const router = express.Router();

// ✅ Ensure uploads directory exists
const uploadPath = 'uploads/';
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath, { recursive: true });
}

// ✅ Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // Store files in backend/uploads folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Unique filename
  }
});

// ✅ Multer File Filter (Allow only images & videos)
const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'video/mp4'];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error('Only images and videos are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

// ✅ POST: Add Review with Image/GIF Upload
router.post('/add-review', upload.array('media', 5), async (req, res) => {
  try {
    const { userId, foodId, rating, reviewText } = req.body;
    const mediaUrls = req.files.map(file => `/uploads/${file.filename}`);

    const newReview = new Review({
      userId,
      foodId,
      rating,
      reviewText,
      media: mediaUrls
    });

    await newReview.save();
    res.json({ success: true, message: 'Review added successfully!', review: newReview });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ GET: Fetch Reviews for a Food Item
router.get('/:foodId', async (req, res) => {
  try {
    const reviews = await Review.find({ foodId: req.params.foodId });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
