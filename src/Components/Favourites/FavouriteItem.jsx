import dataDishes from "../../Data/DataDishes"
import { removeItemFromFavourites } from "../../redux/favouritesSlice"
import { useDispatch } from "react-redux"



export const FavouriteItem = ({favouriteItem}) => {
    
    const dishes = dataDishes.find(item => item.id === favouriteItem.dishId)
    const dispatch = useDispatch()
    

    return (
    <div className="columnCenter">
        <div className="favouriteDish">
            <img className='img' src={`./${favouriteItem.dishImage}.jpg`} alt="pic" height="300px"/> 
            <p>{dishes.name}</p>
            <p>${dishes.price}</p>
        </div>
                              
        <span className="basket" onClick={()=> dispatch (removeItemFromFavourites({favouriteItemId: favouriteItem.id}))}>
            <img  className="icon" alt="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" width="25px"/>
        </span>
    </div>)
}