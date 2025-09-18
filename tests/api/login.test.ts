import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

async function loginTest() {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    console.error('❌ Missing email or password in .env file');
    return;
  }

  try {
    const response = await axios.post('https://api.apprabbit.com/login', {
      email,
      password
    });

    if (response.status === 200 && response.data.token) {
      console.log('✅ Login API Test Passed!');
    } else {
      console.error('❌ Login API Test Failed: Unexpected response');
    }
  } catch (error: any) {
    console.error('❌ Login API Test Failed:', error.response?.data || error.message);
  }
}

loginTest();
