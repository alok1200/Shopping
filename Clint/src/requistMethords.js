import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YWNlZTFiNTBjZDI2ODBjZTVkMWE1YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4OTA1NTIwOCwiZXhwIjoxNjg5MTQxNjA4fQ.ThzVKvhdXBBD6WQmS6FFbKbzDg3Naqvkv1RVvbH88Jk";

export const publicRequest = axios.create({
  baseURL : BASE_URL,
});

export const userRequest = axios.create({
  baseURL : BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
});