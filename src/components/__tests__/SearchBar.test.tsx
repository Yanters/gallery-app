import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import SearchBar from '../SearchBar'

jest.useFakeTimers()

describe('SearchBar Component', () => {
  test('calls onSearch with debounced input value', () => {
    const onSearchMock = jest.fn()
    render(<SearchBar query='' onSearch={onSearchMock} />)

    const input = screen.getByPlaceholderText('Search Unsplash')

    fireEvent.change(input, { target: { value: 'new query' } })

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(onSearchMock).toHaveBeenCalledWith('new query')
    expect(onSearchMock).toHaveBeenCalledTimes(1)
  })

  test('initializes input with query prop', () => {
    render(<SearchBar query='initial query' onSearch={jest.fn()} />)

    const input = screen.getByPlaceholderText('Search Unsplash')
    expect(input).toHaveValue('initial query')
  })

  test('calls onSearch when Enter key is pressed', () => {
    const onSearchMock = jest.fn()
    render(<SearchBar query='' onSearch={onSearchMock} />)

    const input = screen.getByPlaceholderText('Search Unsplash')
    fireEvent.change(input, { target: { value: 'instant search' } })

    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })

    expect(onSearchMock).toHaveBeenCalledWith('instant search')
    expect(onSearchMock).toHaveBeenCalledTimes(1)
  })

  test('clears debounce timer on unmount', () => {
    const onSearchMock = jest.fn()
    const { unmount } = render(<SearchBar query='' onSearch={onSearchMock} />)

    const input = screen.getByPlaceholderText('Search Unsplash')
    fireEvent.change(input, { target: { value: 'partial query' } })

    unmount()

    act(() => {
      jest.advanceTimersByTime(2000)
    })

    expect(onSearchMock).not.toHaveBeenCalled()
  })
})
