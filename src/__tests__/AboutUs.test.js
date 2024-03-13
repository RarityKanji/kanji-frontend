import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import AboutUs from '../pages/AboutUs' 

describe('<AboutUs />', () => {
  it('renders correctly and displays the expected content', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>
    )

    expect(screen.getByRole('heading', { level: 1, name: /A Journey of Mastery and Innovation in Full-Stack Development/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: /Our Path to Excellence:/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /Looking Forward/i })).toBeInTheDocument()

    expect(screen.getByText(/Seamless Integration of Technologies/i)).toBeInTheDocument()
    expect(screen.getByText(/Design That Speaks/i)).toBeInTheDocument()
    expect(screen.getByText(/Agility in Action/i)).toBeInTheDocument()
    expect(screen.getByText(/Synergy and Leadership/i)).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 4, name: /Ready to Make an Impact Together\?/i })).toBeInTheDocument()
    expect(screen.getByText(/We're on the lookout for opportunities to bring innovation,/i)).toBeInTheDocument()

    const contactLink = screen.getByRole('link', { name: /Contact Us Now/i })
    expect(contactLink).toBeInTheDocument()
    expect(contactLink).toHaveAttribute('href', '/contact-us')
  })
})