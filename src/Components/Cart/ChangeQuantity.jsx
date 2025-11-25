export const ChangeQuantity = ( {quantity, setQuantity} ) => {
 

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)

    }

    const removeQuantity = () => {
        if (quantity <=1) return
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)

    }
    
    
    
    return (
    <div className="buttons">
        <button className="change" onClick={removeQuantity}>-</button>
        
        <span>{quantity}</span>

        <button className="change" onClick={addQuantity}>+</button>

        
    
    </div>
    )

}