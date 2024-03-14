import React, { useState, useEffect } from "react"
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
import { useNavigate } from "react-router-dom"
import ItemProtectedIndex from "./pages/ItemProtectedIndex"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ContactUs from "./pages/ContactUs"
import TermsOfUse from "./pages/TermsOfUse"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import ScrollToTop from "./components/ScrollToTop"

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)
  const [collectibles, setCollectibles] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setCurrentUser(JSON.parse(loggedInUser))
    }
    readCollectibles()
  }, [])
  const url = "https://kanji-backend.onrender.com"

  const login = (userInfo) => {
    fetch(`${url}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
    .then((payload) => {
    
    localStorage.setItem("user", JSON.stringify(payload))
    setCurrentUser(payload)
  })
 } 
  
  const signup = (userInfo) => {
    fetch(`${url}/signup`, {
      body: JSON.stringify(userInfo),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      method: "POST"
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        
        localStorage.setItem("token", response.headers.get("Authorization"))
        return response.json()
      })
  .then((payload) => {
    
    localStorage.setItem("user", JSON.stringify(payload))
    setCurrentUser(payload)
  })
  .catch((error) => console.log("login errors: ", error))
}
    

  const logout = (id) => {
    fetch(`${url}/logout`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token") 
      },
      method: "DELETE"
    })
  
  .then((payload) => {
    localStorage.removeItem("token")
    
    localStorage.removeItem("user")
    setCurrentUser(null)
    })
    
  }
  const readCollectibles = () => {
    fetch(`${url}/collectibles`)
      .then((response) => response.json())
      .then((payload) => {
        setCollectibles(payload)
      })
      .catch((error) => console.log(error))
  }


  const createCollectible = (collectible) => {
    fetch(`${url}/collectibles`, {
      body: JSON.stringify(collectible),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readCollectibles())
    .catch((errors) => console.log("Collectible create errors:", errors))
  }

  const editCollectible = (collectible, id) => {
    fetch(`${url}/collectibles/${id}`, {
      body: JSON.stringify(collectible),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json)
    .then(() => readCollectibles())
    .catch((errors) => console.log("Collectible update errors", errors))
  }

  const deleteCollectible = (id) => {
    fetch(`${url}/collectibles/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => readCollectibles())
    .then(() => navigate("/collectibles/books"))
    .catch((errors) => console.log("delete errors:", errors))
  }

  return (
    <>
      <Header currentUser={currentUser} logout={logout} setCurrentUser={setCurrentUser} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home currentUser={currentUser} />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/itemnew" element={<ItemNew currentUser={currentUser} createCollectible={createCollectible}/>} />
        <Route path="/itemprotectedindex" element={<ItemProtectedIndex currentUser={currentUser} collectibles={collectibles} />} />
        <Route path="/itemedit/:id" element={<ItemEdit currentUser={currentUser} editCollectible={editCollectible} collectibles={collectibles} />} />
        <Route path="/itemshow/:id" element={<ItemShow currentUser={currentUser} collectibles={collectibles} deleteCollectible={deleteCollectible} />} />
        <Route path="/collectibles/:category" element={<ItemIndex collectibles={collectibles} />} />
        <Route path="/signup" element={<SignUp  signup={signup} />} />
        <Route path="/login" element={<SignIn login={login} />} />
        <Route path="/contact-us" element={<ContactUs  />}/>
        <Route path="privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App