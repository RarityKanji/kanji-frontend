import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemIndex from '../pages/ItemIndex'
import fetchMock from 'jest-fetch-mock'

fetchMock.enableMocks()

const mockCollectibles = [
  { id: 1, name: 'Ancient Vase', price: '100', condition: 'Good', category: 'Antiques', image: 'image-url-1.jpg' },
  { id: 2, name: 'Old Coin', price: '200', condition: 'Fair', category: 'Coins', image: 'image-url-2.jpg' },
]

beforeEach(() => {
  fetch.resetMocks()
})

describe('<ItemIndex />', () => {
  it('renders collectibles after fetching', async () => {
    fetch.mockResponseOnce(JSON.stringify(mockCollectibles))
    
    const setCollectibles = jest.fn()

    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemIndex collectibles={mockCollectibles} setCollectibles={setCollectibles} />} />
        </Routes>
      </BrowserRouter>
    )

    // Check for loading state
    expect(screen.getByText(/your treasures await.../i)).toBeInTheDocument()

    // Await for fetch to complete and re-render
    await waitFor(() => expect(screen.getByText(/ancient vase/i)).toBeInTheDocument())

    // Check for rendered items
    expect(screen.getByText(/old coin/i)).toBeInTheDocument()
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(setCollectibles).toHaveBeenCalledWith(mockCollectibles)
  })
})
