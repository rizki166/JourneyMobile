import { Platform } from "react-native";

interface EnvConfig {
  baseURL: string;
}

interface EnvConfigMap {
  dev: EnvConfig;
  staging: EnvConfig;
  prod: EnvConfig;
}

const ENV: EnvConfigMap = {
  dev: {
    baseURL:
      Platform.OS === "ios"
        ? "http://localhost:5000/"
        : "http://10.0.2.2:5000/",
  },
  staging: {
    baseURL: "http://staging-server-url.com/", // Ganti dengan URL staging Anda
  },
  prod: {
    baseURL: "http://production-server-url.com/", // Ganti dengan URL produksi Anda
  },
};

const getEnvVars = (env: keyof EnvConfigMap = "dev"): EnvConfig => {
  return ENV[env];
};

export default getEnvVars;
