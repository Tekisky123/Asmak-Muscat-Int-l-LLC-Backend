import dotenv from 'dotenv';

dotenv.config();

export default {
  emailUser: process.env.EMAIL_USER,
  emailPass: process.env.EMAIL_PASS,
};


