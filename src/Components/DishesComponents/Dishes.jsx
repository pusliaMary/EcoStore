
import { useSelector } from 'react-redux'
import dataDishes from '../../Data/DataDishes'
import { Dish } from './Dish'
import { getSelectedCategory } from '../../redux/dishesSlice'

export const Dishes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (<div className='categories'>
        {dataDishes
        .filter(dish => {
            if (selectedCategory=== "ALL" ) return true
            return selectedCategory === dish.category;
        })
        .map(dish=> <Dish dish={dish} key={dish.id} />)}
    
    </div>
)

}



