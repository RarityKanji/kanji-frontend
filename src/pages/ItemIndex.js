import React, { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

const ItemIndex = () => {
  const { category } = useParams()
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc") // Sort order state

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`http://localhost:3000/collectibles?category=${category}`)
        if (!response.ok) throw new Error("Data could not be fetched.")
        const data = await response.json()
        setItems(data)
      } catch (error) {
        console.error("Fetch error:", error)
      }
    }

    fetchItems()
  }, [category])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Sort function
  const sortItems = (a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase())).sort(sortItems)

  // Capitalize the first letter of the category name
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className="item-index-container">
      <h1>Explore Rare {category ? capitalizeFirstLetter(category) : "Items"}</h1>
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search collections"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div>
          Sort by:{" "}
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      <div className="items-grid">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} className="collectible-item">
              <h3>{item.name}</h3>
              <img src={item.image} alt={item.name} style={{ width: "100px", height: "100px" }} />
              <p>Price: {item.price}</p>
              <p>Condition: {item.condition}</p>
              <NavLink to={`/items/${item.id}`} className="view-details-link">View Details</NavLink>
            </div>
          ))
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
    </div>
  )
}

export default ItemIndex