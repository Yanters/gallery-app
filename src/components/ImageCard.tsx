import React from 'react'
import { truncateString } from '../utils/stringOperations'

interface Image {
  imageUrl: string
  description: string | null
  username?: string
}

const ImageCard = ({ imageUrl, description, username = 'Unknown' }: Image) => {
  return (
    <div className='shadow-lg rounded-md overflow-hidden m-2'>
      <img
        src={imageUrl}
        alt={description || 'Image without description'}
        className='w-full h-64 object-cover'
      />
      <div className='p-2 bg-white h-full'>
        <p className='text-sm font-semibold'>{username}</p>
        <p className='text-xs text-gray-500'>
          {description
            ? truncateString(description)
            : 'No description provided'}
        </p>
      </div>
    </div>
  )
}

export default ImageCard
