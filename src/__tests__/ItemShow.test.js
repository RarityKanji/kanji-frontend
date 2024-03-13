import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import ItemShow from '../pages/ItemShow'
import { confirmAlert } from 'react-confirm-alert' 

jest.mock('react-confirm-alert', () => ({
  confirmAlert: jest.fn(),
}))

const mockCollectibles = [{
  id: 1,
  name: 'Ancient Vase',
  image: 'image-url.jpg',
  price: '100',
  description: 'A very old vase.',
  condition: 'Good',
  authenticity: 'Authentic',
  category: 'Antiques',
  user_id: 1,
  sellerEmail: 'seller@example.com',
}]

const mockDeleteCollectible = jest.fn()
const mockCurrentUser = { id: 1 }

describe('<ItemShow />', () => {
  beforeEach(() => {
    render(
      <MemoryRouter initialEntries={['/items/1']}>
        <Routes>
          <Route path="/items/:id" element={<ItemShow collectibles={mockCollectibles} deleteCollectible={mockDeleteCollectible} currentUser={mockCurrentUser} />} />
        </Routes>
      </MemoryRouter>
    )
  })

  it('renders collectible details', () => {
    expect(screen.getByText(/ancient vase/i)).toBeInTheDocument()
    expect(screen.getByText(/\$100/i)).toBeInTheDocument()
    expect(screen.getByText(/a very old vase\./i)).toBeInTheDocument()
    expect(screen.getByText(/condition: good/i)).toBeInTheDocument()
    expect(screen.getByText(/authenticity: authentic/i)).toBeInTheDocument()
  })

  it('renders edit and delete actions for the owner', () => {
    expect(screen.getByText(/edit/i)).toBeInTheDocument()
    expect(screen.getByText(/delete/i)).toBeInTheDocument()
  })
})