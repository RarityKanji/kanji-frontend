import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

const ItemEdit = ({collectibles, editCollectible}) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    condition: "",
    authenticity: "",
    category: "",
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/items/${id}`)
        if (!response.ok) throw new Error("Failed to fetch item details.")
        const data = await response.json()
        setItem(data)
      } catch (error) {
        console.error("Error fetching item:", error)
        navigate('/not-found')
      } finally {
        setIsLoading(false)
      }
    }

    fetchItemDetails()
  }, [id, navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setItem(prevItem => ({ ...prevItem, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      })
      if (!response.ok) throw new Error('Failed to update item.')
      navigate(`/items/${id}`)
    } catch (error) {
      console.error("Error updating item:", error)
    }
  }

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error('Failed to delete item.')
      navigate('/')
    } catch (error) {
      console.error("Error deleting item:", error)
    }
  }

  if (isLoading) return <div>Loading...</div>

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" value={item.name} onChange={handleInputChange} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={item.description} onChange={handleInputChange} required />

      <label htmlFor="price">Price:</label>
      <input id="price" name="price" type="text" value={item.price} onChange={handleInputChange} required />

      <label htmlFor="condition">Condition:</label>
      <input id="condition" name="condition" type="text" value={item.condition} onChange={handleInputChange} />

      <label htmlFor="authenticity">Authenticity:</label>
      <input id="authenticity" name="authenticity" type="text" value={item.authenticity} onChange={handleInputChange} />

      <label htmlFor="category">Category:</label>
      <input id="category" name="category" type="text" value={item.category} onChange={handleInputChange} />
      
      <button type="submit">Update Item</button>
      <button type="button" onClick={handleDelete}>Delete Item</button>
    </form>
  )
}

export default ItemEdit