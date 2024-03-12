import React, { useState } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import {
  FaShoppingCart,
  FaCheck,
  FaEnvelope,
  FaEdit,
  FaTrash,
} from "react-icons/fa"
import { confirmAlert } from "react-confirm-alert"

const ItemShow = ({ collectibles, deleteCollectible, currentUser }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [mainImage, setMainImage] = useState("")
  const [quantity, setQuantity] = useState(1)
  const collectible = collectibles?.find((item) => item?.id === +id)

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change))
  }
  const emailSubject = encodeURIComponent(`Inquiry about ${collectible?.name}`)
  const emailBody = encodeURIComponent(
    `I am interested in your ${collectible?.name} listed for ${collectible?.price}. Could you provide more information?`
  )
  const isOwner = currentUser && collectible?.user_id === currentUser.id

  const handleDelete = () => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deleteCollectible(id)
              navigate("/collectibles/:category")
            } catch (error) {
              console.error("Deletion failed", error)
            }
          },
        },
        {
          label: "No",
        },
      ],
    })
  }

  if (!collectible) return <p>Loading...</p>

  return (
    <div className="item-detail-container">
      <div className="breadcrumb">
        <Link to="/">Collectibles</Link> <span>›</span>
        <Link to="/category">Classes</Link> <span>›</span>
        <Link to={`/category/${collectible?.category}`}>
          {collectible?.category}
        </Link>{" "}
        <span>›</span>
        <span>Product Detail</span>
      </div>
      <div className="item-detail">
        <div className="item-images">
          <div className="thumbnail-images">
            <img
              src={collectible?.image}
              alt={collectible?.name}
              onClick={() => setMainImage(collectible?.image)}
            />
          </div>
        </div>
        <div className="item-info">
          <h2>{collectible?.name}</h2>
          <p className="price">${collectible?.price}</p>
          <p>{collectible?.description}</p>
          <p>Condition: {collectible?.condition}</p>
          <p>Authenticity: {collectible?.authenticity}</p>
          <div className="checkmarks">
            <p>
              <FaCheck /> Free shipping on orders over $49USD.
            </p>
            <p>
              <FaCheck /> Free + easy returns.
            </p>
          </div>
          <a
            href={`mailto:${collectible?.sellerEmail}?subject=${emailSubject}&body=${emailBody}`}
            className="contact-seller-button"
          >
            <FaEnvelope /> Contact Seller
          </a>
          {/* <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div> */}
          <div className="item-actions">
            <button className="add-to-bag">
              <FaShoppingCart /> Add to treasure chest
            </button>
            <button className="checkout">Trade</button>
            <button className="checkout">Buy now</button>
            {isOwner && (
              <div className="item-owner-actions">
                <Link to={`/itemedit/${id}`} className="edit-button">
                  <FaEdit /> Edit
                </Link>
                <button onClick={handleDelete} className="delete-button">
                  <FaTrash /> Delete
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemShow