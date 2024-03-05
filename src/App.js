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

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0])
  const [collectibles, setCollectibles] = useState(mockCollectibles)

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/itemnew" element={<ItemNew />} />
        <Route path="/itemedit/:id" element={<ItemEdit />} />
        <Route path="/items/:itemId" element={<ItemShow />} />
        <Route path="/collectibles/:category" element={<ItemIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App