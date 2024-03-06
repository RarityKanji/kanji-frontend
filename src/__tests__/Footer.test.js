import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { BrowserRouter } from 'react-router-dom'


describe("<Footer />", () => {
  it("renders an footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    
    const welcome = screen.getByRole("heading", { name: /kanji/i })
    expect(welcome).toBeInTheDocument()

  })
})