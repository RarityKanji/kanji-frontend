import React, { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import AboutUs from "./pages/AboutUs"
import ItemNew from "./pages/ItemNew"
import ItemEdit from "./pages/ItemEdit"
import ItemShow from "./pages/ItemShow"
import ItemIndex from "./pages/ItemIndex"
import "./App.css"
import mockUsers from "./pages/mockUsers"
import mockCollectibles from "./pages/mockCollectibles"
import { useNavigate } from "react-router-dom"
import ItemProtectedIndex from "./pages/ItemProtectedIndex"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [collectibles, setCollectibles] = useState(mockCollectibles)
  const navigate = useNavigate()
  
  const createCollectible = (newCollectible) => {
    fetch('/api/collectibles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCollectible)
    })
    .then(response => {
      if (response.ok) {

        return response.json()
      } else {
        throw new Error('Failed to create collectible')
      }
    })
    .then(data => {
      setCollectibles([...collectibles, data])
      navigate("/collectibles")
    })
    .catch(error => {
      console.error('Error creating collectible:', error)
    })
  }
  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/itemnew" element={<ItemNew currentUser={currentUser} createCollectible={createCollectible}/>} />
        <Route path="/itemprotectedindex" element={<ItemProtectedIndex collectibles={collectibles}
        currentUser={currentUser}/>} />
        <Route path="/itemedit/:id" element={<ItemEdit />} />
        <Route path="/items/:itemId" element={<ItemShow />} />
        <Route path="/collectibles/:category" element={<ItemIndex />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App