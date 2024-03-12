import React from "react"
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"
import { NavLink, useNavigate } from "react-router-dom"
import { confirmAlert } from "react-confirm-alert" 
import "react-confirm-alert/src/react-confirm-alert.css" 

const ItemProtectedIndex = ({ collectibles, deleteCollectible, currentUser }) => {
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want to delete this item?",
      buttons: [
        {
          label: "Yes",
          onClick: async () => {
            try {
              await deleteCollectible(id)
              console.log("Collectible deleted successfully")
              navigate("/itemprotectedindex") 
            } catch (error) {
              console.error("Failed to delete collectible", error)
            }
          },
        },
        {
          label: "No",
        },
      ],
    })
  }

  return (
    <div className="item-body">
      <h1>My Items</h1>
      <div className="card-deck">
        {collectibles?.filter(collectible => collectible?.user_id === currentUser.id).map((collectible, index) => (
          <Card key={index} className="item-card">
            <CardImg top width="100%" src={collectible?.image} alt={`Image of ${collectible?.name}`} className="collectible-picture" />
            <CardBody>
              <CardTitle tag="h5">{collectible?.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted">{`Price: ${collectible?.price} | Condition: ${collectible?.condition} | Category: ${collectible?.category}`}</CardSubtitle>
              <div className="item-description">{collectible?.description}</div>
              <NavLink to={`/items/${collectible?.id}`} className="nav-link">
                <Button color="primary">See More Details</Button>
              </NavLink>
              <NavLink to={`/itemedit/${collectible?.id}`} className="nav-link">
                <Button color="warning">Edit Your Collectible</Button>
              </NavLink>
              <Button color="danger" onClick={() => handleDelete(collectible?.id)}>Delete Item</Button>
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ItemProtectedIndex