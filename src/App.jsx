import './index.css'
import { Cart } from './Components/Cart/Cart'
import { Nav } from './Components/Nav'
import { AllCategories } from './Components/Filter/AllCategories'
import { Dishes } from './Components/DishesComponents/Dishes'
import { useState, useEffect } from 'react'
import { LoaderPage } from './Loader/LoaderPage'
import { About } from './Components/About'


function App() {
  
  const [loader, setLoader] = useState(true)

  useEffect(()=> {
    const timer = setTimeout(()=> setLoader(false), 2000)
    return ()=> clearTimeout(timer)
  }, [])

  return (
   <div className="App">

      <Nav />
      <About />
      <AllCategories />
      <Dishes />
      <Cart />

      {/* {loader && <LoaderPage />}
      <div className='block columnCenter'>
        
        <div className="header">
            <h1>Choose your preferences...</h1>
        </div>
        <AllCategories />
        <Cart />
                
      </div>
      <div className='block'>
        <Dishes />
      </div> */}
   </div>
  )
}

export default App
