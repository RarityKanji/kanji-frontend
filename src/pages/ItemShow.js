import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { FaShoppingCart, FaCheck, FaEnvelope } from "react-icons/fa" 

const ItemShow = () => {
  const { itemId } = useParams()
  const [item, setItem] = useState(null)
  const [mainImage, setMainImage] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetch(`http://localhost:3000/items/${itemId}`)
      .then(response => response.json())
      .then(data => {
        console.log("Data:", data)
        setItem(data)
        setMainImage(data.images[0])
      })
      .catch(error => console.error("Couldn't fetch item data:", error))
  }, [itemId])

  if (!item) {
    return <div>Loading item details...</div>
  }
  
  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change))
  }

  const emailSubject = encodeURIComponent(`Inquiry about ${item.name}`);
  const emailBody = encodeURIComponent(`I am interested in your ${item.name} listed for ${item.price}. Could you provide more information?`);
  
  return (
    <div className="item-detail-container">
      <div className="breadcrumb">
        <Link to="/">Collectibles</Link> <span>›</span>
        <Link to="/category">Classes</Link> <span>›</span>
        <Link to={`/category/${item.category}`}>{item.category}</Link> <span>›</span>
        <span>Product Detail</span>
      </div>
      <div className="item-detail">
        <div className="item-images">
          <img src={mainImage} alt={item.name} className="main-image" />
          <div className="thumbnail-images">
            {item.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} onClick={() => setMainImage(img)} />
            ))}
          </div>
        </div>
        <div className="item-info">
          <h2>{item.name}</h2>
          <p className="price">${item.price}</p>
          <p>{item.description}</p>
          <p>Condition: {item.condition}</p>
          <p>Authenticity: {item.authenticity}</p>
          <div className="checkmarks">
            <p><FaCheck /> Free shipping on orders over $49USD.</p>
            <p><FaCheck /> Free + easy returns.</p>
          </div>
          <a href={`mailto:${item.sellerEmail}?subject=${emailSubject}&body=${emailBody}`} className="contact-seller-button">
            <FaEnvelope /> Contact Seller
          </a>
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button className="add-to-bag"><FaShoppingCart /> Add to bag</button>
          <button className="checkout">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default ItemShow