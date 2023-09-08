import { TFilm } from '../types/film';

const defaultPosterUrl = 'https://10.react.pages.academy/static/film/preview/legend.jpg';
const defaultBackdropUrl = 'https://10.react.pages.academy/static/film/background/legend.jpg';
const defaultBackgroundColor = '#E1DAD7';
const defaultDescription = 'Подробности после оформления подписки';

export function transformResponseToFilm(responseData: any): TFilm[] {
  if (!Array.isArray(responseData.docs)) {
    throw new Error('Invalid response data format');
  }

  return responseData.docs.map((item: any) => ({
    name: item.name || '',
    posterImage: item.poster?.url || '', 

    previewImage: item.poster?.url || defaultPosterUrl,

    backgroundImage: item.backdrop?.url || defaultBackdropUrl, 

    backgroundColor: item.backgroundColor || defaultBackgroundColor,

    description: item.description || defaultDescription,

    rating: item.rating?.kp || 0, 

    scoresCount: item.votes?.kp || 0, 

    director: item.persons?.[0]?.name || '', 
    starring: item.persons?.map((name: any) => name.name) || [], 
    runTime: item.movieLength || 0,
    genre: item.genres?.[0]?.name || '', 
    released: item.year || 0,
    id: item.id || 0,
    isFavorite: item.isFavorite || false,
    videoLink: item.videos?.trailers?.[0]?.url || '', 
    previewVideoLink: item.videos?.teasers?.[0]?.url || '', 
  }));
}


export const transformOneFilm = (responseData: any): TFilm => {
  if (typeof responseData !== 'object') {
    throw new Error('Invalid response data format');
  }

  return {
    name: responseData.name || '',
    posterImage: responseData.poster?.url || defaultPosterUrl,
    previewImage: responseData.poster?.url || defaultPosterUrl,
    backgroundImage: responseData.backdrop?.url || defaultBackdropUrl,
    backgroundColor: responseData.backgroundColor || defaultBackgroundColor,
    description: responseData.description || defaultDescription,
    rating: responseData.rating?.kp || 0,
    scoresCount: responseData.votes?.kp || 0,
    director: responseData.persons?.[0]?.name || '',
    starring: responseData.persons?.map((person: any) => person.name) || [],
    runTime: responseData.movieLength || 0,
    genre: responseData.genres?.[0]?.name || '',
    released: responseData.year || 0,
    id: responseData.id || 0,
    isFavorite: responseData.isFavorite || false,
    videoLink: responseData.videos?.trailers?.[0]?.url || '',
    previewVideoLink: responseData.videos?.teasers?.[0]?.url || '',
  };
}

