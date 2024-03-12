import React, { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"

const ItemIndex = ({ collectibles, setCollectibles }) => {
  const { category } = useParams()
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCollectibles = async () => {
      try {
        setLoading(true)
        const baseUrl = "http://localhost:3000"
        let url = `${baseUrl}/collectibles`
        if (category) {
          url += `?category=${category}`
        }
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Failed to fetch items")
        }
        const collectibles = await response.json()
        setCollectibles(collectibles)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching items:", error)
        setLoading(false)
      }
    }

    fetchCollectibles()
  }, [category])

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const sortCollectibles = (a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, ""))
    const priceB = parseFloat(b.price.replace(/,/g, ""))
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA
  }

  const filteredCollectibles = collectibles
    .filter((collectible) =>
      collectible?.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort(sortCollectibles)

  return (
    <div className="item-index-container">
      <h1>
        Explore Rare{" "}
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Collectibles"}
      </h1>
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search collections"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div>
          Sort by:{" "}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <div className="spinner-message">Your treasures await...</div>
      ) : (
        <div className="items-grid">
          {filteredCollectibles.length > 0 ? (
            filteredCollectibles.map((collectible) => (
              <div key={collectible?.id} className="collectible-item">
                <h3>{collectible.name}</h3>
                <img
                  src={collectible?.image}
                  alt={collectible?.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Price: {collectible?.price}</p>
                <p>Condition: {collectible?.condition}</p>
                <NavLink
                  to={`/itemshow/${collectible?.id}`}
                  className="view-details-link"
                >
                  View Details
                </NavLink>
              </div>
            ))
          ) : (
            <p>No items found in this category.</p>
          )}
        </div>
      )}
    </div>
  )
}

export default ItemIndex