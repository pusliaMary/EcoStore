import './index.css'
import { Cart } from './Components/Cart/Cart'
import { Nav } from './Components/Nav'
import { AllCategories } from './Components/Filter/AllCategories'
import { About } from './Components/About'
import { Favourites } from './Components/Favourites/Favourites'
import { Products } from './Components/DishesComponents/Products'


function App() {
  
  

  return (
   <div className="columnCenter">
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
