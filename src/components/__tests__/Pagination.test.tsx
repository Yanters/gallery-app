import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from '../Pagination'

describe('Pagination Component', () => {
  test('renders pagination buttons', () => {
    render(
      <Pagination currentPage={1} totalPages={5} setCurrentPage={jest.fn()} />
    )

    expect(screen.getByRole('button', { name: /first/i })).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /previous/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /last/i })).toBeInTheDocument()
  })

  test('disables previous and first buttons on first page', () => {
    render(
      <Pagination currentPage={1} totalPages={5} setCurrentPage={jest.fn()} />
    )

    expect(screen.getByRole('button', { name: /first/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /previous/i })).toBeDisabled()
  })

  test('disables next and last buttons on last page', () => {
    render(
      <Pagination currentPage={5} totalPages={5} setCurrentPage={jest.fn()} />
    )

    expect(screen.getByRole('button', { name: /next/i })).toBeDisabled()
    expect(screen.getByRole('button', { name: /last/i })).toBeDisabled()
  })

  test('calls setCurrentPage with correct page number', () => {
    const setCurrentPageMock = jest.fn()
    render(
      <Pagination
        currentPage={3}
        totalPages={5}
        setCurrentPage={setCurrentPageMock}
      />
    )

    fireEvent.click(screen.getByRole('button', { name: /first/i }))
    expect(setCurrentPageMock).toHaveBeenCalledWith(1)

    fireEvent.click(screen.getByRole('button', { name: /previous/i }))
    const prevUpdater = setCurrentPageMock.mock.calls[1][0]
    expect(typeof prevUpdater).toBe('function')
    expect(prevUpdater(3)).toBe(2)

    fireEvent.click(screen.getByRole('button', { name: /next/i }))
    const nextUpdater = setCurrentPageMock.mock.calls[2][0]
    expect(typeof nextUpdater).toBe('function')
    expect(nextUpdater(3)).toBe(4)

    fireEvent.click(screen.getByRole('button', { name: /last/i }))
    expect(setCurrentPageMock).toHaveBeenCalledWith(5)
  })
})
