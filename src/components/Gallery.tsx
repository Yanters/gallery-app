import React from 'react'
import { FaExclamationTriangle, FaImage } from 'react-icons/fa'
import { MagnifyingGlass } from 'react-loader-spinner'
import Message from './Message'

interface GalleryProps {
  data: any
  isLoading: boolean
  isError: Error | null
  mapping: (element: any) => JSX.Element
}

const Gallery = ({ data, isLoading, isError, mapping }: GalleryProps) => {
  if (isLoading)
    return (
      <div className='flex flex-col items-center mt-5'>
        <MagnifyingGlass
          visible
          height='80'
          width='80'
          ariaLabel='magnifying-glass-loading'
          wrapperClass='magnifying-glass-wrapper'
          glassColor='#c0efff'
          color='#e15b64'
        />
      </div>
    )
  if (isError)
    return (
      <div className='flex flex-col items-center mt-5'>
        <Message
          icon={
            <FaExclamationTriangle className='text-red-500 text-6xl mb-4' />
          }
          message='Error loading images!'
        />
      </div>
    )

  return (
    <div className='flex flex-col items-center mt-5'>
      {data.length ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {data.map(mapping)}
        </div>
      ) : (
        <Message
          icon={<FaImage className='text-gray-400 text-6xl mb-4' />}
          message='No images found'
        />
      )}
    </div>
  )
}
export default Gallery
