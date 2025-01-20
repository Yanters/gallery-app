import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Gallery from '../Gallery'

const mockData = [
  {
    id: '1',
    urls: { small: 'image1.jpg' },
    alt_description: 'Image 1',
    user: { name: 'User 1' },
  },
  {
    id: '2',
    urls: { small: 'image2.jpg' },
    alt_description: 'Image 2',
    user: { name: 'User 2' },
  },
]

interface Photo {
  id: string
  urls: { small: string }
  alt_description: string
}

describe('Gallery Component', () => {
  test('displays loading spinner when loading', () => {
    render(
      <Gallery data={[]} isLoading={true} isError={null} mapping={jest.fn()} />
    )
    expect(
      screen.getByLabelText('magnifying-glass-loading')
    ).toBeInTheDocument()
  })

  test('displays error message when there is an error', () => {
    render(
      <Gallery
        data={[]}
        isLoading={false}
        isError={new Error()}
        mapping={jest.fn()}
      />
    )
    expect(screen.getByText('Error loading images!')).toBeInTheDocument()
  })

  test('renders images when data is available', () => {
    const mapping = (photo: Photo) => (
      <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
    )
    render(
      <Gallery
        data={mockData}
        isLoading={false}
        isError={null}
        mapping={mapping}
      />
    )
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  test('displays no images found message when data is empty', () => {
    render(
      <Gallery data={[]} isLoading={false} isError={null} mapping={jest.fn()} />
    )
    expect(screen.getByText('No images found')).toBeInTheDocument()
  })
})
