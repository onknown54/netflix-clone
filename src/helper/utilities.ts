import axios from "axios";

// movieApi: "https://api.themoviedb.org/3"
//  ttestApi: https://test.bulk.ng/api/v1
export const instance = (token?: string | undefined) =>
  axios.create({
    timeout: 15000,
    baseURL: "https://test.bulk.ng/api/v1",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
