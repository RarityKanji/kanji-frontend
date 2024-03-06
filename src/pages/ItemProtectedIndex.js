import React from "react"
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const ItemProtectedIndex = ({ collectibles, currentUser }) => {
  const myItems = collectibles?.filter(
    (collectible) => collectible.user_id === currentUser.id
  )
  return (
    <div className="item-body">
      <h1>My Items</h1>
      <div className="card-deck">
        {myItems?.map((collectible, index) => {
          return (
            <Card key={index} className="item-card">
              <CardImg
                top
                width="100%"
                src={collectible.image}
                alt=""
                className="collectible-picture"
              />
              <CardBody>
                <div className="item-text">
                  <CardTitle>
                    <b>{collectible.name}</b>
                  </CardTitle>
                  <CardSubtitle>
                    {collectible.price}, {collectible.image},
                    {collectible.description}, {collectible.condition},
                    {collectible.authenticity}, {collectible.category}
                  </CardSubtitle>
                </div>
                <NavLink to={`/items/${collectible.id}`} className="nav-link">
                  <Button className="collectible-button">
                    See more Details
                  </Button>
                </NavLink>
                <Button className="delete-button">Delete</Button>
              </CardBody>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default ItemProtectedIndex
