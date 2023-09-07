import { TFilm } from '../types/film';

export function transformResponseToFilm(responseData: any): TFilm[] {
  if (!Array.isArray(responseData)) {
    throw new Error('Invalid response data format'); 
  }

  return responseData.map((item: any) => ({
    name: item.name || '',
    posterImage: item.posterImage || '',
    previewImage: item.previewImage || '',
    backgroundImage: item.backgroundImage || '',
    backgroundColor: item.backgroundColor || '',
    description: item.description || '',
    rating: item.rating || 0,
    scoresCount: item.scoresCount || 0,
    director: item.director || '',
    starring: item.starring || [],
    runTime: item.runTime || 0,
    genre: item.genre || '',
    released: item.released || 0,
    id: item.id || 0,
    isFavorite: item.isFavorite || false,
    videoLink: item.videoLink || '',
    previewVideoLink: item.previewVideoLink || '',
  }));
}