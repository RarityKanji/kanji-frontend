import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button } from "reactstrap"

const ItemEdit = ({ collectibles, editCollectible }) => {
  const { id } = useParams()
  let currentCollectible = collectibles?.find(
    (collectible) => collectible.id === +id
  )

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
  const handleSubmit = () => {
    editCollectible(editItem, currentCollectible.id)
    navigate("/collectibles/books")
  }

  return (
    <Form>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          value={editItem.name}
          onChange={(e) => setEditItem({ ...editItem, name: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="price">Price</Label>
        <Input
          type="text"
          name="price"
          value={editItem.price}
          onChange={(e) => setEditItem({ ...editItem, price: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="url">Image URL</Label>
        <Input
          type="tect"
          name="image"
          value={editItem.image}
          onChange={(e) => setEditItem({ ...editItem, image: e.target.value })}
        />
      </FormGroup>
      <FormGroup>
        <Label for="description">Description</Label>
        <Input
          type="text"
          name="description"
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
          value={editItem.category}
          onChange={(e) =>
            setEditItem({ ...editItem, category: e.target.value })
          }
        />
      </FormGroup>
      <Button onClick={handleSubmit} name="submit">
        Submit Your edit collectible
      </Button>
    </Form>
  )
}

export default ItemEdit
