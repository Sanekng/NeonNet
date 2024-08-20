import express from 'express';
import connectDB from './config/db.config.js';
import fileUpload from './services/firebase.service.js';

const app = express();

connectDB();

app.use(express.json());
await fileUpload('/Users/sanekng/Desktop/Снимок экрана 2024-07-26 в 01.24.00.png');

const PORT = process.env.PORT || 3000;
console.log(PORT);

app.listen(PORT, () => {
  console.log("Server is on port ", PORT);
});