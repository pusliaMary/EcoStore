import './index.css'
import { Cart } from './Components/Cart/Cart'
import { Nav } from './Components/Nav'
import { AllCategories } from './Components/Filter/AllCategories'

import { useState, useEffect } from 'react'
import { LoaderPage } from './Loader/LoaderPage'
import { About } from './Components/About'
import { Favourites } from './Components/Favourites/Favourites'
import { Products } from './Components/DishesComponents/Products'


function App() {
  
  const [loader, setLoader] = useState(true)

  useEffect(()=> {
    const timer = setTimeout(()=> setLoader(false), 2000)
    return ()=> clearTimeout(timer)
  }, [])

  return (
   <div className="columnCenter">
      {loader && <LoaderPage />}
      <Nav />
      <About />
      <AllCategories />
      <Products />
      <Cart />
      <Favourites />

      
      
   </div>
  )
}

export default App
