import React from 'react'
import {
  FaArrowLeft,
  FaArrowRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa'

interface PaginationProps {
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPages?: number
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages = 1,
}: PaginationProps) => {
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='flex justify-between items-center mt-4 w-full max-w-xl'>
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(1)}
          className='flex items-center px-4 py-2 mb-2 sm:mb-0 bg-blue-500 text-white rounded-full disabled:opacity-50 hover:bg-blue-600 transition-colors'
        >
          <FaAngleDoubleLeft className='mr-2' />
          <span className='hidden sm:inline'>First</span>
        </button>
        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage((prev: number) => Math.max(prev - 1, 1))
          }
          className='flex items-center px-4 py-2 mb-2 sm:mb-0 bg-blue-500 text-white rounded-full disabled:opacity-50 hover:bg-blue-600 transition-colors'
        >
          <FaArrowLeft className='mr-2' />
          <span className='hidden sm:inline'>Previous</span>
        </button>
        <span className='text-gray-700 mb-2 sm:mb-0'>
          <span
            className={`${
              currentPage === totalPages ? 'text-blue-500' : 'text-gray-700'
            }`}
          >
            Page{' '}
          </span>
          {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() =>
            setCurrentPage((prev: number) => Math.min(prev + 1, totalPages))
          }
          className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 hover:bg-blue-600 transition-colors'
        >
          <span className='hidden sm:inline mr-2'>Next</span>
          <FaArrowRight />
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className='flex items-center px-4 py-2 bg-blue-500 text-white rounded-full disabled:opacity-50 hover:bg-blue-600 transition-colors'
        >
          <span className='hidden sm:inline mr-2'>Last</span>
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination
