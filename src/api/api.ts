import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import {  transformResponseToFilm, transformOneFilm } from './tranformResponse';

const BASE_SEARCH_URL = 'https://api.kinopoisk.dev/v1.3/';
const HEADER_NAME = 'X-API-KEY';
//const HEADER_KEY = 'TDQPASQ-H2C4QBE-Q22NS9H-7F8T1XM';
//const HEADER_KEY = 'G4DG8Q7-K654AF3-N3478BW-G93839V';
const HEADER_KEY = 'RYSJT5C-898MBTH-J3EMP0F-0EAFWBS';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_SEARCH_URL,
    prepareHeaders: (headers) => {
      headers.set(HEADER_NAME, HEADER_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query({
      query: ({limit, page}) => ({
        url: 'movie',
        params: {limit, page},
      }),
      transformResponse: transformResponseToFilm,
    }),
    getFilmById: builder.query({
      query: (id) => ({
        url: `movie/${id}`,
      }),
      transformResponse: transformOneFilm,
    }),
    getFilmByQuery: builder.query({
      query: ({limit, name}) => ({
        url: 'movie',
        params: {limit, name},
      }),
      transformResponse: transformResponseToFilm,
    }),
  })
});


export const { useGetFilmsQuery, useGetFilmByIdQuery, useGetFilmByQueryQuery } = filmsApi;