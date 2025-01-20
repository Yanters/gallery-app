import React from 'react'

interface MessageProps {
  icon: React.ReactNode
  message: string
}

const Message = ({ icon, message }: MessageProps) => {
  return (
    <div className='flex flex-col justify-center items-center h-64 w-full bg-gray-200 rounded-md max-w-sm bg-gradient-to-bl from-gray-300 via-gray-300 to-gray-200'>
      {icon}
      <p className='text-gray-500'>{message}</p>
    </div>
  )
}

export default Message
