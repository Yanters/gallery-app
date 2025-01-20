import { useQuery } from 'react-query'
import api from '../utils/api'
import { UnsplashResponse } from '../types/unsplash'

const fetchImages = async (
  query: string,
  page: number
): Promise<UnsplashResponse> => {
  const { data } = await api.get<UnsplashResponse>('search/photos', {
    params: { query, page, per_page: 10 },
  })
  return data
}

export const usePhotos = (query: string, page: number) =>
  useQuery<UnsplashResponse, Error>(
    ['photos', query, page],
    () => fetchImages(query, page),
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  )
