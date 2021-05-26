import { apiUrl } from "../config.json";
import  jwtDecode from "jwt-decode";
import http from "./httpService";
import { setJwt } from './httpService'


const apiEndpoint = apiUrl + "/auth";
const tokenKey = "token";

setJwt(getJwtToken())

export function getJwtToken() {
  return localStorage.getItem(tokenKey);
}

export async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    const user = jwtDecode(jwt);
    console.log("user returned");
    return user;
  } catch (ex) {
      console.log(ex)
    return null;
  }
}
