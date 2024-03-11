import React, { useState } from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"
import { useNavigate } from "react-router-dom"

const ItemNew = ({ createCollectible, currentUser }) => {
  const navigate = useNavigate()
  const [myCollectible, setMyCollectible] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    condition: "",
    authenticity: "",
    category: "",
    user_id: currentUser?.id
  })

  const handleChange = (e) => {
    setMyCollectible({ ...myCollectible, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCollectible(myCollectible)
    navigate("/collectibles/books")
  }

  return (
    <div className="form-container">
      {currentUser?.id ? (
        <>
          <h1>Create Collectible</h1>
          <Form className="form">
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input
                type="text"
                name="name"
                onChange={handleChange}
                value={myCollectible.name}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Price:</Label>
              <Input
                type="text"
                name="price"
                onChange={handleChange}
                value={myCollectible.price}
              />
            </FormGroup>
            <FormGroup>
              <Label for="image">Image:</Label>
              <Input
                type="text"
                name="image"
                onChange={handleChange}
                value={myCollectible.image}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description:</Label>
              <Input
                type="text"
                name="description"
                onChange={handleChange}
                value={myCollectible.description}
              />
            </FormGroup>
            <FormGroup>
              <Label for="condition">Condition:</Label>
              <Input
                type="text"
                name="condition"
                onChange={handleChange}
                value={myCollectible.condition}
              />
            </FormGroup>
            <FormGroup>
              <Label for="authenticity">Authenticity:</Label>
              <Input
                type="text"
                name="authenticity"
                onChange={handleChange}
                value={myCollectible.authenticity}
              />
            </FormGroup>
            <FormGroup>
              <Label for="category">Category:</Label>
              <Input
                type="text"
                name="category"
                onChange={handleChange}
                value={myCollectible.category}
              />
            </FormGroup>
            <Button onClick={handleSubmit}>Create</Button>
          </Form>
        </>
      ) : (
        <div>You need to sign in to create a new collectible.</div>
      )}
    </div>
  )
}

export default ItemNew
