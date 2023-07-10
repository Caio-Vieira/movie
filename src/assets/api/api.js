import { API_URLBASE, API_KEY, TOKEM, LANGUAGE } from "@env";
import axios from "axios";

export const getListPopular = (setState) => {
  axios.get(`${API_URLBASE}movie/popular?api_key=${API_KEY}&${LANGUAGE}`,
   {
      headers: {
        Authorization: `Bearer ${TOKEM}`,
        "Content-Type": `application/json;charset=utf-8`,
      },
    })
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getListFamily = (setState) => {
  axios.get(`${API_URLBASE}discover/movie?api_key=${API_KEY}&with_genres=10751&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEM}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getListWestern = (setState) => {
  axios.get(`${API_URLBASE}discover/movie?api_key=${API_KEY}&with_genres=37&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEM}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};
export const getListWar = (setState) => {
  axios.get(`${API_URLBASE}discover/movie?api_key=${API_KEY}&with_genres=10752&${LANGUAGE}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEM}`,
          "Content-Type": `application/json;charset=utf-8`,
        },
      }
    )
    .then((response) => {
      setState(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDetails = axios.create({
  baseURL: `${API_URLBASE}movie/`,
});
