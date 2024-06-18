import axios from "axios";
import { Platform } from "react-native";

const baseURL = Platform.select({
  ios: "http://localhost:5000/",
  android: "http://10.0.2.2:5000/",
  default: "http://192.168.x.x:5000/",
});

const API = axios.create({
  baseURL: baseURL,
});

export default API;
