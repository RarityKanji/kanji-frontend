import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaShoppingCart, FaCheck, FaEnvelope } from "react-icons/fa";

// Assume mock data and setItems function are passed as props
const ItemShow = ({ items, setItems }) => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Simulating fetch item details from mock data
    const foundItem = items.find(item => item.id.toString() === itemId);
    if (foundItem) {
      setItem(foundItem);
      setMainImage(foundItem.images && foundItem.images.length > 0 ? foundItem.images[0] : '');
    } else {
      navigate('/not-found'); // Redirect to a not-found page or handle this case accordingly
    }
  }, [itemId, items, navigate]);

  const handleQuantityChange = (change) => {
    setQuantity(prevQuantity => Math.max(1, prevQuantity + change));
  };

  const handleDelete = () => {
    // Filter out the item to delete
    const updatedItems = items.filter(item => item.id.toString() !== itemId);
    setItems(updatedItems); // Update the mock data state
    navigate('/'); // Redirect user after deletion
  };

  if (!item) {
    return <div>Loading item details...</div>;
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
          {/* Add a delete button */}
          <button onClick={handleDelete} className="delete-item">Delete Item</button>
        </div>
      </div>
    </div>
  );
};

export default ItemShow;