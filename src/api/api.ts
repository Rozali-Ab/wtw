import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { transformResponseToFilm } from './tranformResponse';

import type { TFilm } from '../types/film';

const BASE_URL = 'https://10.react.pages.academy/wtw/';
const FILMS_URL = 'films';
const HEADER_NAME = 'X-Token';
const HEADER_KEY = 'wtw-token';

export const filmsApi = createApi({
  reducerPath: 'filmsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(HEADER_NAME, HEADER_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getFilms: builder.query<TFilm[], void>({
      query: () => ({
        url: FILMS_URL,
      }),
      transformResponse: transformResponseToFilm,
    }),
    getFilmById: builder.query<TFilm, number>({
      query: (id) => ({
        url: `${FILMS_URL}/${id}`,
      }),
    }),
  })
});

export const { useGetFilmsQuery, useGetFilmByIdQuery } = filmsApi;