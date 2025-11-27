
import { useSelector } from 'react-redux'
import dataProducts from '../../Data/DataProducts'
import { Product } from './Product'
import { getSelectedCategory } from '../../redux/productsSlice'

export const Products = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return (<div className='categories'>
        {dataProducts
        .filter(product => {
            if (selectedCategory=== "ALL" ) return true
            return selectedCategory === product.category;
        })
        .map(product=> <Product product={product} key={product.id} />)}
    
    </div>
)

}



