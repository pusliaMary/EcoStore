import { Filter } from "./Filter"

export const AllCategories = () => {
    return (
    <div className="columnCenter">
        <h2>our proucts</h2>
        <div className="categories">
           {['KITCHEN', 'SHOPPING', 'SELFCARE', 'OTHERS', 'ALL'].
                map((category, index) => <Filter category={category} key={index}/>)
                }
        </div>
</div>
)
}