import dataProducts from "../../Data/DataProducts"
import { removeItemFromFavourites } from "../../redux/favouritesSlice"
import { useDispatch } from "react-redux"



export const FavouriteItem = ({favouriteItem}) => {
    
    const products = dataProducts.find(item => item.id === favouriteItem.productId)
    const dispatch = useDispatch()
    

    return (
    <div className="columnCenter">
        <div className="favouriteProduct">
            <img className='img' src={`./${favouriteItem.productImage}.jpg`} alt="pic" height="300px"/> 
            <p>{products.name}</p>
            <p>${products.price}</p>
        </div>
                              
        <span className="basket" onClick={()=> dispatch (removeItemFromFavourites({favouriteItemId: favouriteItem.id}))}>
            <img  className="icon" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25px"/>
        </span>
    </div>)
}