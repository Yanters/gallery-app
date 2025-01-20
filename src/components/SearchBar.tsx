import React, { useEffect, useState, useCallback } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { FaSearch } from 'react-icons/fa'

interface SearchBarProps {
  query: string
  onSearch: (query: string) => void
}

const SearchBar = ({ query, onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState(query)
  const debouncedInputValue = useDebounce(inputValue, 200)

  useEffect(() => {
    if (debouncedInputValue !== query) {
      onSearch(debouncedInputValue)
    }
  }, [debouncedInputValue, onSearch, query])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(inputValue)
    }
  }

  return (
    <div className='w-full flex justify-center px-4'>
      <div className='relative w-full max-w-lg'>
        <input
          type='text'
          placeholder='Search Unsplash'
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className='p-3 pl-10 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 sm:p-4 sm:pl-12'
        />
        <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:left-4' />
      </div>
    </div>
  )
}

export default React.memo(SearchBar)
