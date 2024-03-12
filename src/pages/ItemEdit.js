import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const ItemEdit = ({ collectibles, editCollectible }) => {
  const { id } = useParams()
  let currentCollectible = collectibles?.find((collectible) => collectible.id === +id)

  const [editItem, setEditItem] = useState({
    name: currentCollectible?.name,
    description: currentCollectible?.description,
    price: currentCollectible?.price,
    image: currentCollectible?.image,
    condition: currentCollectible?.condition,
    authenticity: currentCollectible?.authenticity,
    category: currentCollectible?.category,
  })

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    editCollectible(editItem, id)
    navigate("/collectibles/books")
  }

  return (
    <div className="form-edit-container">
      <h1>Edit Collectible</h1>
      <Form onSubmit={handleSubmit} className="form-edit">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            value={editItem.name}
            onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="price">Price</Label>
          <Input
            type="text"
            name="price"
            id="price"
            value={editItem.price}
            onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image URL</Label>
          <Input
            type="text"
            name="image"
            id="image"
            value={editItem.image}
            onChange={(e) => setEditItem({ ...editItem, image: e.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            value={editItem.description}
            onChange={(e) =>
              setEditItem({ ...editItem, description: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="condition">Condition</Label>
          <Input
            type="text"
            name="condition"
            id="condition"
            value={editItem.condition}
            onChange={(e) =>
              setEditItem({ ...editItem, condition: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="authenticity">Authenticity</Label>
          <Input
            type="text"
            name="authenticity"
            id="authenticity"
            value={editItem.authenticity}
            onChange={(e) =>
              setEditItem({ ...editItem, authenticity: e.target.value })
            }
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category</Label>
          <Input
            type="text"
            name="category"
            id="category"
            value={editItem.category}
            onChange={(e) =>
              setEditItem({ ...editItem, category: e.target.value })
            }
          />
        </FormGroup>
        <Button type="submit" className="edit-collectible-button">Edit Collectible</Button>
      </Form>
    </div>
  )
}

export default ItemEdit