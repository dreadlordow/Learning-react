import http from "./httpService";
import config from "../config.json";

export async function getMovies() {
  const { data: movies } = await http.get(`${config.apiUrl}/movies`);
  return movies;
}

export async function getMovie(id) {
  const { data: movie } = await http.get(`${config.apiUrl}/movies/${id}`);
  return movie;
}

export function saveMovie(data) {
  return http.post(`${config.apiUrl}/movies`, data);
}

export function updateMovie(data) {
  const { title, numberInStock, dailyRentalRate, genreId } = data;
  const newData = {
    title: title,
    genreId: genreId,
    numberInStock: numberInStock,
    dailyRentalRate: dailyRentalRate,
  };
  return http.put(`${config.apiUrl}/movies/${data._id}`, newData);
}

export function deleteMovie(id) {
  return http.delete(`${config.apiUrl}/movies/${id}`);
}
