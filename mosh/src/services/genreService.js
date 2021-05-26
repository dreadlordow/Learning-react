import React from "react";
import config from "../config.json";
import http from './httpService'

export async function getGenres() {
  const { data: genres } = await http.get(`${config.apiUrl}/genres`);
  return genres;
}
