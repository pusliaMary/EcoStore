import { useSelector } from "react-redux"
import { FavouriteItem } from "./FavouriteItem"

import favour from '../../assets/favour.gif'
import { getFavouriteItems } from "../../redux/favouritesSlice"


export const Favourites = () => {

    const favouriteItems = useSelector(getFavouriteItems)
    

    return (<div className="columnCenter section">
        <div className="favouriteBlock">
            <img className="cartIcon" width='70px' src={favour}/>
        
        </div>
        <div className="flexRow">
            {favouriteItems.map(favouriteItem => <FavouriteItem favouriteItem={favouriteItem} key={favouriteItem.id}/>)}
        </div>
    </div>)
}