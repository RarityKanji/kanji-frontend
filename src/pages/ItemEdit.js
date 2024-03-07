import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemEdit = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    condition: "",
    authenticity: "",
    category: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`/api/items/${itemId}`);
        if (!response.ok) throw new Error("Failed to fetch item details.");
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
        navigate('/not-found'); // Or show an error message
      } finally {
        setIsLoading(false);
      }
    };

    fetchItemDetails();
  }, [itemId, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem(prevItem => ({ ...prevItem, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(item),
      });
      if (!response.ok) throw new Error('Failed to update item.');
      navigate(`/items/${itemId}`); // Redirect to the item detail view
    } catch (error) {
      console.error("Error updating item:", error);
      // Handle update error (e.g., show feedback message)
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete item.');
      navigate('/'); // Redirect to the home or listing page
    } catch (error) {
      console.error("Error deleting item:", error);
      // Handle delete error
    }
  };

  if (isLoading) return <div>Loading...</div>;

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
  );
};

export default ItemEdit;