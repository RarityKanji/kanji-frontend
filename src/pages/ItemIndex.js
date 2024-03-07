import React, { useState, useEffect } from "react"
import { useParams, NavLink } from "react-router-dom"


const ItemIndex = () => {
  const { category } = useParams()
  const [items, setItems] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState("asc")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/items?category=${category}`);
        if (!response.ok) {
          throw new Error("Failed to fetch items");
        }
        const data = await response.json();
        setItems(data);
        setLoading(false)
      } catch (error) {
        console.error("Error fetching items:", error)
        setLoading(false);
      }
    }

    if (category) {
      fetchItems();
    } else {
      console.error("Category parameter is undefined.");
    }
  }, [category]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const sortItems = (a, b) => {
    const priceA = parseFloat(a.price.replace(/,/g, ""))
    const priceB = parseFloat(b.price.replace(/,/g, ""))
    return sortOrder === "asc" ? priceA - priceB : priceB - priceA
  }

  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort(sortItems)

  return (
    <div className="item-index-container">
      <h1>
        Explore Rare {category ? category.charAt(0).toUpperCase() + category.slice(1) : "Items"}
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
        <p>Loading...</p>
      ) : (
        <div className="items-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="collectible-item">
                <h3>{item.name}</h3>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "100px" }}
                />
                <p>Price: {item.price}</p>
                <p>Condition: {item.condition}</p>
                <NavLink to={`/items/${item.id}`} className="view-details-link">
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
