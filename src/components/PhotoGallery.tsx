import React, { useCallback, useState } from 'react'
import { usePhotos } from '../hooks/usePhotos'
import Gallery from './Gallery'
import SearchBar from './SearchBar'
import Pagination from './Pagination'
import { Photo } from '../types/unsplash'
import ImageCard from './ImageCard'

const PhotoGallery = () => {
  const [query, setQuery] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const { data, isLoading, error } = usePhotos(query, currentPage)

  const handleSearch = useCallback((newQuery: string) => {
    setQuery(newQuery)
    setCurrentPage(1)
  }, [])

  return (
    <div className='w-full max-w-7xl'>
      <SearchBar query={query} onSearch={handleSearch} />
      <Gallery
        data={data?.results}
        isLoading={isLoading}
        isError={error}
        mapping={(photo: Photo) => <ImageCard key={photo.id}
        imageUrl={photo.urls.small}
        description={photo.description}
        username={photo.user.name}
        />}
      />
      {!isLoading && !error && data?.results.length ? (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data.total_pages}
        />
      ) : null}
    </div>
  )
}

export default PhotoGallery
