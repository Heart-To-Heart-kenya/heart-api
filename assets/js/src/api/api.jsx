// api.js
import axios from "axios";
import { ServerUrl } from "./config/ServerUrl";

axios.defaults.withCredentials = true;

async function request(requestType, url, data = null) {
  try {
    const config = {
      method: requestType.toUpperCase(),
      url: ServerUrl + url,
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    if (requestType.toUpperCase() === "GET") {
      config.params = data;
    } else {
      config.data = data;
    }

    const response = await axios(config);
    return response.data;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    const errorData = error.response?.data?.data || {};
    throw { message: errorMessage, data: errorData };
  }
}

async function post(url, data = null) {
  return request("POST", url, data);
}

async function get(url, data = null) {
  return request("GET", url, data);
}

async function patch(url, data = null) {
  return request("PATCH", url, data);
}

async function put(url, data = null) {
  return request("PUT", url, data);
}

async function remove(url, data = null) {
  return request("DELETE", url, data);
}

export { request, post, get, remove, put, patch };
