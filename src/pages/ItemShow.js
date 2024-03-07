import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaCheck, FaEnvelope } from "react-icons/fa";

// Assume mock data and setItems function are passed as props
const ItemShow = ({ collectibles, setCollectibles }) => {
  const { collectibleId } = useParams();
  const navigate = useNavigate();
  // const [collectible, setCollectible] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);


    const collectible = collectibles?.find(collectible => collectible?.id.toString() === collectibleId);
    // if (foundCollectible) {
    //   setCollectible(foundCollectible);
    //   setMainImage(foundCollectible.images && foundCollectible.images.length > 0 ? foundCollectible.images[0] : '');
    // }

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  const handleDelete = () => {
    // Filter out the item to delete
    const updatedCollectibles = collectibles.filter(collectible => collectible?.id.toString() !== collectibleId);
    setCollectibles(updatedCollectibles); // Update the mock data state
    navigate('/'); // Redirect user after deletion
  };

  // if (!collectible) {
  //   return <div>Loading item details...</div>;
  // }

  const emailSubject = encodeURIComponent(`Inquiry about ${collectible?.name}`);
  const emailBody = encodeURIComponent(`I am interested in your ${collectible?.name} listed for ${collectible?.price}. Could you provide more information?`);

  return (
    <div className="item-detail-container">
      <div className="breadcrumb">
        <Link to="/">Collectibles</Link> <span>›</span>
        <Link to="/category">Classes</Link> <span>›</span>
        <Link to={`/category/${collectible?.category}`}>{collectible?.category}</Link> <span>›</span>
        <span>Product Detail</span>
      </div>
      <div className="item-detail">
        <div className="item-images">
          <img src={mainImage} alt={collectible?.name} className="main-image" />
          <div className="thumbnail-images">
            {collectible?.images.map((img, index) => (
              <img key={index} src={img} alt={`Thumbnail ${index + 1}`} onClick={() => setMainImage(img)} />
            ))}
          </div>
        </div>
        <div className="item-info">
          <h2>{collectible?.name}</h2>
          <p className="price">${collectible?.price}</p>
          <p>{collectible?.description}</p>
          <p>Condition: {collectible?.condition}</p>
          <p>Authenticity: {collectible?.authenticity}</p>
          <div className="checkmarks">
            <p><FaCheck /> Free shipping on orders over $49USD.</p>
            <p><FaCheck /> Free + easy returns.</p>
          </div>
          <a href={`mailto:${collectible?.sellerEmail}?subject=${emailSubject}&body=${emailBody}`} className="contact-seller-button">
            <FaEnvelope /> Contact Seller
          </a>
          <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
          </div>
          <button className="add-to-bag"><FaShoppingCart /> Add to bag</button>
          <button className="checkout">Checkout</button>
          {/* Add a delete button */}
          <button onClick={handleDelete} className="delete-item">Delete Item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemShow;