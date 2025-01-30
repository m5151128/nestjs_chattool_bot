import axios from "axios";

const NESTJS_APP_API_URL = process.env.NESTJS_APP_API_URL;

export async function post(endpoint: string, body: any) {
  try {
    const response = await axios.post(`${NESTJS_APP_API_URL}${endpoint}`, body);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
